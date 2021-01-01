function login(id, pw) {
    location.href = `id=${id}&pw=${pw}`
}
function loginIdPw() {
    const id = document.getElementById("id").value
    const pw = document.getElementById("pw").value
    login(id, pw)
}