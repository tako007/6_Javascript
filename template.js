



const exceptionHandling = () => {
    try {
        alertx("alert")
    } catch (err) {
        console.error(err)
    } finally {
        console.warn("Burası çalışmalı")
    }
    console.log("Merhabalar")
}