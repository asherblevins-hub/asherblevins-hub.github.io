import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ==========================
   LIGHTING
   ========================== */

scene.add(new THREE.AmbientLight(0xffffff, 1));

const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    2
);

directionalLight.position.set(5, 3, 5);

scene.add(directionalLight);

/* ==========================
   GLOBE
   ========================== */

const textureLoader = new THREE.TextureLoader();

const earthTexture = textureLoader.load(
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
);

const globe = new THREE.Mesh(
    new THREE.SphereGeometry(2, 64, 64),
    new THREE.MeshPhongMaterial({
        map: earthTexture
    })
);



// savedPins.forEach(pin => {

//     createPin(
//         new THREE.Vector3(
//             pin.x,
//             pin.y,
//             pin.z
//         )
//     );

// });

// console.log(
//     "Loaded",
//     savedPins.length,
//     "pins"
// );

camera.position.z = 5;

/* ==========================
   PIN STORAGE
   ========================== */

const STORAGE_KEY = "earthPins";

let savedPins = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
);

function savePin(position) {

    savedPins.push({
        x: position.x,
        y: position.y,
        z: position.z
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedPins)
    );

    console.log(
        "Saved pins:",
        localStorage.getItem(STORAGE_KEY)
    );
}

function savePins() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedPins)
    );
}

function createPin(localPosition) {

    const pin = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshBasicMaterial({
            color: 0xff0000
        })
    );

    pin.position.copy(localPosition);

    globe.add(pin);
    return pin;
}

scene.add(globe);

// Restore pins from storage
savedPins.forEach(pinData => {

    createPin(
        new THREE.Vector3(
            pinData.x,
            pinData.y,
            pinData.z
        )
    );

});

console.log("Loaded", savedPins.length, "pins");

/* ==========================
   PIN PLACEMENT
   ========================== */

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.domElement.addEventListener(
    "click",
    (event) => {

        if (savedPins.length > 0) {
            alert("You can only place up to 1 pin per visit.");
            return;
        }

        mouse.x =
            (event.clientX / window.innerWidth) * 2 - 1;

        mouse.y =
            -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(
            mouse,
            camera
        );

        const intersects =
            raycaster.intersectObject(globe);

        if (!intersects.length) return;

        const hitPoint = 
            intersects[0].point.clone();

        const localPoint =
            globe.worldToLocal(hitPoint);

        const pinPosition =
            localPoint
                .normalize()
                .multiplyScalar(2.05);

        createPin(pinPosition);

        savePin(pinPosition);

    //     savedPins.push({
    //         x: pinPosition.x,
    //         y: pinPosition.y,
    //         z: pinPosition.z})
    }
);

/* ==========================
   ANIMATION
   ========================== */

function animate() {

    requestAnimationFrame(animate);

    globe.rotation.y += 0.002;

    renderer.render(scene, camera);
}

animate();

/* ==========================
   RESIZE
   ========================== */

window.addEventListener("resize", () => {

    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});


// document
//     .getElementById("clearPins")
//     .addEventListener("click", () => {

//         while (globe.children.length > 0) {
//             globe.remove(globe.children[0]);
//         }

//         savedPins = [];

//         localStorage.removeItem(STORAGE_KEY);
//     });