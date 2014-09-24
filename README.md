Cocos2d-Meteor
==============

Bring Cocos2d-js and Meteor together.

##What is Cocos2d-Meteor
Cocos2d-Meteor brings the number one open source game engine (Cocos2d) and the most powerful full stack JavaScript framework (Meteor) together to help us develop games easier and quicker.
 
##Why use Cocos2d-Meteor
By using Cocos2d-Meteor, we can just use JavaScript to develop the entire game, which comprises frontend (scenes, sprites, actions and physics engine) and backend (leaderboard, level and progress).

##Installation
`$ meteor add jakelin:cocos2d-meteor`

##How to use

Create a new meteor project

`$ meteor create test`

Change directory to the new proejct

`$ cd test`

Install the package

`$ meteor add jakelin:cocos2d-meteor`

Add a `<canvas>` element inside `<body>` in the html file

```
<body>
  <h1>Welcome to Meteor!</h1>

  {{> hello}}
  <canvas id="gameCanvas" width="800" height="450"></canvas>
</body>
```
Add init logic inside `if (Meteor.isClient)` in the js file

```
  Template.hello.rendered = function() {
    cc.game.onStart = function(){
      //load resources
      cc.LoaderScene.preload([], function () {
        var MyScene = cc.Scene.extend({
          onEnter:function () {
            this._super();
            var size = cc.director.getWinSize();
            var sprite = cc.Sprite.create("");
            sprite.setPosition(size.width / 2, size.height / 2);
            sprite.setScale(0.8);
            this.addChild(sprite, 0);

            var label = cc.LabelTTF.create("Hello World", "Arial", 40);
            label.setPosition(size.width / 2, size.height / 2);
            this.addChild(label, 1);
          }
        });
        cc.director.runScene(new MyScene());
      }, this);
    };
    cc.game.run("gameCanvas");
  };
```
Done

Live Deom at [cocos2d.meteor.com](cocos2d.meteor.com)

##Design Considerations
* To support IE9 and IE10, I have to embed the cocos2d js within $(document).ready() method. Therefore, all code uses `cc` variable must run after page loaded. In Meteor, we usually place those logic in Template.myTemplate.rendered function (Page Loaded event). 
* Cocos2d-Meteor should support all browsers which both Cocos2d-js and Meteor can support. If you find any problem please create an issue.