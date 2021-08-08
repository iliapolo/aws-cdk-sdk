/**
 * @schema CodePipelineAcknowledgeJobInput
 */
export interface CodePipelineAcknowledgeJobInput {
  /**
   * @schema CodePipelineAcknowledgeJobInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelineAcknowledgeJobInput#nonce
   */
  readonly nonce: string;

}

/**
 * Converts an object of type 'CodePipelineAcknowledgeJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineAcknowledgeJobInput(obj: CodePipelineAcknowledgeJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'nonce': obj.nonce,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineAcknowledgeJobOutput
 */
export interface CodePipelineAcknowledgeJobOutput {
  /**
   * @schema CodePipelineAcknowledgeJobOutput#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodePipelineAcknowledgeJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineAcknowledgeJobOutput(obj: CodePipelineAcknowledgeJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineAcknowledgeThirdPartyJobInput
 */
export interface CodePipelineAcknowledgeThirdPartyJobInput {
  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobInput#nonce
   */
  readonly nonce: string;

  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobInput#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'CodePipelineAcknowledgeThirdPartyJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineAcknowledgeThirdPartyJobInput(obj: CodePipelineAcknowledgeThirdPartyJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'nonce': obj.nonce,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineAcknowledgeThirdPartyJobOutput
 */
export interface CodePipelineAcknowledgeThirdPartyJobOutput {
  /**
   * @schema CodePipelineAcknowledgeThirdPartyJobOutput#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CodePipelineAcknowledgeThirdPartyJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineAcknowledgeThirdPartyJobOutput(obj: CodePipelineAcknowledgeThirdPartyJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineCreateCustomActionTypeInput
 */
export interface CodePipelineCreateCustomActionTypeInput {
  /**
   * @schema CodePipelineCreateCustomActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#version
   */
  readonly version: string;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#settings
   */
  readonly settings?: CodePipelineActionTypeSettings;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#configurationProperties
   */
  readonly configurationProperties?: CodePipelineActionConfigurationProperty[];

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#inputArtifactDetails
   */
  readonly inputArtifactDetails: CodePipelineArtifactDetails;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#outputArtifactDetails
   */
  readonly outputArtifactDetails: CodePipelineArtifactDetails;

  /**
   * @schema CodePipelineCreateCustomActionTypeInput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelineCreateCustomActionTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineCreateCustomActionTypeInput(obj: CodePipelineCreateCustomActionTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'provider': obj.provider,
    'version': obj.version,
    'settings': toJson_CodePipelineActionTypeSettings(obj.settings),
    'configurationProperties': obj.configurationProperties?.map(y => toJson_CodePipelineActionConfigurationProperty(y)),
    'inputArtifactDetails': toJson_CodePipelineArtifactDetails(obj.inputArtifactDetails),
    'outputArtifactDetails': toJson_CodePipelineArtifactDetails(obj.outputArtifactDetails),
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineCreateCustomActionTypeOutput
 */
export interface CodePipelineCreateCustomActionTypeOutput {
  /**
   * @schema CodePipelineCreateCustomActionTypeOutput#actionType
   */
  readonly actionType: CodePipelineActionType;

  /**
   * @schema CodePipelineCreateCustomActionTypeOutput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelineCreateCustomActionTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineCreateCustomActionTypeOutput(obj: CodePipelineCreateCustomActionTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': toJson_CodePipelineActionType(obj.actionType),
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineCreatePipelineInput
 */
export interface CodePipelineCreatePipelineInput {
  /**
   * @schema CodePipelineCreatePipelineInput#pipeline
   */
  readonly pipeline: CodePipelinePipelineDeclaration;

  /**
   * @schema CodePipelineCreatePipelineInput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelineCreatePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineCreatePipelineInput(obj: CodePipelineCreatePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_CodePipelinePipelineDeclaration(obj.pipeline),
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineCreatePipelineOutput
 */
export interface CodePipelineCreatePipelineOutput {
  /**
   * @schema CodePipelineCreatePipelineOutput#pipeline
   */
  readonly pipeline?: CodePipelinePipelineDeclaration;

  /**
   * @schema CodePipelineCreatePipelineOutput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelineCreatePipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineCreatePipelineOutput(obj: CodePipelineCreatePipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_CodePipelinePipelineDeclaration(obj.pipeline),
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDeleteCustomActionTypeInput
 */
export interface CodePipelineDeleteCustomActionTypeInput {
  /**
   * @schema CodePipelineDeleteCustomActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineDeleteCustomActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineDeleteCustomActionTypeInput#version
   */
  readonly version: string;

}

/**
 * Converts an object of type 'CodePipelineDeleteCustomActionTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDeleteCustomActionTypeInput(obj: CodePipelineDeleteCustomActionTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'provider': obj.provider,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDeletePipelineInput
 */
export interface CodePipelineDeletePipelineInput {
  /**
   * @schema CodePipelineDeletePipelineInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodePipelineDeletePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDeletePipelineInput(obj: CodePipelineDeletePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDeleteWebhookInput
 */
export interface CodePipelineDeleteWebhookInput {
  /**
   * @schema CodePipelineDeleteWebhookInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodePipelineDeleteWebhookInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDeleteWebhookInput(obj: CodePipelineDeleteWebhookInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDeleteWebhookOutput
 */
export interface CodePipelineDeleteWebhookOutput {
}

/**
 * Converts an object of type 'CodePipelineDeleteWebhookOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDeleteWebhookOutput(obj: CodePipelineDeleteWebhookOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDeregisterWebhookWithThirdPartyInput
 */
export interface CodePipelineDeregisterWebhookWithThirdPartyInput {
  /**
   * @schema CodePipelineDeregisterWebhookWithThirdPartyInput#webhookName
   */
  readonly webhookName?: string;

}

/**
 * Converts an object of type 'CodePipelineDeregisterWebhookWithThirdPartyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDeregisterWebhookWithThirdPartyInput(obj: CodePipelineDeregisterWebhookWithThirdPartyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhookName': obj.webhookName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDeregisterWebhookWithThirdPartyOutput
 */
export interface CodePipelineDeregisterWebhookWithThirdPartyOutput {
}

/**
 * Converts an object of type 'CodePipelineDeregisterWebhookWithThirdPartyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDeregisterWebhookWithThirdPartyOutput(obj: CodePipelineDeregisterWebhookWithThirdPartyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineDisableStageTransitionInput
 */
export interface CodePipelineDisableStageTransitionInput {
  /**
   * @schema CodePipelineDisableStageTransitionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineDisableStageTransitionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelineDisableStageTransitionInput#transitionType
   */
  readonly transitionType: string;

  /**
   * @schema CodePipelineDisableStageTransitionInput#reason
   */
  readonly reason: string;

}

/**
 * Converts an object of type 'CodePipelineDisableStageTransitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineDisableStageTransitionInput(obj: CodePipelineDisableStageTransitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'stageName': obj.stageName,
    'transitionType': obj.transitionType,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineEnableStageTransitionInput
 */
export interface CodePipelineEnableStageTransitionInput {
  /**
   * @schema CodePipelineEnableStageTransitionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineEnableStageTransitionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelineEnableStageTransitionInput#transitionType
   */
  readonly transitionType: string;

}

/**
 * Converts an object of type 'CodePipelineEnableStageTransitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineEnableStageTransitionInput(obj: CodePipelineEnableStageTransitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'stageName': obj.stageName,
    'transitionType': obj.transitionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetActionTypeInput
 */
export interface CodePipelineGetActionTypeInput {
  /**
   * @schema CodePipelineGetActionTypeInput#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineGetActionTypeInput#owner
   */
  readonly owner: string;

  /**
   * @schema CodePipelineGetActionTypeInput#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineGetActionTypeInput#version
   */
  readonly version: string;

}

/**
 * Converts an object of type 'CodePipelineGetActionTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetActionTypeInput(obj: CodePipelineGetActionTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'owner': obj.owner,
    'provider': obj.provider,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetActionTypeOutput
 */
export interface CodePipelineGetActionTypeOutput {
  /**
   * @schema CodePipelineGetActionTypeOutput#actionType
   */
  readonly actionType?: CodePipelineActionTypeDeclaration;

}

/**
 * Converts an object of type 'CodePipelineGetActionTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetActionTypeOutput(obj: CodePipelineGetActionTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': toJson_CodePipelineActionTypeDeclaration(obj.actionType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetJobDetailsInput
 */
export interface CodePipelineGetJobDetailsInput {
  /**
   * @schema CodePipelineGetJobDetailsInput#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'CodePipelineGetJobDetailsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetJobDetailsInput(obj: CodePipelineGetJobDetailsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetJobDetailsOutput
 */
export interface CodePipelineGetJobDetailsOutput {
  /**
   * @schema CodePipelineGetJobDetailsOutput#jobDetails
   */
  readonly jobDetails?: CodePipelineJobDetails;

}

/**
 * Converts an object of type 'CodePipelineGetJobDetailsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetJobDetailsOutput(obj: CodePipelineGetJobDetailsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDetails': toJson_CodePipelineJobDetails(obj.jobDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetPipelineInput
 */
export interface CodePipelineGetPipelineInput {
  /**
   * @schema CodePipelineGetPipelineInput#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineGetPipelineInput#version
   */
  readonly version?: number;

}

/**
 * Converts an object of type 'CodePipelineGetPipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetPipelineInput(obj: CodePipelineGetPipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetPipelineOutput
 */
export interface CodePipelineGetPipelineOutput {
  /**
   * @schema CodePipelineGetPipelineOutput#pipeline
   */
  readonly pipeline?: CodePipelinePipelineDeclaration;

  /**
   * @schema CodePipelineGetPipelineOutput#metadata
   */
  readonly metadata?: CodePipelinePipelineMetadata;

}

/**
 * Converts an object of type 'CodePipelineGetPipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetPipelineOutput(obj: CodePipelineGetPipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_CodePipelinePipelineDeclaration(obj.pipeline),
    'metadata': toJson_CodePipelinePipelineMetadata(obj.metadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetPipelineExecutionInput
 */
export interface CodePipelineGetPipelineExecutionInput {
  /**
   * @schema CodePipelineGetPipelineExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineGetPipelineExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

}

/**
 * Converts an object of type 'CodePipelineGetPipelineExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetPipelineExecutionInput(obj: CodePipelineGetPipelineExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetPipelineExecutionOutput
 */
export interface CodePipelineGetPipelineExecutionOutput {
  /**
   * @schema CodePipelineGetPipelineExecutionOutput#pipelineExecution
   */
  readonly pipelineExecution?: CodePipelinePipelineExecution;

}

/**
 * Converts an object of type 'CodePipelineGetPipelineExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetPipelineExecutionOutput(obj: CodePipelineGetPipelineExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecution': toJson_CodePipelinePipelineExecution(obj.pipelineExecution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetPipelineStateInput
 */
export interface CodePipelineGetPipelineStateInput {
  /**
   * @schema CodePipelineGetPipelineStateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodePipelineGetPipelineStateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetPipelineStateInput(obj: CodePipelineGetPipelineStateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetPipelineStateOutput
 */
export interface CodePipelineGetPipelineStateOutput {
  /**
   * @schema CodePipelineGetPipelineStateOutput#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CodePipelineGetPipelineStateOutput#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema CodePipelineGetPipelineStateOutput#stageStates
   */
  readonly stageStates?: CodePipelineStageState[];

  /**
   * @schema CodePipelineGetPipelineStateOutput#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelineGetPipelineStateOutput#updated
   */
  readonly updated?: string;

}

/**
 * Converts an object of type 'CodePipelineGetPipelineStateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetPipelineStateOutput(obj: CodePipelineGetPipelineStateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineVersion': obj.pipelineVersion,
    'stageStates': obj.stageStates?.map(y => toJson_CodePipelineStageState(y)),
    'created': obj.created,
    'updated': obj.updated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetThirdPartyJobDetailsInput
 */
export interface CodePipelineGetThirdPartyJobDetailsInput {
  /**
   * @schema CodePipelineGetThirdPartyJobDetailsInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelineGetThirdPartyJobDetailsInput#clientToken
   */
  readonly clientToken: string;

}

/**
 * Converts an object of type 'CodePipelineGetThirdPartyJobDetailsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetThirdPartyJobDetailsInput(obj: CodePipelineGetThirdPartyJobDetailsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineGetThirdPartyJobDetailsOutput
 */
export interface CodePipelineGetThirdPartyJobDetailsOutput {
  /**
   * @schema CodePipelineGetThirdPartyJobDetailsOutput#jobDetails
   */
  readonly jobDetails?: CodePipelineThirdPartyJobDetails;

}

/**
 * Converts an object of type 'CodePipelineGetThirdPartyJobDetailsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineGetThirdPartyJobDetailsOutput(obj: CodePipelineGetThirdPartyJobDetailsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobDetails': toJson_CodePipelineThirdPartyJobDetails(obj.jobDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListActionExecutionsInput
 */
export interface CodePipelineListActionExecutionsInput {
  /**
   * @schema CodePipelineListActionExecutionsInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineListActionExecutionsInput#filter
   */
  readonly filter?: CodePipelineActionExecutionFilter;

  /**
   * @schema CodePipelineListActionExecutionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodePipelineListActionExecutionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListActionExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListActionExecutionsInput(obj: CodePipelineListActionExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'filter': toJson_CodePipelineActionExecutionFilter(obj.filter),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListActionExecutionsOutput
 */
export interface CodePipelineListActionExecutionsOutput {
  /**
   * @schema CodePipelineListActionExecutionsOutput#actionExecutionDetails
   */
  readonly actionExecutionDetails?: CodePipelineActionExecutionDetail[];

  /**
   * @schema CodePipelineListActionExecutionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListActionExecutionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListActionExecutionsOutput(obj: CodePipelineListActionExecutionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionExecutionDetails': obj.actionExecutionDetails?.map(y => toJson_CodePipelineActionExecutionDetail(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListActionTypesInput
 */
export interface CodePipelineListActionTypesInput {
  /**
   * @schema CodePipelineListActionTypesInput#actionOwnerFilter
   */
  readonly actionOwnerFilter?: string;

  /**
   * @schema CodePipelineListActionTypesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodePipelineListActionTypesInput#regionFilter
   */
  readonly regionFilter?: string;

}

/**
 * Converts an object of type 'CodePipelineListActionTypesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListActionTypesInput(obj: CodePipelineListActionTypesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionOwnerFilter': obj.actionOwnerFilter,
    'nextToken': obj.nextToken,
    'regionFilter': obj.regionFilter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListActionTypesOutput
 */
export interface CodePipelineListActionTypesOutput {
  /**
   * @schema CodePipelineListActionTypesOutput#actionTypes
   */
  readonly actionTypes: CodePipelineActionType[];

  /**
   * @schema CodePipelineListActionTypesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListActionTypesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListActionTypesOutput(obj: CodePipelineListActionTypesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionTypes': obj.actionTypes?.map(y => toJson_CodePipelineActionType(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListPipelineExecutionsInput
 */
export interface CodePipelineListPipelineExecutionsInput {
  /**
   * @schema CodePipelineListPipelineExecutionsInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineListPipelineExecutionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodePipelineListPipelineExecutionsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListPipelineExecutionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListPipelineExecutionsInput(obj: CodePipelineListPipelineExecutionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListPipelineExecutionsOutput
 */
export interface CodePipelineListPipelineExecutionsOutput {
  /**
   * @schema CodePipelineListPipelineExecutionsOutput#pipelineExecutionSummaries
   */
  readonly pipelineExecutionSummaries?: CodePipelinePipelineExecutionSummary[];

  /**
   * @schema CodePipelineListPipelineExecutionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListPipelineExecutionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListPipelineExecutionsOutput(obj: CodePipelineListPipelineExecutionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionSummaries': obj.pipelineExecutionSummaries?.map(y => toJson_CodePipelinePipelineExecutionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListPipelinesInput
 */
export interface CodePipelineListPipelinesInput {
  /**
   * @schema CodePipelineListPipelinesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodePipelineListPipelinesInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodePipelineListPipelinesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListPipelinesInput(obj: CodePipelineListPipelinesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListPipelinesOutput
 */
export interface CodePipelineListPipelinesOutput {
  /**
   * @schema CodePipelineListPipelinesOutput#pipelines
   */
  readonly pipelines?: CodePipelinePipelineSummary[];

  /**
   * @schema CodePipelineListPipelinesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListPipelinesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListPipelinesOutput(obj: CodePipelineListPipelinesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelines': obj.pipelines?.map(y => toJson_CodePipelinePipelineSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListTagsForResourceInput
 */
export interface CodePipelineListTagsForResourceInput {
  /**
   * @schema CodePipelineListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodePipelineListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodePipelineListTagsForResourceInput#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodePipelineListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListTagsForResourceInput(obj: CodePipelineListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListTagsForResourceOutput
 */
export interface CodePipelineListTagsForResourceOutput {
  /**
   * @schema CodePipelineListTagsForResourceOutput#tags
   */
  readonly tags?: CodePipelineTag[];

  /**
   * @schema CodePipelineListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListTagsForResourceOutput(obj: CodePipelineListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListWebhooksInput
 */
export interface CodePipelineListWebhooksInput {
  /**
   * @schema CodePipelineListWebhooksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodePipelineListWebhooksInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodePipelineListWebhooksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListWebhooksInput(obj: CodePipelineListWebhooksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListWebhooksOutput
 */
export interface CodePipelineListWebhooksOutput {
  /**
   * @schema CodePipelineListWebhooksOutput#webhooks
   */
  readonly webhooks?: CodePipelineListWebhookItem[];

  /**
   * @schema CodePipelineListWebhooksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodePipelineListWebhooksOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListWebhooksOutput(obj: CodePipelineListWebhooksOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhooks': obj.webhooks?.map(y => toJson_CodePipelineListWebhookItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePollForJobsInput
 */
export interface CodePipelinePollForJobsInput {
  /**
   * @schema CodePipelinePollForJobsInput#actionTypeId
   */
  readonly actionTypeId: CodePipelineActionTypeId;

  /**
   * @schema CodePipelinePollForJobsInput#maxBatchSize
   */
  readonly maxBatchSize?: number;

  /**
   * @schema CodePipelinePollForJobsInput#queryParam
   */
  readonly queryParam?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodePipelinePollForJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePollForJobsInput(obj: CodePipelinePollForJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionTypeId': toJson_CodePipelineActionTypeId(obj.actionTypeId),
    'maxBatchSize': obj.maxBatchSize,
    'queryParam': ((obj.queryParam) === undefined) ? undefined : (Object.entries(obj.queryParam).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePollForJobsOutput
 */
export interface CodePipelinePollForJobsOutput {
  /**
   * @schema CodePipelinePollForJobsOutput#jobs
   */
  readonly jobs?: CodePipelineJob[];

}

/**
 * Converts an object of type 'CodePipelinePollForJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePollForJobsOutput(obj: CodePipelinePollForJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_CodePipelineJob(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePollForThirdPartyJobsInput
 */
export interface CodePipelinePollForThirdPartyJobsInput {
  /**
   * @schema CodePipelinePollForThirdPartyJobsInput#actionTypeId
   */
  readonly actionTypeId: CodePipelineActionTypeId;

  /**
   * @schema CodePipelinePollForThirdPartyJobsInput#maxBatchSize
   */
  readonly maxBatchSize?: number;

}

/**
 * Converts an object of type 'CodePipelinePollForThirdPartyJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePollForThirdPartyJobsInput(obj: CodePipelinePollForThirdPartyJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionTypeId': toJson_CodePipelineActionTypeId(obj.actionTypeId),
    'maxBatchSize': obj.maxBatchSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePollForThirdPartyJobsOutput
 */
export interface CodePipelinePollForThirdPartyJobsOutput {
  /**
   * @schema CodePipelinePollForThirdPartyJobsOutput#jobs
   */
  readonly jobs?: CodePipelineThirdPartyJob[];

}

/**
 * Converts an object of type 'CodePipelinePollForThirdPartyJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePollForThirdPartyJobsOutput(obj: CodePipelinePollForThirdPartyJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_CodePipelineThirdPartyJob(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutActionRevisionInput
 */
export interface CodePipelinePutActionRevisionInput {
  /**
   * @schema CodePipelinePutActionRevisionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelinePutActionRevisionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelinePutActionRevisionInput#actionName
   */
  readonly actionName: string;

  /**
   * @schema CodePipelinePutActionRevisionInput#actionRevision
   */
  readonly actionRevision: CodePipelineActionRevision;

}

/**
 * Converts an object of type 'CodePipelinePutActionRevisionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutActionRevisionInput(obj: CodePipelinePutActionRevisionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'stageName': obj.stageName,
    'actionName': obj.actionName,
    'actionRevision': toJson_CodePipelineActionRevision(obj.actionRevision),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutActionRevisionOutput
 */
export interface CodePipelinePutActionRevisionOutput {
  /**
   * @schema CodePipelinePutActionRevisionOutput#newRevision
   */
  readonly newRevision?: boolean;

  /**
   * @schema CodePipelinePutActionRevisionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelinePutActionRevisionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutActionRevisionOutput(obj: CodePipelinePutActionRevisionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'newRevision': obj.newRevision,
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutApprovalResultInput
 */
export interface CodePipelinePutApprovalResultInput {
  /**
   * @schema CodePipelinePutApprovalResultInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelinePutApprovalResultInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelinePutApprovalResultInput#actionName
   */
  readonly actionName: string;

  /**
   * @schema CodePipelinePutApprovalResultInput#result
   */
  readonly result: CodePipelineApprovalResult;

  /**
   * @schema CodePipelinePutApprovalResultInput#token
   */
  readonly token: string;

}

/**
 * Converts an object of type 'CodePipelinePutApprovalResultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutApprovalResultInput(obj: CodePipelinePutApprovalResultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'stageName': obj.stageName,
    'actionName': obj.actionName,
    'result': toJson_CodePipelineApprovalResult(obj.result),
    'token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutApprovalResultOutput
 */
export interface CodePipelinePutApprovalResultOutput {
  /**
   * @schema CodePipelinePutApprovalResultOutput#approvedAt
   */
  readonly approvedAt?: string;

}

/**
 * Converts an object of type 'CodePipelinePutApprovalResultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutApprovalResultOutput(obj: CodePipelinePutApprovalResultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'approvedAt': obj.approvedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutJobFailureResultInput
 */
export interface CodePipelinePutJobFailureResultInput {
  /**
   * @schema CodePipelinePutJobFailureResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutJobFailureResultInput#failureDetails
   */
  readonly failureDetails: CodePipelineFailureDetails;

}

/**
 * Converts an object of type 'CodePipelinePutJobFailureResultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutJobFailureResultInput(obj: CodePipelinePutJobFailureResultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'failureDetails': toJson_CodePipelineFailureDetails(obj.failureDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutJobSuccessResultInput
 */
export interface CodePipelinePutJobSuccessResultInput {
  /**
   * @schema CodePipelinePutJobSuccessResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#currentRevision
   */
  readonly currentRevision?: CodePipelineCurrentRevision;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#executionDetails
   */
  readonly executionDetails?: CodePipelineExecutionDetails;

  /**
   * @schema CodePipelinePutJobSuccessResultInput#outputVariables
   */
  readonly outputVariables?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodePipelinePutJobSuccessResultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutJobSuccessResultInput(obj: CodePipelinePutJobSuccessResultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'currentRevision': toJson_CodePipelineCurrentRevision(obj.currentRevision),
    'continuationToken': obj.continuationToken,
    'executionDetails': toJson_CodePipelineExecutionDetails(obj.executionDetails),
    'outputVariables': ((obj.outputVariables) === undefined) ? undefined : (Object.entries(obj.outputVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutThirdPartyJobFailureResultInput
 */
export interface CodePipelinePutThirdPartyJobFailureResultInput {
  /**
   * @schema CodePipelinePutThirdPartyJobFailureResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutThirdPartyJobFailureResultInput#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CodePipelinePutThirdPartyJobFailureResultInput#failureDetails
   */
  readonly failureDetails: CodePipelineFailureDetails;

}

/**
 * Converts an object of type 'CodePipelinePutThirdPartyJobFailureResultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutThirdPartyJobFailureResultInput(obj: CodePipelinePutThirdPartyJobFailureResultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'clientToken': obj.clientToken,
    'failureDetails': toJson_CodePipelineFailureDetails(obj.failureDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutThirdPartyJobSuccessResultInput
 */
export interface CodePipelinePutThirdPartyJobSuccessResultInput {
  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#currentRevision
   */
  readonly currentRevision?: CodePipelineCurrentRevision;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelinePutThirdPartyJobSuccessResultInput#executionDetails
   */
  readonly executionDetails?: CodePipelineExecutionDetails;

}

/**
 * Converts an object of type 'CodePipelinePutThirdPartyJobSuccessResultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutThirdPartyJobSuccessResultInput(obj: CodePipelinePutThirdPartyJobSuccessResultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'clientToken': obj.clientToken,
    'currentRevision': toJson_CodePipelineCurrentRevision(obj.currentRevision),
    'continuationToken': obj.continuationToken,
    'executionDetails': toJson_CodePipelineExecutionDetails(obj.executionDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutWebhookInput
 */
export interface CodePipelinePutWebhookInput {
  /**
   * @schema CodePipelinePutWebhookInput#webhook
   */
  readonly webhook: CodePipelineWebhookDefinition;

  /**
   * @schema CodePipelinePutWebhookInput#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelinePutWebhookInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutWebhookInput(obj: CodePipelinePutWebhookInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_CodePipelineWebhookDefinition(obj.webhook),
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePutWebhookOutput
 */
export interface CodePipelinePutWebhookOutput {
  /**
   * @schema CodePipelinePutWebhookOutput#webhook
   */
  readonly webhook?: CodePipelineListWebhookItem;

}

/**
 * Converts an object of type 'CodePipelinePutWebhookOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePutWebhookOutput(obj: CodePipelinePutWebhookOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhook': toJson_CodePipelineListWebhookItem(obj.webhook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineRegisterWebhookWithThirdPartyInput
 */
export interface CodePipelineRegisterWebhookWithThirdPartyInput {
  /**
   * @schema CodePipelineRegisterWebhookWithThirdPartyInput#webhookName
   */
  readonly webhookName?: string;

}

/**
 * Converts an object of type 'CodePipelineRegisterWebhookWithThirdPartyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineRegisterWebhookWithThirdPartyInput(obj: CodePipelineRegisterWebhookWithThirdPartyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'webhookName': obj.webhookName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineRegisterWebhookWithThirdPartyOutput
 */
export interface CodePipelineRegisterWebhookWithThirdPartyOutput {
}

/**
 * Converts an object of type 'CodePipelineRegisterWebhookWithThirdPartyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineRegisterWebhookWithThirdPartyOutput(obj: CodePipelineRegisterWebhookWithThirdPartyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineRetryStageExecutionInput
 */
export interface CodePipelineRetryStageExecutionInput {
  /**
   * @schema CodePipelineRetryStageExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineRetryStageExecutionInput#stageName
   */
  readonly stageName: string;

  /**
   * @schema CodePipelineRetryStageExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema CodePipelineRetryStageExecutionInput#retryMode
   */
  readonly retryMode: string;

}

/**
 * Converts an object of type 'CodePipelineRetryStageExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineRetryStageExecutionInput(obj: CodePipelineRetryStageExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'stageName': obj.stageName,
    'pipelineExecutionId': obj.pipelineExecutionId,
    'retryMode': obj.retryMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineRetryStageExecutionOutput
 */
export interface CodePipelineRetryStageExecutionOutput {
  /**
   * @schema CodePipelineRetryStageExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelineRetryStageExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineRetryStageExecutionOutput(obj: CodePipelineRetryStageExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStartPipelineExecutionInput
 */
export interface CodePipelineStartPipelineExecutionInput {
  /**
   * @schema CodePipelineStartPipelineExecutionInput#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineStartPipelineExecutionInput#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodePipelineStartPipelineExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStartPipelineExecutionInput(obj: CodePipelineStartPipelineExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStartPipelineExecutionOutput
 */
export interface CodePipelineStartPipelineExecutionOutput {
  /**
   * @schema CodePipelineStartPipelineExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelineStartPipelineExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStartPipelineExecutionOutput(obj: CodePipelineStartPipelineExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStopPipelineExecutionInput
 */
export interface CodePipelineStopPipelineExecutionInput {
  /**
   * @schema CodePipelineStopPipelineExecutionInput#pipelineName
   */
  readonly pipelineName: string;

  /**
   * @schema CodePipelineStopPipelineExecutionInput#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema CodePipelineStopPipelineExecutionInput#abandon
   */
  readonly abandon?: boolean;

  /**
   * @schema CodePipelineStopPipelineExecutionInput#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'CodePipelineStopPipelineExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStopPipelineExecutionInput(obj: CodePipelineStopPipelineExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineExecutionId': obj.pipelineExecutionId,
    'abandon': obj.abandon,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStopPipelineExecutionOutput
 */
export interface CodePipelineStopPipelineExecutionOutput {
  /**
   * @schema CodePipelineStopPipelineExecutionOutput#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelineStopPipelineExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStopPipelineExecutionOutput(obj: CodePipelineStopPipelineExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineTagResourceInput
 */
export interface CodePipelineTagResourceInput {
  /**
   * @schema CodePipelineTagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodePipelineTagResourceInput#tags
   */
  readonly tags: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelineTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineTagResourceInput(obj: CodePipelineTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineTagResourceOutput
 */
export interface CodePipelineTagResourceOutput {
}

/**
 * Converts an object of type 'CodePipelineTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineTagResourceOutput(obj: CodePipelineTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineUntagResourceInput
 */
export interface CodePipelineUntagResourceInput {
  /**
   * @schema CodePipelineUntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodePipelineUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'CodePipelineUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineUntagResourceInput(obj: CodePipelineUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineUntagResourceOutput
 */
export interface CodePipelineUntagResourceOutput {
}

/**
 * Converts an object of type 'CodePipelineUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineUntagResourceOutput(obj: CodePipelineUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineUpdateActionTypeInput
 */
export interface CodePipelineUpdateActionTypeInput {
  /**
   * @schema CodePipelineUpdateActionTypeInput#actionType
   */
  readonly actionType: CodePipelineActionTypeDeclaration;

}

/**
 * Converts an object of type 'CodePipelineUpdateActionTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineUpdateActionTypeInput(obj: CodePipelineUpdateActionTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': toJson_CodePipelineActionTypeDeclaration(obj.actionType),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineUpdatePipelineInput
 */
export interface CodePipelineUpdatePipelineInput {
  /**
   * @schema CodePipelineUpdatePipelineInput#pipeline
   */
  readonly pipeline: CodePipelinePipelineDeclaration;

}

/**
 * Converts an object of type 'CodePipelineUpdatePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineUpdatePipelineInput(obj: CodePipelineUpdatePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_CodePipelinePipelineDeclaration(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineUpdatePipelineOutput
 */
export interface CodePipelineUpdatePipelineOutput {
  /**
   * @schema CodePipelineUpdatePipelineOutput#pipeline
   */
  readonly pipeline?: CodePipelinePipelineDeclaration;

}

/**
 * Converts an object of type 'CodePipelineUpdatePipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineUpdatePipelineOutput(obj: CodePipelineUpdatePipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_CodePipelinePipelineDeclaration(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeSettings
 */
export interface CodePipelineActionTypeSettings {
  /**
   * @schema CodePipelineActionTypeSettings#thirdPartyConfigurationUrl
   */
  readonly thirdPartyConfigurationUrl?: string;

  /**
   * @schema CodePipelineActionTypeSettings#entityUrlTemplate
   */
  readonly entityUrlTemplate?: string;

  /**
   * @schema CodePipelineActionTypeSettings#executionUrlTemplate
   */
  readonly executionUrlTemplate?: string;

  /**
   * @schema CodePipelineActionTypeSettings#revisionUrlTemplate
   */
  readonly revisionUrlTemplate?: string;

}

/**
 * Converts an object of type 'CodePipelineActionTypeSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeSettings(obj: CodePipelineActionTypeSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thirdPartyConfigurationUrl': obj.thirdPartyConfigurationUrl,
    'entityUrlTemplate': obj.entityUrlTemplate,
    'executionUrlTemplate': obj.executionUrlTemplate,
    'revisionUrlTemplate': obj.revisionUrlTemplate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionConfigurationProperty
 */
export interface CodePipelineActionConfigurationProperty {
  /**
   * @schema CodePipelineActionConfigurationProperty#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineActionConfigurationProperty#required
   */
  readonly required: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#key
   */
  readonly key: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#secret
   */
  readonly secret: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#queryable
   */
  readonly queryable?: boolean;

  /**
   * @schema CodePipelineActionConfigurationProperty#description
   */
  readonly description?: string;

  /**
   * @schema CodePipelineActionConfigurationProperty#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CodePipelineActionConfigurationProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionConfigurationProperty(obj: CodePipelineActionConfigurationProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'required': obj.required,
    'key': obj.key,
    'secret': obj.secret,
    'queryable': obj.queryable,
    'description': obj.description,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineArtifactDetails
 */
export interface CodePipelineArtifactDetails {
  /**
   * @schema CodePipelineArtifactDetails#minimumCount
   */
  readonly minimumCount: number;

  /**
   * @schema CodePipelineArtifactDetails#maximumCount
   */
  readonly maximumCount: number;

}

/**
 * Converts an object of type 'CodePipelineArtifactDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineArtifactDetails(obj: CodePipelineArtifactDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'minimumCount': obj.minimumCount,
    'maximumCount': obj.maximumCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineTag
 */
export interface CodePipelineTag {
  /**
   * @schema CodePipelineTag#key
   */
  readonly key: string;

  /**
   * @schema CodePipelineTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'CodePipelineTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineTag(obj: CodePipelineTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionType
 */
export interface CodePipelineActionType {
  /**
   * @schema CodePipelineActionType#id
   */
  readonly id: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineActionType#settings
   */
  readonly settings?: CodePipelineActionTypeSettings;

  /**
   * @schema CodePipelineActionType#actionConfigurationProperties
   */
  readonly actionConfigurationProperties?: CodePipelineActionConfigurationProperty[];

  /**
   * @schema CodePipelineActionType#inputArtifactDetails
   */
  readonly inputArtifactDetails: CodePipelineArtifactDetails;

  /**
   * @schema CodePipelineActionType#outputArtifactDetails
   */
  readonly outputArtifactDetails: CodePipelineArtifactDetails;

}

/**
 * Converts an object of type 'CodePipelineActionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionType(obj: CodePipelineActionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': toJson_CodePipelineActionTypeId(obj.id),
    'settings': toJson_CodePipelineActionTypeSettings(obj.settings),
    'actionConfigurationProperties': obj.actionConfigurationProperties?.map(y => toJson_CodePipelineActionConfigurationProperty(y)),
    'inputArtifactDetails': toJson_CodePipelineArtifactDetails(obj.inputArtifactDetails),
    'outputArtifactDetails': toJson_CodePipelineArtifactDetails(obj.outputArtifactDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePipelineDeclaration
 */
export interface CodePipelinePipelineDeclaration {
  /**
   * @schema CodePipelinePipelineDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelinePipelineDeclaration#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CodePipelinePipelineDeclaration#artifactStore
   */
  readonly artifactStore?: CodePipelineArtifactStore;

  /**
   * @schema CodePipelinePipelineDeclaration#artifactStores
   */
  readonly artifactStores?: { [key: string]: CodePipelineArtifactStore };

  /**
   * @schema CodePipelinePipelineDeclaration#stages
   */
  readonly stages: CodePipelineStageDeclaration[];

  /**
   * @schema CodePipelinePipelineDeclaration#version
   */
  readonly version?: number;

}

/**
 * Converts an object of type 'CodePipelinePipelineDeclaration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePipelineDeclaration(obj: CodePipelinePipelineDeclaration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'roleArn': obj.roleArn,
    'artifactStore': toJson_CodePipelineArtifactStore(obj.artifactStore),
    'artifactStores': ((obj.artifactStores) === undefined) ? undefined : (Object.entries(obj.artifactStores).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CodePipelineArtifactStore(i[1]) }), {})),
    'stages': obj.stages?.map(y => toJson_CodePipelineStageDeclaration(y)),
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeDeclaration
 */
export interface CodePipelineActionTypeDeclaration {
  /**
   * @schema CodePipelineActionTypeDeclaration#description
   */
  readonly description?: string;

  /**
   * @schema CodePipelineActionTypeDeclaration#executor
   */
  readonly executor: CodePipelineActionTypeExecutor;

  /**
   * @schema CodePipelineActionTypeDeclaration#id
   */
  readonly id: CodePipelineActionTypeIdentifier;

  /**
   * @schema CodePipelineActionTypeDeclaration#inputArtifactDetails
   */
  readonly inputArtifactDetails: CodePipelineActionTypeArtifactDetails;

  /**
   * @schema CodePipelineActionTypeDeclaration#outputArtifactDetails
   */
  readonly outputArtifactDetails: CodePipelineActionTypeArtifactDetails;

  /**
   * @schema CodePipelineActionTypeDeclaration#permissions
   */
  readonly permissions?: CodePipelineActionTypePermissions;

  /**
   * @schema CodePipelineActionTypeDeclaration#properties
   */
  readonly properties?: CodePipelineActionTypeProperty[];

  /**
   * @schema CodePipelineActionTypeDeclaration#urls
   */
  readonly urls?: CodePipelineActionTypeUrls;

}

/**
 * Converts an object of type 'CodePipelineActionTypeDeclaration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeDeclaration(obj: CodePipelineActionTypeDeclaration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'executor': toJson_CodePipelineActionTypeExecutor(obj.executor),
    'id': toJson_CodePipelineActionTypeIdentifier(obj.id),
    'inputArtifactDetails': toJson_CodePipelineActionTypeArtifactDetails(obj.inputArtifactDetails),
    'outputArtifactDetails': toJson_CodePipelineActionTypeArtifactDetails(obj.outputArtifactDetails),
    'permissions': toJson_CodePipelineActionTypePermissions(obj.permissions),
    'properties': obj.properties?.map(y => toJson_CodePipelineActionTypeProperty(y)),
    'urls': toJson_CodePipelineActionTypeUrls(obj.urls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineJobDetails
 */
export interface CodePipelineJobDetails {
  /**
   * @schema CodePipelineJobDetails#id
   */
  readonly id?: string;

  /**
   * @schema CodePipelineJobDetails#data
   */
  readonly data?: CodePipelineJobData;

  /**
   * @schema CodePipelineJobDetails#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'CodePipelineJobDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineJobDetails(obj: CodePipelineJobDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'data': toJson_CodePipelineJobData(obj.data),
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePipelineMetadata
 */
export interface CodePipelinePipelineMetadata {
  /**
   * @schema CodePipelinePipelineMetadata#pipelineArn
   */
  readonly pipelineArn?: string;

  /**
   * @schema CodePipelinePipelineMetadata#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelinePipelineMetadata#updated
   */
  readonly updated?: string;

}

/**
 * Converts an object of type 'CodePipelinePipelineMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePipelineMetadata(obj: CodePipelinePipelineMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineArn': obj.pipelineArn,
    'created': obj.created,
    'updated': obj.updated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePipelineExecution
 */
export interface CodePipelinePipelineExecution {
  /**
   * @schema CodePipelinePipelineExecution#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CodePipelinePipelineExecution#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema CodePipelinePipelineExecution#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema CodePipelinePipelineExecution#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelinePipelineExecution#statusSummary
   */
  readonly statusSummary?: string;

  /**
   * @schema CodePipelinePipelineExecution#artifactRevisions
   */
  readonly artifactRevisions?: CodePipelineArtifactRevision[];

}

/**
 * Converts an object of type 'CodePipelinePipelineExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePipelineExecution(obj: CodePipelinePipelineExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'pipelineVersion': obj.pipelineVersion,
    'pipelineExecutionId': obj.pipelineExecutionId,
    'status': obj.status,
    'statusSummary': obj.statusSummary,
    'artifactRevisions': obj.artifactRevisions?.map(y => toJson_CodePipelineArtifactRevision(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStageState
 */
export interface CodePipelineStageState {
  /**
   * @schema CodePipelineStageState#stageName
   */
  readonly stageName?: string;

  /**
   * @schema CodePipelineStageState#inboundExecution
   */
  readonly inboundExecution?: CodePipelineStageExecution;

  /**
   * @schema CodePipelineStageState#inboundTransitionState
   */
  readonly inboundTransitionState?: CodePipelineTransitionState;

  /**
   * @schema CodePipelineStageState#actionStates
   */
  readonly actionStates?: CodePipelineActionState[];

  /**
   * @schema CodePipelineStageState#latestExecution
   */
  readonly latestExecution?: CodePipelineStageExecution;

}

/**
 * Converts an object of type 'CodePipelineStageState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStageState(obj: CodePipelineStageState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stageName': obj.stageName,
    'inboundExecution': toJson_CodePipelineStageExecution(obj.inboundExecution),
    'inboundTransitionState': toJson_CodePipelineTransitionState(obj.inboundTransitionState),
    'actionStates': obj.actionStates?.map(y => toJson_CodePipelineActionState(y)),
    'latestExecution': toJson_CodePipelineStageExecution(obj.latestExecution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineThirdPartyJobDetails
 */
export interface CodePipelineThirdPartyJobDetails {
  /**
   * @schema CodePipelineThirdPartyJobDetails#id
   */
  readonly id?: string;

  /**
   * @schema CodePipelineThirdPartyJobDetails#data
   */
  readonly data?: CodePipelineThirdPartyJobData;

  /**
   * @schema CodePipelineThirdPartyJobDetails#nonce
   */
  readonly nonce?: string;

}

/**
 * Converts an object of type 'CodePipelineThirdPartyJobDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineThirdPartyJobDetails(obj: CodePipelineThirdPartyJobDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'data': toJson_CodePipelineThirdPartyJobData(obj.data),
    'nonce': obj.nonce,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionExecutionFilter
 */
export interface CodePipelineActionExecutionFilter {
  /**
   * @schema CodePipelineActionExecutionFilter#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelineActionExecutionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionExecutionFilter(obj: CodePipelineActionExecutionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionExecutionDetail
 */
export interface CodePipelineActionExecutionDetail {
  /**
   * @schema CodePipelineActionExecutionDetail#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#actionExecutionId
   */
  readonly actionExecutionId?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#pipelineVersion
   */
  readonly pipelineVersion?: number;

  /**
   * @schema CodePipelineActionExecutionDetail#stageName
   */
  readonly stageName?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#actionName
   */
  readonly actionName?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelineActionExecutionDetail#input
   */
  readonly input?: CodePipelineActionExecutionInput;

  /**
   * @schema CodePipelineActionExecutionDetail#output
   */
  readonly output?: CodePipelineActionExecutionOutput;

}

/**
 * Converts an object of type 'CodePipelineActionExecutionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionExecutionDetail(obj: CodePipelineActionExecutionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
    'actionExecutionId': obj.actionExecutionId,
    'pipelineVersion': obj.pipelineVersion,
    'stageName': obj.stageName,
    'actionName': obj.actionName,
    'startTime': obj.startTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'status': obj.status,
    'input': toJson_CodePipelineActionExecutionInput(obj.input),
    'output': toJson_CodePipelineActionExecutionOutput(obj.output),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePipelineExecutionSummary
 */
export interface CodePipelinePipelineExecutionSummary {
  /**
   * @schema CodePipelinePipelineExecutionSummary#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#startTime
   */
  readonly startTime?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema CodePipelinePipelineExecutionSummary#sourceRevisions
   */
  readonly sourceRevisions?: CodePipelineSourceRevision[];

  /**
   * @schema CodePipelinePipelineExecutionSummary#trigger
   */
  readonly trigger?: CodePipelineExecutionTrigger;

  /**
   * @schema CodePipelinePipelineExecutionSummary#stopTrigger
   */
  readonly stopTrigger?: CodePipelineStopExecutionTrigger;

}

/**
 * Converts an object of type 'CodePipelinePipelineExecutionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePipelineExecutionSummary(obj: CodePipelinePipelineExecutionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
    'status': obj.status,
    'startTime': obj.startTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'sourceRevisions': obj.sourceRevisions?.map(y => toJson_CodePipelineSourceRevision(y)),
    'trigger': toJson_CodePipelineExecutionTrigger(obj.trigger),
    'stopTrigger': toJson_CodePipelineStopExecutionTrigger(obj.stopTrigger),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePipelineSummary
 */
export interface CodePipelinePipelineSummary {
  /**
   * @schema CodePipelinePipelineSummary#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelinePipelineSummary#version
   */
  readonly version?: number;

  /**
   * @schema CodePipelinePipelineSummary#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelinePipelineSummary#updated
   */
  readonly updated?: string;

}

/**
 * Converts an object of type 'CodePipelinePipelineSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePipelineSummary(obj: CodePipelinePipelineSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
    'created': obj.created,
    'updated': obj.updated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineListWebhookItem
 */
export interface CodePipelineListWebhookItem {
  /**
   * @schema CodePipelineListWebhookItem#definition
   */
  readonly definition: CodePipelineWebhookDefinition;

  /**
   * @schema CodePipelineListWebhookItem#url
   */
  readonly url: string;

  /**
   * @schema CodePipelineListWebhookItem#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema CodePipelineListWebhookItem#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodePipelineListWebhookItem#lastTriggered
   */
  readonly lastTriggered?: string;

  /**
   * @schema CodePipelineListWebhookItem#arn
   */
  readonly arn?: string;

  /**
   * @schema CodePipelineListWebhookItem#tags
   */
  readonly tags?: CodePipelineTag[];

}

/**
 * Converts an object of type 'CodePipelineListWebhookItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineListWebhookItem(obj: CodePipelineListWebhookItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'definition': toJson_CodePipelineWebhookDefinition(obj.definition),
    'url': obj.url,
    'errorMessage': obj.errorMessage,
    'errorCode': obj.errorCode,
    'lastTriggered': obj.lastTriggered,
    'arn': obj.arn,
    'tags': obj.tags?.map(y => toJson_CodePipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeId
 */
export interface CodePipelineActionTypeId {
  /**
   * @schema CodePipelineActionTypeId#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineActionTypeId#owner
   */
  readonly owner: string;

  /**
   * @schema CodePipelineActionTypeId#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineActionTypeId#version
   */
  readonly version: string;

}

/**
 * Converts an object of type 'CodePipelineActionTypeId' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeId(obj: CodePipelineActionTypeId | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'owner': obj.owner,
    'provider': obj.provider,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineJob
 */
export interface CodePipelineJob {
  /**
   * @schema CodePipelineJob#id
   */
  readonly id?: string;

  /**
   * @schema CodePipelineJob#data
   */
  readonly data?: CodePipelineJobData;

  /**
   * @schema CodePipelineJob#nonce
   */
  readonly nonce?: string;

  /**
   * @schema CodePipelineJob#accountId
   */
  readonly accountId?: string;

}

/**
 * Converts an object of type 'CodePipelineJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineJob(obj: CodePipelineJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'data': toJson_CodePipelineJobData(obj.data),
    'nonce': obj.nonce,
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineThirdPartyJob
 */
export interface CodePipelineThirdPartyJob {
  /**
   * @schema CodePipelineThirdPartyJob#clientId
   */
  readonly clientId?: string;

  /**
   * @schema CodePipelineThirdPartyJob#jobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'CodePipelineThirdPartyJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineThirdPartyJob(obj: CodePipelineThirdPartyJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionRevision
 */
export interface CodePipelineActionRevision {
  /**
   * @schema CodePipelineActionRevision#revisionId
   */
  readonly revisionId: string;

  /**
   * @schema CodePipelineActionRevision#revisionChangeId
   */
  readonly revisionChangeId: string;

  /**
   * @schema CodePipelineActionRevision#created
   */
  readonly created: string;

}

/**
 * Converts an object of type 'CodePipelineActionRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionRevision(obj: CodePipelineActionRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revisionId': obj.revisionId,
    'revisionChangeId': obj.revisionChangeId,
    'created': obj.created,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineApprovalResult
 */
export interface CodePipelineApprovalResult {
  /**
   * @schema CodePipelineApprovalResult#summary
   */
  readonly summary: string;

  /**
   * @schema CodePipelineApprovalResult#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'CodePipelineApprovalResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineApprovalResult(obj: CodePipelineApprovalResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': obj.summary,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineFailureDetails
 */
export interface CodePipelineFailureDetails {
  /**
   * @schema CodePipelineFailureDetails#type
   */
  readonly type: string;

  /**
   * @schema CodePipelineFailureDetails#message
   */
  readonly message: string;

  /**
   * @schema CodePipelineFailureDetails#externalExecutionId
   */
  readonly externalExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelineFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineFailureDetails(obj: CodePipelineFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'message': obj.message,
    'externalExecutionId': obj.externalExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineCurrentRevision
 */
export interface CodePipelineCurrentRevision {
  /**
   * @schema CodePipelineCurrentRevision#revision
   */
  readonly revision: string;

  /**
   * @schema CodePipelineCurrentRevision#changeIdentifier
   */
  readonly changeIdentifier: string;

  /**
   * @schema CodePipelineCurrentRevision#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelineCurrentRevision#revisionSummary
   */
  readonly revisionSummary?: string;

}

/**
 * Converts an object of type 'CodePipelineCurrentRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineCurrentRevision(obj: CodePipelineCurrentRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'revision': obj.revision,
    'changeIdentifier': obj.changeIdentifier,
    'created': obj.created,
    'revisionSummary': obj.revisionSummary,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineExecutionDetails
 */
export interface CodePipelineExecutionDetails {
  /**
   * @schema CodePipelineExecutionDetails#summary
   */
  readonly summary?: string;

  /**
   * @schema CodePipelineExecutionDetails#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema CodePipelineExecutionDetails#percentComplete
   */
  readonly percentComplete?: number;

}

/**
 * Converts an object of type 'CodePipelineExecutionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineExecutionDetails(obj: CodePipelineExecutionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summary': obj.summary,
    'externalExecutionId': obj.externalExecutionId,
    'percentComplete': obj.percentComplete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineWebhookDefinition
 */
export interface CodePipelineWebhookDefinition {
  /**
   * @schema CodePipelineWebhookDefinition#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineWebhookDefinition#targetPipeline
   */
  readonly targetPipeline: string;

  /**
   * @schema CodePipelineWebhookDefinition#targetAction
   */
  readonly targetAction: string;

  /**
   * @schema CodePipelineWebhookDefinition#filters
   */
  readonly filters: CodePipelineWebhookFilterRule[];

  /**
   * @schema CodePipelineWebhookDefinition#authentication
   */
  readonly authentication: string;

  /**
   * @schema CodePipelineWebhookDefinition#authenticationConfiguration
   */
  readonly authenticationConfiguration: CodePipelineWebhookAuthConfiguration;

}

/**
 * Converts an object of type 'CodePipelineWebhookDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineWebhookDefinition(obj: CodePipelineWebhookDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'targetPipeline': obj.targetPipeline,
    'targetAction': obj.targetAction,
    'filters': obj.filters?.map(y => toJson_CodePipelineWebhookFilterRule(y)),
    'authentication': obj.authentication,
    'authenticationConfiguration': toJson_CodePipelineWebhookAuthConfiguration(obj.authenticationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineArtifactStore
 */
export interface CodePipelineArtifactStore {
  /**
   * @schema CodePipelineArtifactStore#type
   */
  readonly type: string;

  /**
   * @schema CodePipelineArtifactStore#location
   */
  readonly location: string;

  /**
   * @schema CodePipelineArtifactStore#encryptionKey
   */
  readonly encryptionKey?: CodePipelineEncryptionKey;

}

/**
 * Converts an object of type 'CodePipelineArtifactStore' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineArtifactStore(obj: CodePipelineArtifactStore | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'location': obj.location,
    'encryptionKey': toJson_CodePipelineEncryptionKey(obj.encryptionKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStageDeclaration
 */
export interface CodePipelineStageDeclaration {
  /**
   * @schema CodePipelineStageDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineStageDeclaration#blockers
   */
  readonly blockers?: CodePipelineBlockerDeclaration[];

  /**
   * @schema CodePipelineStageDeclaration#actions
   */
  readonly actions: CodePipelineActionDeclaration[];

}

/**
 * Converts an object of type 'CodePipelineStageDeclaration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStageDeclaration(obj: CodePipelineStageDeclaration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'blockers': obj.blockers?.map(y => toJson_CodePipelineBlockerDeclaration(y)),
    'actions': obj.actions?.map(y => toJson_CodePipelineActionDeclaration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeExecutor
 */
export interface CodePipelineActionTypeExecutor {
  /**
   * @schema CodePipelineActionTypeExecutor#configuration
   */
  readonly configuration: CodePipelineExecutorConfiguration;

  /**
   * @schema CodePipelineActionTypeExecutor#type
   */
  readonly type: string;

  /**
   * @schema CodePipelineActionTypeExecutor#policyStatementsTemplate
   */
  readonly policyStatementsTemplate?: string;

  /**
   * @schema CodePipelineActionTypeExecutor#jobTimeout
   */
  readonly jobTimeout?: number;

}

/**
 * Converts an object of type 'CodePipelineActionTypeExecutor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeExecutor(obj: CodePipelineActionTypeExecutor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': toJson_CodePipelineExecutorConfiguration(obj.configuration),
    'type': obj.type,
    'policyStatementsTemplate': obj.policyStatementsTemplate,
    'jobTimeout': obj.jobTimeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeIdentifier
 */
export interface CodePipelineActionTypeIdentifier {
  /**
   * @schema CodePipelineActionTypeIdentifier#category
   */
  readonly category: string;

  /**
   * @schema CodePipelineActionTypeIdentifier#owner
   */
  readonly owner: string;

  /**
   * @schema CodePipelineActionTypeIdentifier#provider
   */
  readonly provider: string;

  /**
   * @schema CodePipelineActionTypeIdentifier#version
   */
  readonly version: string;

}

/**
 * Converts an object of type 'CodePipelineActionTypeIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeIdentifier(obj: CodePipelineActionTypeIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'category': obj.category,
    'owner': obj.owner,
    'provider': obj.provider,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeArtifactDetails
 */
export interface CodePipelineActionTypeArtifactDetails {
  /**
   * @schema CodePipelineActionTypeArtifactDetails#minimumCount
   */
  readonly minimumCount: number;

  /**
   * @schema CodePipelineActionTypeArtifactDetails#maximumCount
   */
  readonly maximumCount: number;

}

/**
 * Converts an object of type 'CodePipelineActionTypeArtifactDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeArtifactDetails(obj: CodePipelineActionTypeArtifactDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'minimumCount': obj.minimumCount,
    'maximumCount': obj.maximumCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypePermissions
 */
export interface CodePipelineActionTypePermissions {
  /**
   * @schema CodePipelineActionTypePermissions#allowedAccounts
   */
  readonly allowedAccounts: string[];

}

/**
 * Converts an object of type 'CodePipelineActionTypePermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypePermissions(obj: CodePipelineActionTypePermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowedAccounts': obj.allowedAccounts?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeProperty
 */
export interface CodePipelineActionTypeProperty {
  /**
   * @schema CodePipelineActionTypeProperty#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineActionTypeProperty#optional
   */
  readonly optional: boolean;

  /**
   * @schema CodePipelineActionTypeProperty#key
   */
  readonly key: boolean;

  /**
   * @schema CodePipelineActionTypeProperty#noEcho
   */
  readonly noEcho: boolean;

  /**
   * @schema CodePipelineActionTypeProperty#queryable
   */
  readonly queryable?: boolean;

  /**
   * @schema CodePipelineActionTypeProperty#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'CodePipelineActionTypeProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeProperty(obj: CodePipelineActionTypeProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'optional': obj.optional,
    'key': obj.key,
    'noEcho': obj.noEcho,
    'queryable': obj.queryable,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionTypeUrls
 */
export interface CodePipelineActionTypeUrls {
  /**
   * @schema CodePipelineActionTypeUrls#configurationUrl
   */
  readonly configurationUrl?: string;

  /**
   * @schema CodePipelineActionTypeUrls#entityUrlTemplate
   */
  readonly entityUrlTemplate?: string;

  /**
   * @schema CodePipelineActionTypeUrls#executionUrlTemplate
   */
  readonly executionUrlTemplate?: string;

  /**
   * @schema CodePipelineActionTypeUrls#revisionUrlTemplate
   */
  readonly revisionUrlTemplate?: string;

}

/**
 * Converts an object of type 'CodePipelineActionTypeUrls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionTypeUrls(obj: CodePipelineActionTypeUrls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationUrl': obj.configurationUrl,
    'entityUrlTemplate': obj.entityUrlTemplate,
    'executionUrlTemplate': obj.executionUrlTemplate,
    'revisionUrlTemplate': obj.revisionUrlTemplate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineJobData
 */
export interface CodePipelineJobData {
  /**
   * @schema CodePipelineJobData#actionTypeId
   */
  readonly actionTypeId?: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineJobData#actionConfiguration
   */
  readonly actionConfiguration?: CodePipelineActionConfiguration;

  /**
   * @schema CodePipelineJobData#pipelineContext
   */
  readonly pipelineContext?: CodePipelinePipelineContext;

  /**
   * @schema CodePipelineJobData#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineJobData#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineJobData#artifactCredentials
   */
  readonly artifactCredentials?: CodePipelineAwsSessionCredentials;

  /**
   * @schema CodePipelineJobData#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelineJobData#encryptionKey
   */
  readonly encryptionKey?: CodePipelineEncryptionKey;

}

/**
 * Converts an object of type 'CodePipelineJobData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineJobData(obj: CodePipelineJobData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionTypeId': toJson_CodePipelineActionTypeId(obj.actionTypeId),
    'actionConfiguration': toJson_CodePipelineActionConfiguration(obj.actionConfiguration),
    'pipelineContext': toJson_CodePipelinePipelineContext(obj.pipelineContext),
    'inputArtifacts': obj.inputArtifacts?.map(y => toJson_CodePipelineArtifact(y)),
    'outputArtifacts': obj.outputArtifacts?.map(y => toJson_CodePipelineArtifact(y)),
    'artifactCredentials': toJson_CodePipelineAwsSessionCredentials(obj.artifactCredentials),
    'continuationToken': obj.continuationToken,
    'encryptionKey': toJson_CodePipelineEncryptionKey(obj.encryptionKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineArtifactRevision
 */
export interface CodePipelineArtifactRevision {
  /**
   * @schema CodePipelineArtifactRevision#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionChangeIdentifier
   */
  readonly revisionChangeIdentifier?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionSummary
   */
  readonly revisionSummary?: string;

  /**
   * @schema CodePipelineArtifactRevision#created
   */
  readonly created?: string;

  /**
   * @schema CodePipelineArtifactRevision#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * Converts an object of type 'CodePipelineArtifactRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineArtifactRevision(obj: CodePipelineArtifactRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'revisionId': obj.revisionId,
    'revisionChangeIdentifier': obj.revisionChangeIdentifier,
    'revisionSummary': obj.revisionSummary,
    'created': obj.created,
    'revisionUrl': obj.revisionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStageExecution
 */
export interface CodePipelineStageExecution {
  /**
   * @schema CodePipelineStageExecution#pipelineExecutionId
   */
  readonly pipelineExecutionId: string;

  /**
   * @schema CodePipelineStageExecution#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'CodePipelineStageExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStageExecution(obj: CodePipelineStageExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineExecutionId': obj.pipelineExecutionId,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineTransitionState
 */
export interface CodePipelineTransitionState {
  /**
   * @schema CodePipelineTransitionState#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CodePipelineTransitionState#lastChangedBy
   */
  readonly lastChangedBy?: string;

  /**
   * @schema CodePipelineTransitionState#lastChangedAt
   */
  readonly lastChangedAt?: string;

  /**
   * @schema CodePipelineTransitionState#disabledReason
   */
  readonly disabledReason?: string;

}

/**
 * Converts an object of type 'CodePipelineTransitionState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineTransitionState(obj: CodePipelineTransitionState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'lastChangedBy': obj.lastChangedBy,
    'lastChangedAt': obj.lastChangedAt,
    'disabledReason': obj.disabledReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionState
 */
export interface CodePipelineActionState {
  /**
   * @schema CodePipelineActionState#actionName
   */
  readonly actionName?: string;

  /**
   * @schema CodePipelineActionState#currentRevision
   */
  readonly currentRevision?: CodePipelineActionRevision;

  /**
   * @schema CodePipelineActionState#latestExecution
   */
  readonly latestExecution?: CodePipelineActionExecution;

  /**
   * @schema CodePipelineActionState#entityUrl
   */
  readonly entityUrl?: string;

  /**
   * @schema CodePipelineActionState#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * Converts an object of type 'CodePipelineActionState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionState(obj: CodePipelineActionState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'currentRevision': toJson_CodePipelineActionRevision(obj.currentRevision),
    'latestExecution': toJson_CodePipelineActionExecution(obj.latestExecution),
    'entityUrl': obj.entityUrl,
    'revisionUrl': obj.revisionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineThirdPartyJobData
 */
export interface CodePipelineThirdPartyJobData {
  /**
   * @schema CodePipelineThirdPartyJobData#actionTypeId
   */
  readonly actionTypeId?: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineThirdPartyJobData#actionConfiguration
   */
  readonly actionConfiguration?: CodePipelineActionConfiguration;

  /**
   * @schema CodePipelineThirdPartyJobData#pipelineContext
   */
  readonly pipelineContext?: CodePipelinePipelineContext;

  /**
   * @schema CodePipelineThirdPartyJobData#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineThirdPartyJobData#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineArtifact[];

  /**
   * @schema CodePipelineThirdPartyJobData#artifactCredentials
   */
  readonly artifactCredentials?: CodePipelineAwsSessionCredentials;

  /**
   * @schema CodePipelineThirdPartyJobData#continuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema CodePipelineThirdPartyJobData#encryptionKey
   */
  readonly encryptionKey?: CodePipelineEncryptionKey;

}

/**
 * Converts an object of type 'CodePipelineThirdPartyJobData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineThirdPartyJobData(obj: CodePipelineThirdPartyJobData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionTypeId': toJson_CodePipelineActionTypeId(obj.actionTypeId),
    'actionConfiguration': toJson_CodePipelineActionConfiguration(obj.actionConfiguration),
    'pipelineContext': toJson_CodePipelinePipelineContext(obj.pipelineContext),
    'inputArtifacts': obj.inputArtifacts?.map(y => toJson_CodePipelineArtifact(y)),
    'outputArtifacts': obj.outputArtifacts?.map(y => toJson_CodePipelineArtifact(y)),
    'artifactCredentials': toJson_CodePipelineAwsSessionCredentials(obj.artifactCredentials),
    'continuationToken': obj.continuationToken,
    'encryptionKey': toJson_CodePipelineEncryptionKey(obj.encryptionKey),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionExecutionInput
 */
export interface CodePipelineActionExecutionInput {
  /**
   * @schema CodePipelineActionExecutionInput#actionTypeId
   */
  readonly actionTypeId?: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineActionExecutionInput#configuration
   */
  readonly configuration?: { [key: string]: string };

  /**
   * @schema CodePipelineActionExecutionInput#resolvedConfiguration
   */
  readonly resolvedConfiguration?: { [key: string]: string };

  /**
   * @schema CodePipelineActionExecutionInput#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CodePipelineActionExecutionInput#region
   */
  readonly region?: string;

  /**
   * @schema CodePipelineActionExecutionInput#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineArtifactDetail[];

  /**
   * @schema CodePipelineActionExecutionInput#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'CodePipelineActionExecutionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionExecutionInput(obj: CodePipelineActionExecutionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionTypeId': toJson_CodePipelineActionTypeId(obj.actionTypeId),
    'configuration': ((obj.configuration) === undefined) ? undefined : (Object.entries(obj.configuration).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'resolvedConfiguration': ((obj.resolvedConfiguration) === undefined) ? undefined : (Object.entries(obj.resolvedConfiguration).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'roleArn': obj.roleArn,
    'region': obj.region,
    'inputArtifacts': obj.inputArtifacts?.map(y => toJson_CodePipelineArtifactDetail(y)),
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionExecutionOutput
 */
export interface CodePipelineActionExecutionOutput {
  /**
   * @schema CodePipelineActionExecutionOutput#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineArtifactDetail[];

  /**
   * @schema CodePipelineActionExecutionOutput#executionResult
   */
  readonly executionResult?: CodePipelineActionExecutionResult;

  /**
   * @schema CodePipelineActionExecutionOutput#outputVariables
   */
  readonly outputVariables?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodePipelineActionExecutionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionExecutionOutput(obj: CodePipelineActionExecutionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'outputArtifacts': obj.outputArtifacts?.map(y => toJson_CodePipelineArtifactDetail(y)),
    'executionResult': toJson_CodePipelineActionExecutionResult(obj.executionResult),
    'outputVariables': ((obj.outputVariables) === undefined) ? undefined : (Object.entries(obj.outputVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineSourceRevision
 */
export interface CodePipelineSourceRevision {
  /**
   * @schema CodePipelineSourceRevision#actionName
   */
  readonly actionName: string;

  /**
   * @schema CodePipelineSourceRevision#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema CodePipelineSourceRevision#revisionSummary
   */
  readonly revisionSummary?: string;

  /**
   * @schema CodePipelineSourceRevision#revisionUrl
   */
  readonly revisionUrl?: string;

}

/**
 * Converts an object of type 'CodePipelineSourceRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineSourceRevision(obj: CodePipelineSourceRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'revisionId': obj.revisionId,
    'revisionSummary': obj.revisionSummary,
    'revisionUrl': obj.revisionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineExecutionTrigger
 */
export interface CodePipelineExecutionTrigger {
  /**
   * @schema CodePipelineExecutionTrigger#triggerType
   */
  readonly triggerType?: string;

  /**
   * @schema CodePipelineExecutionTrigger#triggerDetail
   */
  readonly triggerDetail?: string;

}

/**
 * Converts an object of type 'CodePipelineExecutionTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineExecutionTrigger(obj: CodePipelineExecutionTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'triggerType': obj.triggerType,
    'triggerDetail': obj.triggerDetail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStopExecutionTrigger
 */
export interface CodePipelineStopExecutionTrigger {
  /**
   * @schema CodePipelineStopExecutionTrigger#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'CodePipelineStopExecutionTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStopExecutionTrigger(obj: CodePipelineStopExecutionTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineWebhookFilterRule
 */
export interface CodePipelineWebhookFilterRule {
  /**
   * @schema CodePipelineWebhookFilterRule#jsonPath
   */
  readonly jsonPath: string;

  /**
   * @schema CodePipelineWebhookFilterRule#matchEquals
   */
  readonly matchEquals?: string;

}

/**
 * Converts an object of type 'CodePipelineWebhookFilterRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineWebhookFilterRule(obj: CodePipelineWebhookFilterRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jsonPath': obj.jsonPath,
    'matchEquals': obj.matchEquals,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineWebhookAuthConfiguration
 */
export interface CodePipelineWebhookAuthConfiguration {
  /**
   * @schema CodePipelineWebhookAuthConfiguration#AllowedIPRange
   */
  readonly allowedIpRange?: string;

  /**
   * @schema CodePipelineWebhookAuthConfiguration#SecretToken
   */
  readonly secretToken?: string;

}

/**
 * Converts an object of type 'CodePipelineWebhookAuthConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineWebhookAuthConfiguration(obj: CodePipelineWebhookAuthConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedIPRange': obj.allowedIpRange,
    'SecretToken': obj.secretToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineEncryptionKey
 */
export interface CodePipelineEncryptionKey {
  /**
   * @schema CodePipelineEncryptionKey#id
   */
  readonly id: string;

  /**
   * @schema CodePipelineEncryptionKey#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CodePipelineEncryptionKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineEncryptionKey(obj: CodePipelineEncryptionKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineBlockerDeclaration
 */
export interface CodePipelineBlockerDeclaration {
  /**
   * @schema CodePipelineBlockerDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineBlockerDeclaration#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'CodePipelineBlockerDeclaration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineBlockerDeclaration(obj: CodePipelineBlockerDeclaration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionDeclaration
 */
export interface CodePipelineActionDeclaration {
  /**
   * @schema CodePipelineActionDeclaration#name
   */
  readonly name: string;

  /**
   * @schema CodePipelineActionDeclaration#actionTypeId
   */
  readonly actionTypeId: CodePipelineActionTypeId;

  /**
   * @schema CodePipelineActionDeclaration#runOrder
   */
  readonly runOrder?: number;

  /**
   * @schema CodePipelineActionDeclaration#configuration
   */
  readonly configuration?: { [key: string]: string };

  /**
   * @schema CodePipelineActionDeclaration#outputArtifacts
   */
  readonly outputArtifacts?: CodePipelineOutputArtifact[];

  /**
   * @schema CodePipelineActionDeclaration#inputArtifacts
   */
  readonly inputArtifacts?: CodePipelineInputArtifact[];

  /**
   * @schema CodePipelineActionDeclaration#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CodePipelineActionDeclaration#region
   */
  readonly region?: string;

  /**
   * @schema CodePipelineActionDeclaration#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'CodePipelineActionDeclaration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionDeclaration(obj: CodePipelineActionDeclaration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'actionTypeId': toJson_CodePipelineActionTypeId(obj.actionTypeId),
    'runOrder': obj.runOrder,
    'configuration': ((obj.configuration) === undefined) ? undefined : (Object.entries(obj.configuration).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'outputArtifacts': obj.outputArtifacts?.map(y => toJson_CodePipelineOutputArtifact(y)),
    'inputArtifacts': obj.inputArtifacts?.map(y => toJson_CodePipelineInputArtifact(y)),
    'roleArn': obj.roleArn,
    'region': obj.region,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineExecutorConfiguration
 */
export interface CodePipelineExecutorConfiguration {
  /**
   * @schema CodePipelineExecutorConfiguration#lambdaExecutorConfiguration
   */
  readonly lambdaExecutorConfiguration?: CodePipelineLambdaExecutorConfiguration;

  /**
   * @schema CodePipelineExecutorConfiguration#jobWorkerExecutorConfiguration
   */
  readonly jobWorkerExecutorConfiguration?: CodePipelineJobWorkerExecutorConfiguration;

}

/**
 * Converts an object of type 'CodePipelineExecutorConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineExecutorConfiguration(obj: CodePipelineExecutorConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lambdaExecutorConfiguration': toJson_CodePipelineLambdaExecutorConfiguration(obj.lambdaExecutorConfiguration),
    'jobWorkerExecutorConfiguration': toJson_CodePipelineJobWorkerExecutorConfiguration(obj.jobWorkerExecutorConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionConfiguration
 */
export interface CodePipelineActionConfiguration {
  /**
   * @schema CodePipelineActionConfiguration#configuration
   */
  readonly configuration?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodePipelineActionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionConfiguration(obj: CodePipelineActionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configuration': ((obj.configuration) === undefined) ? undefined : (Object.entries(obj.configuration).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelinePipelineContext
 */
export interface CodePipelinePipelineContext {
  /**
   * @schema CodePipelinePipelineContext#pipelineName
   */
  readonly pipelineName?: string;

  /**
   * @schema CodePipelinePipelineContext#stage
   */
  readonly stage?: CodePipelineStageContext;

  /**
   * @schema CodePipelinePipelineContext#action
   */
  readonly action?: CodePipelineActionContext;

  /**
   * @schema CodePipelinePipelineContext#pipelineArn
   */
  readonly pipelineArn?: string;

  /**
   * @schema CodePipelinePipelineContext#pipelineExecutionId
   */
  readonly pipelineExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelinePipelineContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelinePipelineContext(obj: CodePipelinePipelineContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineName': obj.pipelineName,
    'stage': toJson_CodePipelineStageContext(obj.stage),
    'action': toJson_CodePipelineActionContext(obj.action),
    'pipelineArn': obj.pipelineArn,
    'pipelineExecutionId': obj.pipelineExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineArtifact
 */
export interface CodePipelineArtifact {
  /**
   * @schema CodePipelineArtifact#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineArtifact#revision
   */
  readonly revision?: string;

  /**
   * @schema CodePipelineArtifact#location
   */
  readonly location?: CodePipelineArtifactLocation;

}

/**
 * Converts an object of type 'CodePipelineArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineArtifact(obj: CodePipelineArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'revision': obj.revision,
    'location': toJson_CodePipelineArtifactLocation(obj.location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineAwsSessionCredentials
 */
export interface CodePipelineAwsSessionCredentials {
  /**
   * @schema CodePipelineAwsSessionCredentials#accessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema CodePipelineAwsSessionCredentials#secretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema CodePipelineAwsSessionCredentials#sessionToken
   */
  readonly sessionToken: string;

}

/**
 * Converts an object of type 'CodePipelineAwsSessionCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineAwsSessionCredentials(obj: CodePipelineAwsSessionCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'secretAccessKey': obj.secretAccessKey,
    'sessionToken': obj.sessionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionExecution
 */
export interface CodePipelineActionExecution {
  /**
   * @schema CodePipelineActionExecution#actionExecutionId
   */
  readonly actionExecutionId?: string;

  /**
   * @schema CodePipelineActionExecution#status
   */
  readonly status?: string;

  /**
   * @schema CodePipelineActionExecution#summary
   */
  readonly summary?: string;

  /**
   * @schema CodePipelineActionExecution#lastStatusChange
   */
  readonly lastStatusChange?: string;

  /**
   * @schema CodePipelineActionExecution#token
   */
  readonly token?: string;

  /**
   * @schema CodePipelineActionExecution#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema CodePipelineActionExecution#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema CodePipelineActionExecution#externalExecutionUrl
   */
  readonly externalExecutionUrl?: string;

  /**
   * @schema CodePipelineActionExecution#percentComplete
   */
  readonly percentComplete?: number;

  /**
   * @schema CodePipelineActionExecution#errorDetails
   */
  readonly errorDetails?: CodePipelineErrorDetails;

}

/**
 * Converts an object of type 'CodePipelineActionExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionExecution(obj: CodePipelineActionExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionExecutionId': obj.actionExecutionId,
    'status': obj.status,
    'summary': obj.summary,
    'lastStatusChange': obj.lastStatusChange,
    'token': obj.token,
    'lastUpdatedBy': obj.lastUpdatedBy,
    'externalExecutionId': obj.externalExecutionId,
    'externalExecutionUrl': obj.externalExecutionUrl,
    'percentComplete': obj.percentComplete,
    'errorDetails': toJson_CodePipelineErrorDetails(obj.errorDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineArtifactDetail
 */
export interface CodePipelineArtifactDetail {
  /**
   * @schema CodePipelineArtifactDetail#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineArtifactDetail#s3location
   */
  readonly s3Location?: CodePipelineS3Location;

}

/**
 * Converts an object of type 'CodePipelineArtifactDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineArtifactDetail(obj: CodePipelineArtifactDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    's3location': toJson_CodePipelineS3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionExecutionResult
 */
export interface CodePipelineActionExecutionResult {
  /**
   * @schema CodePipelineActionExecutionResult#externalExecutionId
   */
  readonly externalExecutionId?: string;

  /**
   * @schema CodePipelineActionExecutionResult#externalExecutionSummary
   */
  readonly externalExecutionSummary?: string;

  /**
   * @schema CodePipelineActionExecutionResult#externalExecutionUrl
   */
  readonly externalExecutionUrl?: string;

}

/**
 * Converts an object of type 'CodePipelineActionExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionExecutionResult(obj: CodePipelineActionExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'externalExecutionId': obj.externalExecutionId,
    'externalExecutionSummary': obj.externalExecutionSummary,
    'externalExecutionUrl': obj.externalExecutionUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineOutputArtifact
 */
export interface CodePipelineOutputArtifact {
  /**
   * @schema CodePipelineOutputArtifact#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodePipelineOutputArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineOutputArtifact(obj: CodePipelineOutputArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineInputArtifact
 */
export interface CodePipelineInputArtifact {
  /**
   * @schema CodePipelineInputArtifact#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodePipelineInputArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineInputArtifact(obj: CodePipelineInputArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineLambdaExecutorConfiguration
 */
export interface CodePipelineLambdaExecutorConfiguration {
  /**
   * @schema CodePipelineLambdaExecutorConfiguration#lambdaFunctionArn
   */
  readonly lambdaFunctionArn: string;

}

/**
 * Converts an object of type 'CodePipelineLambdaExecutorConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineLambdaExecutorConfiguration(obj: CodePipelineLambdaExecutorConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lambdaFunctionArn': obj.lambdaFunctionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineJobWorkerExecutorConfiguration
 */
export interface CodePipelineJobWorkerExecutorConfiguration {
  /**
   * @schema CodePipelineJobWorkerExecutorConfiguration#pollingAccounts
   */
  readonly pollingAccounts?: string[];

  /**
   * @schema CodePipelineJobWorkerExecutorConfiguration#pollingServicePrincipals
   */
  readonly pollingServicePrincipals?: string[];

}

/**
 * Converts an object of type 'CodePipelineJobWorkerExecutorConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineJobWorkerExecutorConfiguration(obj: CodePipelineJobWorkerExecutorConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pollingAccounts': obj.pollingAccounts?.map(y => y),
    'pollingServicePrincipals': obj.pollingServicePrincipals?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineStageContext
 */
export interface CodePipelineStageContext {
  /**
   * @schema CodePipelineStageContext#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CodePipelineStageContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineStageContext(obj: CodePipelineStageContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineActionContext
 */
export interface CodePipelineActionContext {
  /**
   * @schema CodePipelineActionContext#name
   */
  readonly name?: string;

  /**
   * @schema CodePipelineActionContext#actionExecutionId
   */
  readonly actionExecutionId?: string;

}

/**
 * Converts an object of type 'CodePipelineActionContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineActionContext(obj: CodePipelineActionContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'actionExecutionId': obj.actionExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineArtifactLocation
 */
export interface CodePipelineArtifactLocation {
  /**
   * @schema CodePipelineArtifactLocation#type
   */
  readonly type?: string;

  /**
   * @schema CodePipelineArtifactLocation#s3Location
   */
  readonly s3Location?: CodePipelineS3ArtifactLocation;

}

/**
 * Converts an object of type 'CodePipelineArtifactLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineArtifactLocation(obj: CodePipelineArtifactLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    's3Location': toJson_CodePipelineS3ArtifactLocation(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineErrorDetails
 */
export interface CodePipelineErrorDetails {
  /**
   * @schema CodePipelineErrorDetails#code
   */
  readonly code?: string;

  /**
   * @schema CodePipelineErrorDetails#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'CodePipelineErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineErrorDetails(obj: CodePipelineErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineS3Location
 */
export interface CodePipelineS3Location {
  /**
   * @schema CodePipelineS3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema CodePipelineS3Location#key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'CodePipelineS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineS3Location(obj: CodePipelineS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodePipelineS3ArtifactLocation
 */
export interface CodePipelineS3ArtifactLocation {
  /**
   * @schema CodePipelineS3ArtifactLocation#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema CodePipelineS3ArtifactLocation#objectKey
   */
  readonly objectKey: string;

}

/**
 * Converts an object of type 'CodePipelineS3ArtifactLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodePipelineS3ArtifactLocation(obj: CodePipelineS3ArtifactLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'objectKey': obj.objectKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
