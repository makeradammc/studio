const isMobile = window.innerWidth <= 768; //768
document.head.insertAdjacentHTML('beforeend', `<style>
${isMobile ? ` 
	
	.header { 
		width: 330px; 
		font-size: 14px;
	} 
	.main { 
		width: 280px; 
		position: absolute; 
		left: 60px;
		font-size: 14px;
	} 
	#side {
		display: flex;
		transform: translate(-310px);
		transition: 0.5s ease;
		position: absolute;
		top: 0px;
		z-index: 2;
	}
	.sidebar {
		background: rgba(20, 20, 20, 0.95);
		width: 330px;
	}
	.sidebar-low {
		background: rgba(20, 20, 20, 0.95);
		width: 330px;
	}

` : `.text {  } `}</style>`);
if (isMobile == true) {
	document.getElementById('mobile-sidebar').style.display = 'flex';
} else {
	document.getElementById('mobile-sidebar').style.display = 'none';
}

const sidebarButton = document.getElementById("sidebar-button");
const sidebarContainer = document.getElementById("side");

sidebarButton.onclick = (e) => {
    e.stopPropagation();

    const isActive = sidebarContainer.classList.toggle("active");

    if (isActive) {
        sidebarButton.src = "images/ui/1_side.png";
    } else {
        sidebarButton.src = "images/ui/2_side.png";
    }
};

document.addEventListener("click", (e) => {
    if (!sidebarContainer.contains(e.target) && e.target !== sidebarButton) {
        sidebarContainer.classList.remove("active");
        sidebarButton.src = "images/ui/2_side.png";
    }
});