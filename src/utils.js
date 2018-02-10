class Utils {
	dist(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
	}

	padZero(n) {
		let s = n.toString();
		if (s.length <= 1) s = "0" + s;
		return s;
	}

	formatTime(dt) {
		const minutes = game.utils.padZero(Math.floor((dt/1000)/60));
		const seconds = game.utils.padZero(Math.floor(dt/1000)%60);
		const subseconds = game.utils.padZero(Math.floor((dt%1000)/10));
		return `${minutes}:${seconds}:${subseconds}`;
	}

	effect(x, y, key, group) {
		const explSprite = game.phaser.add.sprite(x, y, key);
		explSprite.anchor.set(0.5);
		explSprite.angle = Math.random()*360;
		if (Math.random() < 0.5) explSprite.scale.x = -1;
		if (Math.random() < 0.5) explSprite.scale.y = -1;
		explSprite.animations.add("expl", [0,1,2,3,4,5,6, 7], 50, false);
		explSprite.animations.getAnimation("expl").killOnComplete = true;
		explSprite.animations.play("expl");
		group.add(explSprite);
	}
}
