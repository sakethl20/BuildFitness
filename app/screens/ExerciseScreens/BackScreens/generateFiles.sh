#!/bin/bash

for i in {DeclineCableFly,DeclineCablePress,DeclineDumbbellFly,DeclineDumbbellPress,Dips,DumbbellBenchPress,DumbbellDeclineBenchPress,DumbbellFly,DumbbellInclineBenchPress,DumbbellPullover,ExplosivePush-ups,InclineBenchPressMachine,InclineCableFly,InclineCablePress,InclineDumbbellFly,InclineDumbbellPress,MachineFly,MedicineBallChestPass,PlyometricPush-ups,Push-ups,Single-armCableCrossover,Single-armCableFly,Single-armDumbbellBenchPress,Single-armDumbbellFly,SwissBallDumbbellPress,WideGripPush-ups,CloseGripPush-ups,DiamondPush-ups,}
do
  touch "$i.js"
done