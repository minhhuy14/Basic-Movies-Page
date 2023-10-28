export default{
    name:'Header',
    data(){
        return {
        };
    },
    methods:{
    },
    template:`
        <div id="header">
        <p class="id-student-info">21120177</p>
        <h3>Movies info</h3>
        <p class="api-info">21177</p>
        <div class="form-check form-switch switch-button">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  @change="toggleDarkMode">
        <label class="form-check-label" for="flexSwitchCheckChecked">Dark mode</label>
    `
}