const character = {
    name: "Cat Mayo Magician ",
    class: "Mayo Magician",
    level: 1,
    health: 100,
    mana: 500,
    image: "../ponder/images/cat-character.png",

    attacked: function () {
        this.health -= 20;
      
        if(this.health <= 0) {
            this.health = 0;
            document.querySelector('#message').textContent =`${this.name} has died`;
        } else{
            document.querySelector('#message').textContent =`${this.name} was attacked`;

        }

    },
    
    levelUp: function () {
        this.level += 1;
        this.mana += 100;

        document.querySelector("#message").textContent = `${this.name} leveled up!`:
        renderCharacter();
    }
};

function renderCharacter(){
    document.querySelector("#characterName").textContent = character.name;
    document.querySelector("#characterClass").textContent = character.class;
    document.querySelector("#characterLevel").textContent = character.level;
    document.querySelector("#characterHealth").textContent = character.Health;
    document.querySelector("#characterMana").textContent = character.Mana;


   

    document.querySelector("#characterImager").setAttribute("src",character.image);
    document.querySelector("#characterImager").setAttribute("alt",character.name);
    
}

renderCharacter();

document.querySelector("#attackButton").addEventListener("click",function(){
    character.attacked();

});

document.querySelector("#levelButton").addEventListener("click",function(){

    character.levelup();
});

