var State = function () { }
State.Ready = 'ready';
State.Play = 'play';

var Phase = function () { }
Phase.Main = 'main';
Phase.Common = 'common';
Phase.Fog = 'fog';
Phase.Mud = 'mud';
Phase.Scout1 = 'scout1';
Phase.Scout2 = 'scout2';
Phase.Scout3 = 'scout3';
Phase.Redeploy1 = 'redeploy1';
Phase.Redeploy2 = 'redeploy2';
Phase.Deserter = 'deserter';
Phase.Traitor1 = 'traitor1';
Phase.Traitor2 = 'traitor2';
Phase.Draw = 'draw';

var Tactics = function () { }
Tactics.Alexander = 0x0600;
Tactics.Darius = 0x0601;
Tactics.Companion = 0x0602;
Tactics.Shield = 0x0603;
Tactics.Fog = 0x0604;
Tactics.Mud = 0x0605;
Tactics.Scout = 0x0606;
Tactics.Redeploy = 0x0607;
Tactics.Deserter = 0x0608;
Tactics.Traitor = 0x0609;

var Const = function () { }
Const.State = State;
Const.Phase = Phase;
Const.Tactics = Tactics;

module.exports = Const;