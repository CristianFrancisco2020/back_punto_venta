    var time = new Date();
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

Swal.fire({
    icon: 'info',
    title: time,
    html: '<h2>Bienvenido.</h2>',
    backdrop: true
})