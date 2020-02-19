'use strict';
const dnd = require('@sindresorhus/do-not-disturb');

const willStartRecording = async ({state}) => {
	state.wasDoNotDisturbAlreadyEnabled = await dnd.isEnabled();

	if (!state.wasDoNotDisturbAlreadyEnabled) {
		return dnd.enable();
	}
};

const didStopRecording = async ({state}) => {
	if (!state.wasDoNotDisturbAlreadyEnabled) {
		dnd.disable();
	}
};

const doNotDisturb = {
	title: 'Silence notifications',
	willStartRecording,
	didStopRecording
};

exports.recordServices = [doNotDisturb];
