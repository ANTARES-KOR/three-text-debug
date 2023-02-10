# 텍스트 로드 테스트용 코드

## 실행 방법

```bash
# dependency 설치
npm install

# 개발환경 실행
npm run dev
```

## 모델 변경하기

1. `/public/assets` 폴더 아래에 로드하고자 하는 모델을 위치시킵니다.

2. `main.js` 에서 모델 로드 경로를 변경합니다.

예를 들어 `/public/assets/ybigta-text_mod2`를 추가했다면
경로를 `/assets/ybigta-text_mod2/ybigta-text_mod2.gltf`로 사용하면 됩니다.

```js
/**
 * 여기 부분이 모델을 로드하는 부분입니다.
 * public 폴더 아래의 경로에 대해서 지정해주면 되고,
 * .gltf 파일을 로드하면 됩니다.
 */
loader.load("/assets/ybigta-text_mod1/ybigta-text_mod1.gltf", (gltf) => {
  loadedModel = gltf;
  scene.add(loadedModel.scene);
  loadedModel.scene.scale.set(2, 2, 2);
  loadedModel.scene.position.set(0, 0, 0);
});
```
