const icon_menu = document.querySelectorAll('.icon-menu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.sidebar-overlay')

function toggleSidebar(){
	sidebar.classList.toggle('active')
	overlay.classList.toggle('active')
}

icon_menu.forEach((instance)=>{
	instance.addEventListener('click',()=>{
		toggleSidebar()
	})
})
overlay.addEventListener('click',()=>{
	toggleSidebar()
})