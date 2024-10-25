document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.05)';
        });
        
        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1)';
        });
    });
});
