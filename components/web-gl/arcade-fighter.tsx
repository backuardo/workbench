"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type GLTFResult = GLTF & {
	nodes: {
		Object_7: THREE.SkinnedMesh;
		_rootJoint: THREE.Bone;
	};
	materials: {
		Fighter1: THREE.MeshStandardMaterial;
	};
	animations: GLTFAction[];
};

type ActionName =
	| "Fighter1_Fight_Stance"
	| "Fighter1_Air_Block"
	| "Fighter1_Air_Block_Mirror"
	| "Fighter1_Air_Block_Take_Hit"
	| "Fighter1_Air_Block_Take_Hit_Mirror"
	| "Fighter1_Air_Crash"
	| "Fighter1_Air_Crash_Mirror"
	| "Fighter1_Air_Damage_Down"
	| "Fighter1_Air_Damage_Down_Mirror"
	| "Fighter1_Air_Damage_Spin"
	| "Fighter1_Air_Damage_Spin_Mirror"
	| "Fighter1_Air_Damage_Up"
	| "Fighter1_Air_Damage_Up_Mirror"
	| "Fighter1_Air_Kick"
	| "Fighter1_Air_Kick_Mirror"
	| "Fighter1_Air_Punch"
	| "Fighter1_Air_Punch_Mirror"
	| "Fighter1_Air_Take_Hit"
	| "Fighter1_Air_Take_Hit_Mirror"
	| "Fighter1_Block"
	| "Fighter1_Block_Mirror"
	| "Fighter1_Block_Take_Hit"
	| "Fighter1_Block_Take_Hit_Mirror"
	| "Fighter1_Crouch"
	| "Fighter1_Crouch_Block"
	| "Fighter1_Crouch_Block_Mirror"
	| "Fighter1_Crouch_Block_Take_Hit"
	| "Fighter1_Crouch_Block_Take_Hit_Mirror"
	| "Fighter1_Crouch_Damage_Heavy"
	| "Fighter1_Crouch_Damage_Heavy_Mirror"
	| "Fighter1_Crouch_Damage_Light"
	| "Fighter1_Crouch_Damage_Light_Mirror"
	| "Fighter1_Crouch_Kick_Heavy"
	| "Fighter1_Crouch_Kick_Heavy_Mirror"
	| "Fighter1_Crouch_Kick_Light"
	| "Fighter1_Crouch_Kick_Light_Mirror"
	| "Fighter1_Crouch_Mirror"
	| "Fighter1_Crouch_Punch_Heavy"
	| "Fighter1_Crouch_Punch_Heavy_Mirror"
	| "Fighter1_Crouch_Punch_Light"
	| "Fighter1_Crouch_Punch_Light_Mirror"
	| "Fighter1_Damage_Heavy"
	| "Fighter1_Damage_Heavy_Mirror"
	| "Fighter1_Damage_Light"
	| "Fighter1_Damage_Light_Mirror"
	| "Fighter1_DropDown"
	| "Fighter1_DropDown_Mirror"
	| "Fighter1_Fall"
	| "Fighter1_Fall_Mirror"
	| "Fighter1_Fight_Stance_Mirror"
	| "Fighter1_Flip"
	| "Fighter1_Flip_Backwards"
	| "Fighter1_Flip_Backwards_Mirror"
	| "Fighter1_Flip_Mirror"
	| "Fighter1_Get_Ready"
	| "Fighter1_Get_Ready_Mirror"
	| "Fighter1_Get_Up"
	| "Fighter1_Get_Up_Mirror"
	| "Fighter1_Jump_Up"
	| "Fighter1_Jump_Up_Mirror"
	| "Fighter1_Kick_Heavy"
	| "Fighter1_Kick_Heavy_Mirror"
	| "Fighter1_Kick_Light"
	| "Fighter1_Kick_Light_Mirror"
	| "Fighter1_Kick_Medium"
	| "Fighter1_Kick_Medium_Mirror"
	| "Fighter1_Kick_Special"
	| "Fighter1_Kick_Special_Mirror"
	| "Fighter1_Land"
	| "Fighter1_Land_Mirror"
	| "Fighter1_Leap_Backwards"
	| "Fighter1_Leap_Backwards_Mirror"
	| "Fighter1_Leap_Forward"
	| "Fighter1_Leap_Forward_Mirrror"
	| "Fighter1_Magic_Attack"
	| "Fighter1_Magic_Attack_Mirror"
	| "Fighter1_Move_Backwards"
	| "Fighter1_Move_Backwards_Mirror"
	| "Fighter1_Move_Forward"
	| "Fighter1_Move_Forward_Mirror"
	| "Fighter1_Punch_Heavy"
	| "Fighter1_Punch_Heavy_Mirror"
	| "Fighter1_Punch_Light"
	| "Fighter1_Punch_Light_Mirror"
	| "Fighter1_Punch_Medium"
	| "Fighter1_Punch_Medium_Mirror"
	| "Fighter1_Punch_Special"
	| "Fighter1_Punch_Special_Mirror"
	| "Fighter1_Sprint"
	| "Fighter1_Sprint_Mirror"
	| "Fighter1_Stunned"
	| "Fighter1_Stunned_Mirror"
	| "Fighter1_Timeout_Defeat"
	| "Fighter1_Timeout_Defeat_Mirror"
	| "Fighter1_Victory"
	| "Fighter1_Victory_Mirror";

export const ArcadeFighter: React.FC<JSX.IntrinsicElements["group"]> = (
	props
) => {
	const group = useRef<THREE.Group>(null!);
	const { nodes, materials, animations } = useGLTF(
		"/models/arcade-fighter.glb"
	) as GLTFResult;
	const { actions, mixer } = useAnimations(animations, group);

	useEffect(() => {
		actions.Fighter1_Fight_Stance.play();
	}, [actions, mixer]);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<primitive object={nodes._rootJoint} />
				<skinnedMesh
					name="Object_7"
					geometry={nodes.Object_7.geometry}
					material={materials.Fighter1}
					skeleton={nodes.Object_7.skeleton}
				/>
			</group>
		</group>
	);
};

useGLTF.preload("/models/arcade-fighter.glb");
