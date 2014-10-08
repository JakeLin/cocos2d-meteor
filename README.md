Cocos2d-Meteor
==============

Bring Cocos2d-js and Meteor together.

##What is Cocos2d-Meteor
Cocos2d-Meteor brings the World's #1 Open Source Game Development Platform (Cocos2d) and the ultra-simple, database-everywhere, data-on-the-wire, pure-Javascript web framework (Meteor) together to help us develop games easier and quicker.
 
##Why use Cocos2d-Meteor
By using Cocos2d-Meteor, we can just use one language (JavaScript) to develop the entire game, which comprises frontend (scenes, sprites, actions and physics engine) and backend (leaderboard, level and progress). We can develop the entire project in one codebase. And don't need to worry about sending JSON via Restful API or Websocket messages back and forth because Meteor has helped us wire anything up. 

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

Live Demo at [cocos2d.meteor.com](http://cocos2d.meteor.com)

##Design Considerations
* To support IE9 and IE10, I have to embed the cocos2d js within $(document).ready() method. Therefore, all code uses `cc` variable must run after page loaded. In Meteor, we usually place those logic in Template.myTemplate.rendered function (Page Loaded event). 
* Cocos2d-Meteor should support all browsers which both Cocos2d-js and Meteor can support. If you find any problem please create an issue.

##Cocos2d-js v3.0 supported features
|File	|Description|
| ------------- |:-------------:|
|core	|Engine core modules, includes Director, Node, Scene, Layer, Sprite, LabelTTF, EventManger, Scheduler and Texture2D. The default render is canvas
|webgl	|Cocos2d WebGL support
|log	|Log system and debug informations
|actions|	Configurable actions for animating nodes with position, scale, etc
|audio	|Audio system
|menus	|Menu and MenuItem nodes for creating game menu
|render-texture	|RenderTexture node for custom rendering
|sprite-batch-node	|A type of sprite that can host sprites using the same texture and enable |texture batching to improve performance
|labels	|Label nodes including LabelBMFont, LabelAtlas
|motion-streak	|MotionStreak which can manage a ribbon based on its motion
|shape-nodes	|DrawNode can be used to render lines, polygons, curves, etc
|clipping-nodes	|ClippingNode can clip hosted nodes with shape or texture as stencil
|effects	|Effects that can be applied to nodes, like page turn, shake, wave, etc
|progress-timer	|ProgressTimer node which can transform a node into a progression bar
|transitions	|Scene transition effects
|particle	|ParticleSystem node and built in particle effects
|text-input	|Nodes for simple text inputing
|tilemap	|TMX file parser for creating tile map layers
|parallax	|Parallax effect which can be applied to layers
|gui	|Another GUI extension with a set of useful widgets
|ccbreader	|CocosBuilder editor support
|editbox	|Edit Box for more complex text inputing
|ccui	|Cocos UI widgets with layout support
|cocostudio	|CocoStudio editor support
|ccpool	|Sprite recycling pool
|pluginx	|Social network API plugins
|box2d	|Built in box2d physics engine support
|spine	|The spine support library

##Non-supported features
There are some conflicts between socketio and meteor since meteor has SockJS.
chipmunk can be integrated if required.

|File	|Description|
| ------------- |:-------------:|
|socketio	|ScoketIO library support
|chipmunk	|Built in Chipmunk physics engine support

