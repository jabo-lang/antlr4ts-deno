/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:36.6806851-07:00

import { ATNState } from "./ATNState.ts";
import { ATNStateType } from "./ATNStateType.ts";
import { Override } from "../Decorators.ts";
import { RuleStopState } from "./RuleStopState.ts";

export class RuleStartState extends ATNState {
	// This is always set during ATN deserialization
	public stopState!: RuleStopState;
	public isPrecedenceRule: boolean = false;
	public leftFactored: boolean = false;

	@Override
	get stateType(): ATNStateType {
		return ATNStateType.RULE_START;
	}
}
