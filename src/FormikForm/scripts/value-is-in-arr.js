export default function valueIsInArr(userEnteredKeyCode, keyCodesArr) {
  const keyInArr = keyCodesArr.find(key => {
    return key === userEnteredKeyCode;
  });
  if (keyInArr === undefined) {
    return false;
  } else {
    return true;
  }
}
