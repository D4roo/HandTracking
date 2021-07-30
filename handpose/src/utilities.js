const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
    border: [17, 13, 9, 5],
};
// Drawing function thing this is so cool
export const drawHand = (predictions, ctx) =>{
    if(predictions.length>0){
        predictions.forEach((prediction)=>{
            const landmarks = prediction.landmarks;

            for(let j = 0; j <Object.keys(fingerJoints).length; j++){
                let finger = Object.keys(fingerJoints)[j];
                for(let k = 0; k<fingerJoints[finger].length -1; k++){
                    //Get the pairs here
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJoinIndex = fingerJoints[finger][k+1];
                    //Draw Path
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex] [0],
                        landmarks[firstJointIndex] [1],      
                    );
                    ctx.lineTo(
                        landmarks[secondJoinIndex] [0],
                        landmarks[secondJoinIndex] [1], 
                    )
                    ctx.strokeStyle = "red"
                    ctx.lineWidth = 4
                    ctx.stroke()
                }
            }

            
            
            

            for (let i=0; i<landmarks.length; i++){
                const x = landmarks[i][0];
                const y = landmarks[i][1];
                //First Number = Size | fillStyle = Color
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 3 * Math.PI);

                let color
                document.addEventListener('keyup', function (event) {
                    if(event.key === 'b')
                    {
                        color = "blue"
                        console.log("wprks");
                    } //else if(event.key === 'g')
                    //{
                        //color = "green"
                    //}
                });

                ctx.fillStyle = color;
                ctx.fill();
            }
        })
    }
}