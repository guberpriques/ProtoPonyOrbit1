/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pony1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ponysprite1", "./Pony1/costumes/ponysprite1.svg", {
        x: 4.339285714285666,
        y: 1.514285000000001
      }),
      new Costume("Leyeony1", "./Pony1/costumes/Leyeony1.svg", {
        x: -3.12500428571434,
        y: 1.3999950000000183
      }),
      new Costume("Reyepony1", "./Pony1/costumes/Reyepony1.svg", {
        x: -3.108695652173793,
        y: 0.015217324961867007
      })
    ];

    this.sounds = [new Sound("pop", "./Pony1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.gallop = 0.607;
    this.vars.sprint = 0.593;
    this.vars.early = 0.6;

    this.watchers.gallop = new Watcher({
      label: "Pony1: Gallop",
      style: "slider",
      visible: true,
      value: () => this.vars.gallop,
      setValue: value => {
        this.vars.gallop = value;
      },
      step: 0.01,
      min: 0,
      max: 10,
      x: 245,
      y: 175
    });
  }

  *whenGreenFlagClicked() {
    this.direction = 0;
    this.goto(-164, -15);
    this.size = 500;
    while (true) {
      this.costume = "Leyeony1";
      if (this.touching(Color.rgb(254, 0, 0))) {
        this.direction += 10;
      }
      if (this.touching(Color.rgb(0, 255, 255))) {
        this.direction -= 2;
      }
      this.costume = "Reyepony1";
      if (this.touching(Color.rgb(254, 0, 0))) {
        this.direction -= 10;
      }
      if (this.touching(Color.rgb(0, 255, 255))) {
        this.direction += 2;
      }
      this.costume = "ponysprite1";
      if (this.compare(this.timer, 15) < 0) {
        this.move(this.toNumber(this.vars.early));
      }
      if (this.compare(this.timer, 15) > 0) {
        this.move(this.toNumber(this.vars.gallop));
      }
      if (this.compare(this.timer, 42) > 0) {
        this.move(this.toNumber(this.vars.sprint));
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.early = 0.6;
    this.vars.gallop = 0.607;
    this.vars.sprint = 0.593;
  }
}
