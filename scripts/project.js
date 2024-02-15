
// Calculate the velocity by taking the position and time
function calculate_velocity(){
    let position = parseFloat(document.getElementById('position').value);
    let time= parseFloat(document.getElementById('time').value);
    let velocity = position / time;
    document.getElementById('velocity').value = velocity
}
document.getElementById('calculate_velocity').addEventListener('click', calculate_velocity);

// Calculates the position taking the time, acceleration, position and initial velocity as parameters.    
function calculate_position(){
    let initial_position = parseFloat(document.getElementById('initial_position').value);
    let initial_velocity = parseFloat(document.getElementById('initial_velocity').value);
    let time = parseFloat(document.getElementById('time2').value);
    let acceleration = parseFloat(document.getElementById('acceleration').value);

    let  position = initial_position + initial_velocity * time + acceleration * time * time / 2
    document.getElementById('calculate_position').value = position
}
document.getElementById('calculatePosition').addEventListener('click', calculate_position);

//Calculate the final velocity taking time, acceleration, and initial velocity as parameters.
function calculate_final_velocity() {
    let acceleration = parseFloat(document.getElementById('acceleration3').value);
    let time = parseFloat(document.getElementById('time3').value);
    let velocity = parseFloat(document.getElementById('velocity3').value);
    let final_velocity = velocity + acceleration * time;
    document.getElementById('calculate_final_velocity').value = final_velocity
}
document.getElementById('calculateFinalVelocity').addEventListener('click', calculate_final_velocity);
  