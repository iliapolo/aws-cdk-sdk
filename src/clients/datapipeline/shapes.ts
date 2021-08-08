/**
 * @schema DataPipelineActivatePipelineInput
 */
export interface DataPipelineActivatePipelineInput {
  /**
   * @schema DataPipelineActivatePipelineInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineActivatePipelineInput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

  /**
   * @schema DataPipelineActivatePipelineInput#startTimestamp
   */
  readonly startTimestamp?: string;

}

/**
 * Converts an object of type 'DataPipelineActivatePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineActivatePipelineInput(obj: DataPipelineActivatePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'parameterValues': obj.parameterValues?.map(y => toJson_DataPipelineParameterValue(y)),
    'startTimestamp': obj.startTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineActivatePipelineOutput
 */
export interface DataPipelineActivatePipelineOutput {
}

/**
 * Converts an object of type 'DataPipelineActivatePipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineActivatePipelineOutput(obj: DataPipelineActivatePipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineAddTagsInput
 */
export interface DataPipelineAddTagsInput {
  /**
   * @schema DataPipelineAddTagsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineAddTagsInput#tags
   */
  readonly tags: DataPipelineTag[];

}

/**
 * Converts an object of type 'DataPipelineAddTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineAddTagsInput(obj: DataPipelineAddTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'tags': obj.tags?.map(y => toJson_DataPipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineAddTagsOutput
 */
export interface DataPipelineAddTagsOutput {
}

/**
 * Converts an object of type 'DataPipelineAddTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineAddTagsOutput(obj: DataPipelineAddTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineCreatePipelineInput
 */
export interface DataPipelineCreatePipelineInput {
  /**
   * @schema DataPipelineCreatePipelineInput#name
   */
  readonly name: string;

  /**
   * @schema DataPipelineCreatePipelineInput#uniqueId
   */
  readonly uniqueId: string;

  /**
   * @schema DataPipelineCreatePipelineInput#description
   */
  readonly description?: string;

  /**
   * @schema DataPipelineCreatePipelineInput#tags
   */
  readonly tags?: DataPipelineTag[];

}

/**
 * Converts an object of type 'DataPipelineCreatePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineCreatePipelineInput(obj: DataPipelineCreatePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'uniqueId': obj.uniqueId,
    'description': obj.description,
    'tags': obj.tags?.map(y => toJson_DataPipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineCreatePipelineOutput
 */
export interface DataPipelineCreatePipelineOutput {
  /**
   * @schema DataPipelineCreatePipelineOutput#pipelineId
   */
  readonly pipelineId: string;

}

/**
 * Converts an object of type 'DataPipelineCreatePipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineCreatePipelineOutput(obj: DataPipelineCreatePipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDeactivatePipelineInput
 */
export interface DataPipelineDeactivatePipelineInput {
  /**
   * @schema DataPipelineDeactivatePipelineInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineDeactivatePipelineInput#cancelActive
   */
  readonly cancelActive?: boolean;

}

/**
 * Converts an object of type 'DataPipelineDeactivatePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDeactivatePipelineInput(obj: DataPipelineDeactivatePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'cancelActive': obj.cancelActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDeactivatePipelineOutput
 */
export interface DataPipelineDeactivatePipelineOutput {
}

/**
 * Converts an object of type 'DataPipelineDeactivatePipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDeactivatePipelineOutput(obj: DataPipelineDeactivatePipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDeletePipelineInput
 */
export interface DataPipelineDeletePipelineInput {
  /**
   * @schema DataPipelineDeletePipelineInput#pipelineId
   */
  readonly pipelineId: string;

}

/**
 * Converts an object of type 'DataPipelineDeletePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDeletePipelineInput(obj: DataPipelineDeletePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDescribeObjectsInput
 */
export interface DataPipelineDescribeObjectsInput {
  /**
   * @schema DataPipelineDescribeObjectsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineDescribeObjectsInput#objectIds
   */
  readonly objectIds: string[];

  /**
   * @schema DataPipelineDescribeObjectsInput#evaluateExpressions
   */
  readonly evaluateExpressions?: boolean;

  /**
   * @schema DataPipelineDescribeObjectsInput#marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DataPipelineDescribeObjectsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDescribeObjectsInput(obj: DataPipelineDescribeObjectsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'objectIds': obj.objectIds?.map(y => y),
    'evaluateExpressions': obj.evaluateExpressions,
    'marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDescribeObjectsOutput
 */
export interface DataPipelineDescribeObjectsOutput {
  /**
   * @schema DataPipelineDescribeObjectsOutput#pipelineObjects
   */
  readonly pipelineObjects: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelineDescribeObjectsOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineDescribeObjectsOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * Converts an object of type 'DataPipelineDescribeObjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDescribeObjectsOutput(obj: DataPipelineDescribeObjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineObjects': obj.pipelineObjects?.map(y => toJson_DataPipelinePipelineObject(y)),
    'marker': obj.marker,
    'hasMoreResults': obj.hasMoreResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDescribePipelinesInput
 */
export interface DataPipelineDescribePipelinesInput {
  /**
   * @schema DataPipelineDescribePipelinesInput#pipelineIds
   */
  readonly pipelineIds: string[];

}

/**
 * Converts an object of type 'DataPipelineDescribePipelinesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDescribePipelinesInput(obj: DataPipelineDescribePipelinesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineIds': obj.pipelineIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineDescribePipelinesOutput
 */
export interface DataPipelineDescribePipelinesOutput {
  /**
   * @schema DataPipelineDescribePipelinesOutput#pipelineDescriptionList
   */
  readonly pipelineDescriptionList: DataPipelinePipelineDescription[];

}

/**
 * Converts an object of type 'DataPipelineDescribePipelinesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineDescribePipelinesOutput(obj: DataPipelineDescribePipelinesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineDescriptionList': obj.pipelineDescriptionList?.map(y => toJson_DataPipelinePipelineDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineEvaluateExpressionInput
 */
export interface DataPipelineEvaluateExpressionInput {
  /**
   * @schema DataPipelineEvaluateExpressionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineEvaluateExpressionInput#objectId
   */
  readonly objectId: string;

  /**
   * @schema DataPipelineEvaluateExpressionInput#expression
   */
  readonly expression: string;

}

/**
 * Converts an object of type 'DataPipelineEvaluateExpressionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineEvaluateExpressionInput(obj: DataPipelineEvaluateExpressionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'objectId': obj.objectId,
    'expression': obj.expression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineEvaluateExpressionOutput
 */
export interface DataPipelineEvaluateExpressionOutput {
  /**
   * @schema DataPipelineEvaluateExpressionOutput#evaluatedExpression
   */
  readonly evaluatedExpression: string;

}

/**
 * Converts an object of type 'DataPipelineEvaluateExpressionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineEvaluateExpressionOutput(obj: DataPipelineEvaluateExpressionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evaluatedExpression': obj.evaluatedExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineGetPipelineDefinitionInput
 */
export interface DataPipelineGetPipelineDefinitionInput {
  /**
   * @schema DataPipelineGetPipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineGetPipelineDefinitionInput#version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'DataPipelineGetPipelineDefinitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineGetPipelineDefinitionInput(obj: DataPipelineGetPipelineDefinitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineGetPipelineDefinitionOutput
 */
export interface DataPipelineGetPipelineDefinitionOutput {
  /**
   * @schema DataPipelineGetPipelineDefinitionOutput#pipelineObjects
   */
  readonly pipelineObjects?: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelineGetPipelineDefinitionOutput#parameterObjects
   */
  readonly parameterObjects?: DataPipelineParameterObject[];

  /**
   * @schema DataPipelineGetPipelineDefinitionOutput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

}

/**
 * Converts an object of type 'DataPipelineGetPipelineDefinitionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineGetPipelineDefinitionOutput(obj: DataPipelineGetPipelineDefinitionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineObjects': obj.pipelineObjects?.map(y => toJson_DataPipelinePipelineObject(y)),
    'parameterObjects': obj.parameterObjects?.map(y => toJson_DataPipelineParameterObject(y)),
    'parameterValues': obj.parameterValues?.map(y => toJson_DataPipelineParameterValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineListPipelinesInput
 */
export interface DataPipelineListPipelinesInput {
  /**
   * @schema DataPipelineListPipelinesInput#marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'DataPipelineListPipelinesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineListPipelinesInput(obj: DataPipelineListPipelinesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineListPipelinesOutput
 */
export interface DataPipelineListPipelinesOutput {
  /**
   * @schema DataPipelineListPipelinesOutput#pipelineIdList
   */
  readonly pipelineIdList: DataPipelinePipelineIdName[];

  /**
   * @schema DataPipelineListPipelinesOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineListPipelinesOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * Converts an object of type 'DataPipelineListPipelinesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineListPipelinesOutput(obj: DataPipelineListPipelinesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineIdList': obj.pipelineIdList?.map(y => toJson_DataPipelinePipelineIdName(y)),
    'marker': obj.marker,
    'hasMoreResults': obj.hasMoreResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelinePollForTaskInput
 */
export interface DataPipelinePollForTaskInput {
  /**
   * @schema DataPipelinePollForTaskInput#workerGroup
   */
  readonly workerGroup: string;

  /**
   * @schema DataPipelinePollForTaskInput#hostname
   */
  readonly hostname?: string;

  /**
   * @schema DataPipelinePollForTaskInput#instanceIdentity
   */
  readonly instanceIdentity?: DataPipelineInstanceIdentity;

}

/**
 * Converts an object of type 'DataPipelinePollForTaskInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePollForTaskInput(obj: DataPipelinePollForTaskInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'workerGroup': obj.workerGroup,
    'hostname': obj.hostname,
    'instanceIdentity': toJson_DataPipelineInstanceIdentity(obj.instanceIdentity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelinePollForTaskOutput
 */
export interface DataPipelinePollForTaskOutput {
  /**
   * @schema DataPipelinePollForTaskOutput#taskObject
   */
  readonly taskObject?: DataPipelineTaskObject;

}

/**
 * Converts an object of type 'DataPipelinePollForTaskOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePollForTaskOutput(obj: DataPipelinePollForTaskOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskObject': toJson_DataPipelineTaskObject(obj.taskObject),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelinePutPipelineDefinitionInput
 */
export interface DataPipelinePutPipelineDefinitionInput {
  /**
   * @schema DataPipelinePutPipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelinePutPipelineDefinitionInput#pipelineObjects
   */
  readonly pipelineObjects: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelinePutPipelineDefinitionInput#parameterObjects
   */
  readonly parameterObjects?: DataPipelineParameterObject[];

  /**
   * @schema DataPipelinePutPipelineDefinitionInput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

}

/**
 * Converts an object of type 'DataPipelinePutPipelineDefinitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePutPipelineDefinitionInput(obj: DataPipelinePutPipelineDefinitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'pipelineObjects': obj.pipelineObjects?.map(y => toJson_DataPipelinePipelineObject(y)),
    'parameterObjects': obj.parameterObjects?.map(y => toJson_DataPipelineParameterObject(y)),
    'parameterValues': obj.parameterValues?.map(y => toJson_DataPipelineParameterValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelinePutPipelineDefinitionOutput
 */
export interface DataPipelinePutPipelineDefinitionOutput {
  /**
   * @schema DataPipelinePutPipelineDefinitionOutput#validationErrors
   */
  readonly validationErrors?: DataPipelineValidationError[];

  /**
   * @schema DataPipelinePutPipelineDefinitionOutput#validationWarnings
   */
  readonly validationWarnings?: DataPipelineValidationWarning[];

  /**
   * @schema DataPipelinePutPipelineDefinitionOutput#errored
   */
  readonly errored: boolean;

}

/**
 * Converts an object of type 'DataPipelinePutPipelineDefinitionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePutPipelineDefinitionOutput(obj: DataPipelinePutPipelineDefinitionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'validationErrors': obj.validationErrors?.map(y => toJson_DataPipelineValidationError(y)),
    'validationWarnings': obj.validationWarnings?.map(y => toJson_DataPipelineValidationWarning(y)),
    'errored': obj.errored,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineQueryObjectsInput
 */
export interface DataPipelineQueryObjectsInput {
  /**
   * @schema DataPipelineQueryObjectsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineQueryObjectsInput#query
   */
  readonly query?: DataPipelineQuery;

  /**
   * @schema DataPipelineQueryObjectsInput#sphere
   */
  readonly sphere: string;

  /**
   * @schema DataPipelineQueryObjectsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineQueryObjectsInput#limit
   */
  readonly limit?: number;

}

/**
 * Converts an object of type 'DataPipelineQueryObjectsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineQueryObjectsInput(obj: DataPipelineQueryObjectsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'query': toJson_DataPipelineQuery(obj.query),
    'sphere': obj.sphere,
    'marker': obj.marker,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineQueryObjectsOutput
 */
export interface DataPipelineQueryObjectsOutput {
  /**
   * @schema DataPipelineQueryObjectsOutput#ids
   */
  readonly ids?: string[];

  /**
   * @schema DataPipelineQueryObjectsOutput#marker
   */
  readonly marker?: string;

  /**
   * @schema DataPipelineQueryObjectsOutput#hasMoreResults
   */
  readonly hasMoreResults?: boolean;

}

/**
 * Converts an object of type 'DataPipelineQueryObjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineQueryObjectsOutput(obj: DataPipelineQueryObjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ids': obj.ids?.map(y => y),
    'marker': obj.marker,
    'hasMoreResults': obj.hasMoreResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineRemoveTagsInput
 */
export interface DataPipelineRemoveTagsInput {
  /**
   * @schema DataPipelineRemoveTagsInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineRemoveTagsInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'DataPipelineRemoveTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineRemoveTagsInput(obj: DataPipelineRemoveTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineRemoveTagsOutput
 */
export interface DataPipelineRemoveTagsOutput {
}

/**
 * Converts an object of type 'DataPipelineRemoveTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineRemoveTagsOutput(obj: DataPipelineRemoveTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineReportTaskProgressInput
 */
export interface DataPipelineReportTaskProgressInput {
  /**
   * @schema DataPipelineReportTaskProgressInput#taskId
   */
  readonly taskId: string;

  /**
   * @schema DataPipelineReportTaskProgressInput#fields
   */
  readonly fields?: DataPipelineField[];

}

/**
 * Converts an object of type 'DataPipelineReportTaskProgressInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineReportTaskProgressInput(obj: DataPipelineReportTaskProgressInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'fields': obj.fields?.map(y => toJson_DataPipelineField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineReportTaskProgressOutput
 */
export interface DataPipelineReportTaskProgressOutput {
  /**
   * @schema DataPipelineReportTaskProgressOutput#canceled
   */
  readonly canceled: boolean;

}

/**
 * Converts an object of type 'DataPipelineReportTaskProgressOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineReportTaskProgressOutput(obj: DataPipelineReportTaskProgressOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'canceled': obj.canceled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineReportTaskRunnerHeartbeatInput
 */
export interface DataPipelineReportTaskRunnerHeartbeatInput {
  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatInput#taskrunnerId
   */
  readonly taskrunnerId: string;

  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatInput#workerGroup
   */
  readonly workerGroup?: string;

  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatInput#hostname
   */
  readonly hostname?: string;

}

/**
 * Converts an object of type 'DataPipelineReportTaskRunnerHeartbeatInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineReportTaskRunnerHeartbeatInput(obj: DataPipelineReportTaskRunnerHeartbeatInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskrunnerId': obj.taskrunnerId,
    'workerGroup': obj.workerGroup,
    'hostname': obj.hostname,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineReportTaskRunnerHeartbeatOutput
 */
export interface DataPipelineReportTaskRunnerHeartbeatOutput {
  /**
   * @schema DataPipelineReportTaskRunnerHeartbeatOutput#terminate
   */
  readonly terminate: boolean;

}

/**
 * Converts an object of type 'DataPipelineReportTaskRunnerHeartbeatOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineReportTaskRunnerHeartbeatOutput(obj: DataPipelineReportTaskRunnerHeartbeatOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'terminate': obj.terminate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineSetStatusInput
 */
export interface DataPipelineSetStatusInput {
  /**
   * @schema DataPipelineSetStatusInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineSetStatusInput#objectIds
   */
  readonly objectIds: string[];

  /**
   * @schema DataPipelineSetStatusInput#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'DataPipelineSetStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineSetStatusInput(obj: DataPipelineSetStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'objectIds': obj.objectIds?.map(y => y),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineSetTaskStatusInput
 */
export interface DataPipelineSetTaskStatusInput {
  /**
   * @schema DataPipelineSetTaskStatusInput#taskId
   */
  readonly taskId: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#taskStatus
   */
  readonly taskStatus: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#errorId
   */
  readonly errorId?: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataPipelineSetTaskStatusInput#errorStackTrace
   */
  readonly errorStackTrace?: string;

}

/**
 * Converts an object of type 'DataPipelineSetTaskStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineSetTaskStatusInput(obj: DataPipelineSetTaskStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'taskStatus': obj.taskStatus,
    'errorId': obj.errorId,
    'errorMessage': obj.errorMessage,
    'errorStackTrace': obj.errorStackTrace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineSetTaskStatusOutput
 */
export interface DataPipelineSetTaskStatusOutput {
}

/**
 * Converts an object of type 'DataPipelineSetTaskStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineSetTaskStatusOutput(obj: DataPipelineSetTaskStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineValidatePipelineDefinitionInput
 */
export interface DataPipelineValidatePipelineDefinitionInput {
  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#pipelineObjects
   */
  readonly pipelineObjects: DataPipelinePipelineObject[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#parameterObjects
   */
  readonly parameterObjects?: DataPipelineParameterObject[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionInput#parameterValues
   */
  readonly parameterValues?: DataPipelineParameterValue[];

}

/**
 * Converts an object of type 'DataPipelineValidatePipelineDefinitionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineValidatePipelineDefinitionInput(obj: DataPipelineValidatePipelineDefinitionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'pipelineObjects': obj.pipelineObjects?.map(y => toJson_DataPipelinePipelineObject(y)),
    'parameterObjects': obj.parameterObjects?.map(y => toJson_DataPipelineParameterObject(y)),
    'parameterValues': obj.parameterValues?.map(y => toJson_DataPipelineParameterValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineValidatePipelineDefinitionOutput
 */
export interface DataPipelineValidatePipelineDefinitionOutput {
  /**
   * @schema DataPipelineValidatePipelineDefinitionOutput#validationErrors
   */
  readonly validationErrors?: DataPipelineValidationError[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionOutput#validationWarnings
   */
  readonly validationWarnings?: DataPipelineValidationWarning[];

  /**
   * @schema DataPipelineValidatePipelineDefinitionOutput#errored
   */
  readonly errored: boolean;

}

/**
 * Converts an object of type 'DataPipelineValidatePipelineDefinitionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineValidatePipelineDefinitionOutput(obj: DataPipelineValidatePipelineDefinitionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'validationErrors': obj.validationErrors?.map(y => toJson_DataPipelineValidationError(y)),
    'validationWarnings': obj.validationWarnings?.map(y => toJson_DataPipelineValidationWarning(y)),
    'errored': obj.errored,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineParameterValue
 */
export interface DataPipelineParameterValue {
  /**
   * @schema DataPipelineParameterValue#id
   */
  readonly id: string;

  /**
   * @schema DataPipelineParameterValue#stringValue
   */
  readonly stringValue: string;

}

/**
 * Converts an object of type 'DataPipelineParameterValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineParameterValue(obj: DataPipelineParameterValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'stringValue': obj.stringValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineTag
 */
export interface DataPipelineTag {
  /**
   * @schema DataPipelineTag#key
   */
  readonly key: string;

  /**
   * @schema DataPipelineTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'DataPipelineTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineTag(obj: DataPipelineTag | undefined): Record<string, any> | undefined {
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
 * @schema DataPipelinePipelineObject
 */
export interface DataPipelinePipelineObject {
  /**
   * @schema DataPipelinePipelineObject#id
   */
  readonly id: string;

  /**
   * @schema DataPipelinePipelineObject#name
   */
  readonly name: string;

  /**
   * @schema DataPipelinePipelineObject#fields
   */
  readonly fields: DataPipelineField[];

}

/**
 * Converts an object of type 'DataPipelinePipelineObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePipelineObject(obj: DataPipelinePipelineObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'fields': obj.fields?.map(y => toJson_DataPipelineField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelinePipelineDescription
 */
export interface DataPipelinePipelineDescription {
  /**
   * @schema DataPipelinePipelineDescription#pipelineId
   */
  readonly pipelineId: string;

  /**
   * @schema DataPipelinePipelineDescription#name
   */
  readonly name: string;

  /**
   * @schema DataPipelinePipelineDescription#fields
   */
  readonly fields: DataPipelineField[];

  /**
   * @schema DataPipelinePipelineDescription#description
   */
  readonly description?: string;

  /**
   * @schema DataPipelinePipelineDescription#tags
   */
  readonly tags?: DataPipelineTag[];

}

/**
 * Converts an object of type 'DataPipelinePipelineDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePipelineDescription(obj: DataPipelinePipelineDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineId': obj.pipelineId,
    'name': obj.name,
    'fields': obj.fields?.map(y => toJson_DataPipelineField(y)),
    'description': obj.description,
    'tags': obj.tags?.map(y => toJson_DataPipelineTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineParameterObject
 */
export interface DataPipelineParameterObject {
  /**
   * @schema DataPipelineParameterObject#id
   */
  readonly id: string;

  /**
   * @schema DataPipelineParameterObject#attributes
   */
  readonly attributes: DataPipelineParameterAttribute[];

}

/**
 * Converts an object of type 'DataPipelineParameterObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineParameterObject(obj: DataPipelineParameterObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'attributes': obj.attributes?.map(y => toJson_DataPipelineParameterAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelinePipelineIdName
 */
export interface DataPipelinePipelineIdName {
  /**
   * @schema DataPipelinePipelineIdName#id
   */
  readonly id?: string;

  /**
   * @schema DataPipelinePipelineIdName#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'DataPipelinePipelineIdName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelinePipelineIdName(obj: DataPipelinePipelineIdName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineInstanceIdentity
 */
export interface DataPipelineInstanceIdentity {
  /**
   * @schema DataPipelineInstanceIdentity#document
   */
  readonly document?: string;

  /**
   * @schema DataPipelineInstanceIdentity#signature
   */
  readonly signature?: string;

}

/**
 * Converts an object of type 'DataPipelineInstanceIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineInstanceIdentity(obj: DataPipelineInstanceIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'document': obj.document,
    'signature': obj.signature,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineTaskObject
 */
export interface DataPipelineTaskObject {
  /**
   * @schema DataPipelineTaskObject#taskId
   */
  readonly taskId?: string;

  /**
   * @schema DataPipelineTaskObject#pipelineId
   */
  readonly pipelineId?: string;

  /**
   * @schema DataPipelineTaskObject#attemptId
   */
  readonly attemptId?: string;

  /**
   * @schema DataPipelineTaskObject#objects
   */
  readonly objects?: { [key: string]: DataPipelinePipelineObject };

}

/**
 * Converts an object of type 'DataPipelineTaskObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineTaskObject(obj: DataPipelineTaskObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'pipelineId': obj.pipelineId,
    'attemptId': obj.attemptId,
    'objects': ((obj.objects) === undefined) ? undefined : (Object.entries(obj.objects).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_DataPipelinePipelineObject(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineValidationError
 */
export interface DataPipelineValidationError {
  /**
   * @schema DataPipelineValidationError#id
   */
  readonly id?: string;

  /**
   * @schema DataPipelineValidationError#errors
   */
  readonly errors?: string[];

}

/**
 * Converts an object of type 'DataPipelineValidationError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineValidationError(obj: DataPipelineValidationError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'errors': obj.errors?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineValidationWarning
 */
export interface DataPipelineValidationWarning {
  /**
   * @schema DataPipelineValidationWarning#id
   */
  readonly id?: string;

  /**
   * @schema DataPipelineValidationWarning#warnings
   */
  readonly warnings?: string[];

}

/**
 * Converts an object of type 'DataPipelineValidationWarning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineValidationWarning(obj: DataPipelineValidationWarning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'warnings': obj.warnings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineQuery
 */
export interface DataPipelineQuery {
  /**
   * @schema DataPipelineQuery#selectors
   */
  readonly selectors?: DataPipelineSelector[];

}

/**
 * Converts an object of type 'DataPipelineQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineQuery(obj: DataPipelineQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'selectors': obj.selectors?.map(y => toJson_DataPipelineSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineField
 */
export interface DataPipelineField {
  /**
   * @schema DataPipelineField#key
   */
  readonly key: string;

  /**
   * @schema DataPipelineField#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema DataPipelineField#refValue
   */
  readonly refValue?: string;

}

/**
 * Converts an object of type 'DataPipelineField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineField(obj: DataPipelineField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'stringValue': obj.stringValue,
    'refValue': obj.refValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineParameterAttribute
 */
export interface DataPipelineParameterAttribute {
  /**
   * @schema DataPipelineParameterAttribute#key
   */
  readonly key: string;

  /**
   * @schema DataPipelineParameterAttribute#stringValue
   */
  readonly stringValue: string;

}

/**
 * Converts an object of type 'DataPipelineParameterAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineParameterAttribute(obj: DataPipelineParameterAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'stringValue': obj.stringValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineSelector
 */
export interface DataPipelineSelector {
  /**
   * @schema DataPipelineSelector#fieldName
   */
  readonly fieldName?: string;

  /**
   * @schema DataPipelineSelector#operator
   */
  readonly operator?: DataPipelineOperator;

}

/**
 * Converts an object of type 'DataPipelineSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineSelector(obj: DataPipelineSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fieldName': obj.fieldName,
    'operator': toJson_DataPipelineOperator(obj.operator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataPipelineOperator
 */
export interface DataPipelineOperator {
  /**
   * @schema DataPipelineOperator#type
   */
  readonly type?: string;

  /**
   * @schema DataPipelineOperator#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'DataPipelineOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataPipelineOperator(obj: DataPipelineOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
