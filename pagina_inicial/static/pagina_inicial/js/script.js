document.addEventListener("DOMContentLoaded", () => {

    const cantidad = 40; // número de copos

    for (let i = 0; i < cantidad; i++) {
        const copo = document.createElement("div");
        copo.className = "copo";

        // posición horizontal aleatoria
        copo.style.left = Math.random() * window.innerWidth + "px";

        // tamaño aleatorio
        const size = Math.random() * 6 + 4;
        copo.style.width = size + "px";
        copo.style.height = size + "px";

        // velocidad aleatoria
        copo.style.animationDuration = (Math.random() * 5 + 5) + "s";

        // transparencia
        copo.style.opacity = Math.random();

        document.body.appendChild(copo);
    }
});
