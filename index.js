const hq = 42;
function distanceFromHqInBlocks(pickUp){  
    return Math.abs(pickUp - hq);
  }

function distanceFromHqInFeet(pickUp){
     const blocks = distanceFromHqInBlocks(pickUp)
     return blocks * 264
}
  
function distanceTravelledInFeet (pickUp, destination){
    return Math.abs((pickUp - destination) * 264);
}



function calculatesFarePrice(pickUp, destination){
    const feet = distanceTravelledInFeet(pickUp,destination)
    if(feet <= 400){
        return  0
    }else if(feet <= 2000){
        return Math.abs((feet - 400) *0.02);
    }else if(feet <= 2500){
        return 25
    }else if(feet > 2500){
        return "cannot travel that far"
    }
}