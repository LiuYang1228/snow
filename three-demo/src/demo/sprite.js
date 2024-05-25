import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const spriteTexture = textureLoader.load('./src/assets/sprite.png');
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture });

//创建Sprite粒子
const sprite = new THREE.Sprite(spriteMaterial);
sprite.position.set(0, 0, 0);
 //scene.add(sprite);

export default sprite;