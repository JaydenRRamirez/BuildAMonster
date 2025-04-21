class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.fKey = null;
        this.sKey = null;
        this.aKey = null;
        this.dKey = null;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;

        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY + 20;

        this.rightArmX = this.bodyX + 95;
        this.rightArmY = this.bodyY + 20;

        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 160;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 150;

        this.leftAccessoryX = this.bodyX - 25;
        this.leftAccessoryY = this.bodyY - 100;

        this.rightAccessoryX = this.bodyX + 45;
        this.rightAccessoryY = this.bodyY - 100;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");


        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.Leftarm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueA.png");
        my.sprite.Leftarm.flipX = true; 
        my.sprite.Rightarm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueB.png");
        my.sprite.Leftleg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redA.png");
        my.sprite.Leftleg.flipX = true;
        my.sprite.Rightleg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redB.png");
        my.sprite.Smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthA.png");
        my.sprite.Fangs = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.Fangs.visible = false;
        my.sprite.Eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human.png");
        my.sprite.Leftaccessory = this.add.sprite(this.leftAccessoryX, this.leftAccessoryY, "monsterParts", "detail_dark_antenna_large.png");
        my.sprite.Rightaccessory = this.add.sprite(this.rightAccessoryX, this.rightAccessoryY, "monsterParts", "detail_dark_antenna_small.png");

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        sKey.on('down', (key, event) => {
            my.sprite.Smile.visible = true;
            my.sprite.Fangs.visible = false;
        });
        
        fKey.on('down', (key, event) => {
            my.sprite.Fangs.visible = true;
            my.sprite.Smile.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        let speed = 1;
        if (this.aKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= speed;
            }
        } else if (this.dKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += speed;
            }
        }
    }

}