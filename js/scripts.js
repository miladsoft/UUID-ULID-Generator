// Function to generate UUID
function generateUUID() {
    const uuid = crypto.randomUUID();
    const uuidElement = document.getElementById('uuid');
    uuidElement.innerText = uuid;
    uuidElement.classList.add('highlight');
    setTimeout(() => {
        uuidElement.classList.remove('highlight');
    }, 1000);
}
generateUUID();
// Function to generate ULID
function generateULID() {
    const ulid = ULID.ulid();
    const ulidElement = document.getElementById('ulid');
    ulidElement.innerText = ulid;
    ulidElement.classList.add('highlight');
    setTimeout(() => {
        ulidElement.classList.remove('highlight');
    }, 1000);
}
generateULID();