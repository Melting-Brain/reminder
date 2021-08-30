const TodoRenderTime = ( {remainingTime} ) => {
  console.log(remainingTime)
  //remainingTime:Math.ceil((b-x)*100)/100 으로 콘솔 120번씩 뜨던거 해결
  const formatRemainingTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    let result;
    if (time < 60) result =`${seconds}s`
    else if (60 < time && time < 3600) result = `${minutes}m ${seconds}s`
    else result = `${hours}h ${minutes}m`
    return result  
  };
  if (remainingTime === 600) {
    alert('123')  // 리액트 스트릭트 모드 때문에 팝업 두번씩 뜸
    window.alert('이건 윈도우 알럿') 
    // 둘다 똑같이 todo가 열려있어야 알럿이 뜸
    // chrome notification api사용하는 것이 현명해보임. 
  }
  if (remainingTime === 0) {
    return (
    <div>
      <div className="timer">End</div>
    </div> 
    )
  }
  
  // 만약 remainingTime === 0 일때가 여러번 실행된다면, nodeModule/react-countdown~어쩌구/lib/index.js에서 remainingTime
  // 의 값을 math.ceil 말고 걍 b-x로 바꾸고 밑에 formatRemainingTime의 인자에 +1 해주면 딱 맞음. 

  return (
    <div className="timer">
      <div className="value">{formatRemainingTime(remainingTime)}</div>
    </div>
  );
};

export default TodoRenderTime;