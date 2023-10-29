export default{
    name:'Header',
    data(){
        return {
            darkMode: false
        };
    },
    methods:{
            toggleDarkMode(){
                this.darkMode = !this.darkMode;
                this.applyDarkMode();
            },
            applyDarkMode() {
                if (this.darkMode) {
                    document.body.setAttribute('data-bs-theme','dark');
                    document.body.style.background = '#000';
                }
                else {
                    document.body.removeAttribute('data-bs-theme');
                    document.body.style.background = '#c3c7c4';
                }
            }
    },
    template:`
        <div id="header">
        <p class="id-student-info">21120177</p>
        <h3>Movies info</h3>
        <p class="api-info">21177</p>
        <div class="form-check form-switch switch-button">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  @change="toggleDarkMode">
        <label class="form-check-label" for="flexSwitchCheckChecked">Dark mode</label>
        </div>
        </div>
    `
}