/**
 * @schema FisCreateExperimentTemplateRequest
 */
export interface FisCreateExperimentTemplateRequest {
  /**
   * @schema FisCreateExperimentTemplateRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema FisCreateExperimentTemplateRequest#description
   */
  readonly description: string;

  /**
   * @schema FisCreateExperimentTemplateRequest#stopConditions
   */
  readonly stopConditions: FisCreateExperimentTemplateStopConditionInput[];

  /**
   * @schema FisCreateExperimentTemplateRequest#targets
   */
  readonly targets?: { [key: string]: FisCreateExperimentTemplateTargetInput };

  /**
   * @schema FisCreateExperimentTemplateRequest#actions
   */
  readonly actions: { [key: string]: FisCreateExperimentTemplateActionInput };

  /**
   * @schema FisCreateExperimentTemplateRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema FisCreateExperimentTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisCreateExperimentTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisCreateExperimentTemplateRequest(obj: FisCreateExperimentTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'stopConditions': obj.stopConditions?.map(y => toJson_FisCreateExperimentTemplateStopConditionInput(y)),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisCreateExperimentTemplateTargetInput(i[1]) }), {})),
    'actions': ((obj.actions) === undefined) ? undefined : (Object.entries(obj.actions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisCreateExperimentTemplateActionInput(i[1]) }), {})),
    'roleArn': obj.roleArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisCreateExperimentTemplateResponse
 */
export interface FisCreateExperimentTemplateResponse {
  /**
   * @schema FisCreateExperimentTemplateResponse#experimentTemplate
   */
  readonly experimentTemplate?: FisExperimentTemplate;

}

/**
 * Converts an object of type 'FisCreateExperimentTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisCreateExperimentTemplateResponse(obj: FisCreateExperimentTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experimentTemplate': toJson_FisExperimentTemplate(obj.experimentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisDeleteExperimentTemplateRequest
 */
export interface FisDeleteExperimentTemplateRequest {
  /**
   * @schema FisDeleteExperimentTemplateRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'FisDeleteExperimentTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisDeleteExperimentTemplateRequest(obj: FisDeleteExperimentTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisDeleteExperimentTemplateResponse
 */
export interface FisDeleteExperimentTemplateResponse {
  /**
   * @schema FisDeleteExperimentTemplateResponse#experimentTemplate
   */
  readonly experimentTemplate?: FisExperimentTemplate;

}

/**
 * Converts an object of type 'FisDeleteExperimentTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisDeleteExperimentTemplateResponse(obj: FisDeleteExperimentTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experimentTemplate': toJson_FisExperimentTemplate(obj.experimentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisGetActionRequest
 */
export interface FisGetActionRequest {
  /**
   * @schema FisGetActionRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'FisGetActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisGetActionRequest(obj: FisGetActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisGetActionResponse
 */
export interface FisGetActionResponse {
  /**
   * @schema FisGetActionResponse#action
   */
  readonly action?: FisAction;

}

/**
 * Converts an object of type 'FisGetActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisGetActionResponse(obj: FisGetActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_FisAction(obj.action),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisGetExperimentRequest
 */
export interface FisGetExperimentRequest {
  /**
   * @schema FisGetExperimentRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'FisGetExperimentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisGetExperimentRequest(obj: FisGetExperimentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisGetExperimentResponse
 */
export interface FisGetExperimentResponse {
  /**
   * @schema FisGetExperimentResponse#experiment
   */
  readonly experiment?: FisExperiment;

}

/**
 * Converts an object of type 'FisGetExperimentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisGetExperimentResponse(obj: FisGetExperimentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experiment': toJson_FisExperiment(obj.experiment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisGetExperimentTemplateRequest
 */
export interface FisGetExperimentTemplateRequest {
  /**
   * @schema FisGetExperimentTemplateRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'FisGetExperimentTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisGetExperimentTemplateRequest(obj: FisGetExperimentTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisGetExperimentTemplateResponse
 */
export interface FisGetExperimentTemplateResponse {
  /**
   * @schema FisGetExperimentTemplateResponse#experimentTemplate
   */
  readonly experimentTemplate?: FisExperimentTemplate;

}

/**
 * Converts an object of type 'FisGetExperimentTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisGetExperimentTemplateResponse(obj: FisGetExperimentTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experimentTemplate': toJson_FisExperimentTemplate(obj.experimentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListActionsRequest
 */
export interface FisListActionsRequest {
  /**
   * @schema FisListActionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FisListActionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FisListActionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListActionsRequest(obj: FisListActionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListActionsResponse
 */
export interface FisListActionsResponse {
  /**
   * @schema FisListActionsResponse#actions
   */
  readonly actions?: FisActionSummary[];

  /**
   * @schema FisListActionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FisListActionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListActionsResponse(obj: FisListActionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => toJson_FisActionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListExperimentTemplatesRequest
 */
export interface FisListExperimentTemplatesRequest {
  /**
   * @schema FisListExperimentTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FisListExperimentTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FisListExperimentTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListExperimentTemplatesRequest(obj: FisListExperimentTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListExperimentTemplatesResponse
 */
export interface FisListExperimentTemplatesResponse {
  /**
   * @schema FisListExperimentTemplatesResponse#experimentTemplates
   */
  readonly experimentTemplates?: FisExperimentTemplateSummary[];

  /**
   * @schema FisListExperimentTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FisListExperimentTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListExperimentTemplatesResponse(obj: FisListExperimentTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experimentTemplates': obj.experimentTemplates?.map(y => toJson_FisExperimentTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListExperimentsRequest
 */
export interface FisListExperimentsRequest {
  /**
   * @schema FisListExperimentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema FisListExperimentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FisListExperimentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListExperimentsRequest(obj: FisListExperimentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListExperimentsResponse
 */
export interface FisListExperimentsResponse {
  /**
   * @schema FisListExperimentsResponse#experiments
   */
  readonly experiments?: FisExperimentSummary[];

  /**
   * @schema FisListExperimentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'FisListExperimentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListExperimentsResponse(obj: FisListExperimentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experiments': obj.experiments?.map(y => toJson_FisExperimentSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListTagsForResourceRequest
 */
export interface FisListTagsForResourceRequest {
  /**
   * @schema FisListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'FisListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListTagsForResourceRequest(obj: FisListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisListTagsForResourceResponse
 */
export interface FisListTagsForResourceResponse {
  /**
   * @schema FisListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisListTagsForResourceResponse(obj: FisListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisStartExperimentRequest
 */
export interface FisStartExperimentRequest {
  /**
   * @schema FisStartExperimentRequest#clientToken
   */
  readonly clientToken: string;

  /**
   * @schema FisStartExperimentRequest#experimentTemplateId
   */
  readonly experimentTemplateId: string;

  /**
   * @schema FisStartExperimentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisStartExperimentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisStartExperimentRequest(obj: FisStartExperimentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'experimentTemplateId': obj.experimentTemplateId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisStartExperimentResponse
 */
export interface FisStartExperimentResponse {
  /**
   * @schema FisStartExperimentResponse#experiment
   */
  readonly experiment?: FisExperiment;

}

/**
 * Converts an object of type 'FisStartExperimentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisStartExperimentResponse(obj: FisStartExperimentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experiment': toJson_FisExperiment(obj.experiment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisStopExperimentRequest
 */
export interface FisStopExperimentRequest {
  /**
   * @schema FisStopExperimentRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'FisStopExperimentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisStopExperimentRequest(obj: FisStopExperimentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisStopExperimentResponse
 */
export interface FisStopExperimentResponse {
  /**
   * @schema FisStopExperimentResponse#experiment
   */
  readonly experiment?: FisExperiment;

}

/**
 * Converts an object of type 'FisStopExperimentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisStopExperimentResponse(obj: FisStopExperimentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experiment': toJson_FisExperiment(obj.experiment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisTagResourceRequest
 */
export interface FisTagResourceRequest {
  /**
   * @schema FisTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema FisTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'FisTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisTagResourceRequest(obj: FisTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisTagResourceResponse
 */
export interface FisTagResourceResponse {
}

/**
 * Converts an object of type 'FisTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisTagResourceResponse(obj: FisTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisUntagResourceRequest
 */
export interface FisUntagResourceRequest {
  /**
   * @schema FisUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema FisUntagResourceRequest#tagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'FisUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUntagResourceRequest(obj: FisUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema FisUntagResourceResponse
 */
export interface FisUntagResourceResponse {
}

/**
 * Converts an object of type 'FisUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUntagResourceResponse(obj: FisUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisUpdateExperimentTemplateRequest
 */
export interface FisUpdateExperimentTemplateRequest {
  /**
   * @schema FisUpdateExperimentTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema FisUpdateExperimentTemplateRequest#description
   */
  readonly description?: string;

  /**
   * @schema FisUpdateExperimentTemplateRequest#stopConditions
   */
  readonly stopConditions?: FisUpdateExperimentTemplateStopConditionInput[];

  /**
   * @schema FisUpdateExperimentTemplateRequest#targets
   */
  readonly targets?: { [key: string]: FisUpdateExperimentTemplateTargetInput };

  /**
   * @schema FisUpdateExperimentTemplateRequest#actions
   */
  readonly actions?: { [key: string]: FisUpdateExperimentTemplateActionInputItem };

  /**
   * @schema FisUpdateExperimentTemplateRequest#roleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'FisUpdateExperimentTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUpdateExperimentTemplateRequest(obj: FisUpdateExperimentTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'stopConditions': obj.stopConditions?.map(y => toJson_FisUpdateExperimentTemplateStopConditionInput(y)),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisUpdateExperimentTemplateTargetInput(i[1]) }), {})),
    'actions': ((obj.actions) === undefined) ? undefined : (Object.entries(obj.actions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisUpdateExperimentTemplateActionInputItem(i[1]) }), {})),
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisUpdateExperimentTemplateResponse
 */
export interface FisUpdateExperimentTemplateResponse {
  /**
   * @schema FisUpdateExperimentTemplateResponse#experimentTemplate
   */
  readonly experimentTemplate?: FisExperimentTemplate;

}

/**
 * Converts an object of type 'FisUpdateExperimentTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUpdateExperimentTemplateResponse(obj: FisUpdateExperimentTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'experimentTemplate': toJson_FisExperimentTemplate(obj.experimentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisCreateExperimentTemplateStopConditionInput
 */
export interface FisCreateExperimentTemplateStopConditionInput {
  /**
   * @schema FisCreateExperimentTemplateStopConditionInput#source
   */
  readonly source: string;

  /**
   * @schema FisCreateExperimentTemplateStopConditionInput#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FisCreateExperimentTemplateStopConditionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisCreateExperimentTemplateStopConditionInput(obj: FisCreateExperimentTemplateStopConditionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisCreateExperimentTemplateTargetInput
 */
export interface FisCreateExperimentTemplateTargetInput {
  /**
   * @schema FisCreateExperimentTemplateTargetInput#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema FisCreateExperimentTemplateTargetInput#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema FisCreateExperimentTemplateTargetInput#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema FisCreateExperimentTemplateTargetInput#filters
   */
  readonly filters?: FisExperimentTemplateTargetInputFilter[];

  /**
   * @schema FisCreateExperimentTemplateTargetInput#selectionMode
   */
  readonly selectionMode: string;

}

/**
 * Converts an object of type 'FisCreateExperimentTemplateTargetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisCreateExperimentTemplateTargetInput(obj: FisCreateExperimentTemplateTargetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceArns': obj.resourceArns?.map(y => y),
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'filters': obj.filters?.map(y => toJson_FisExperimentTemplateTargetInputFilter(y)),
    'selectionMode': obj.selectionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisCreateExperimentTemplateActionInput
 */
export interface FisCreateExperimentTemplateActionInput {
  /**
   * @schema FisCreateExperimentTemplateActionInput#actionId
   */
  readonly actionId: string;

  /**
   * @schema FisCreateExperimentTemplateActionInput#description
   */
  readonly description?: string;

  /**
   * @schema FisCreateExperimentTemplateActionInput#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema FisCreateExperimentTemplateActionInput#targets
   */
  readonly targets?: { [key: string]: string };

  /**
   * @schema FisCreateExperimentTemplateActionInput#startAfter
   */
  readonly startAfter?: string[];

}

/**
 * Converts an object of type 'FisCreateExperimentTemplateActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisCreateExperimentTemplateActionInput(obj: FisCreateExperimentTemplateActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionId': obj.actionId,
    'description': obj.description,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'startAfter': obj.startAfter?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplate
 */
export interface FisExperimentTemplate {
  /**
   * @schema FisExperimentTemplate#id
   */
  readonly id?: string;

  /**
   * @schema FisExperimentTemplate#description
   */
  readonly description?: string;

  /**
   * @schema FisExperimentTemplate#targets
   */
  readonly targets?: { [key: string]: FisExperimentTemplateTarget };

  /**
   * @schema FisExperimentTemplate#actions
   */
  readonly actions?: { [key: string]: FisExperimentTemplateAction };

  /**
   * @schema FisExperimentTemplate#stopConditions
   */
  readonly stopConditions?: FisExperimentTemplateStopCondition[];

  /**
   * @schema FisExperimentTemplate#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FisExperimentTemplate#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema FisExperimentTemplate#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema FisExperimentTemplate#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisExperimentTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplate(obj: FisExperimentTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisExperimentTemplateTarget(i[1]) }), {})),
    'actions': ((obj.actions) === undefined) ? undefined : (Object.entries(obj.actions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisExperimentTemplateAction(i[1]) }), {})),
    'stopConditions': obj.stopConditions?.map(y => toJson_FisExperimentTemplateStopCondition(y)),
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'roleArn': obj.roleArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisAction
 */
export interface FisAction {
  /**
   * @schema FisAction#id
   */
  readonly id?: string;

  /**
   * @schema FisAction#description
   */
  readonly description?: string;

  /**
   * @schema FisAction#parameters
   */
  readonly parameters?: { [key: string]: FisActionParameter };

  /**
   * @schema FisAction#targets
   */
  readonly targets?: { [key: string]: FisActionTarget };

  /**
   * @schema FisAction#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisAction(obj: FisAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisActionParameter(i[1]) }), {})),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisActionTarget(i[1]) }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperiment
 */
export interface FisExperiment {
  /**
   * @schema FisExperiment#id
   */
  readonly id?: string;

  /**
   * @schema FisExperiment#experimentTemplateId
   */
  readonly experimentTemplateId?: string;

  /**
   * @schema FisExperiment#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema FisExperiment#state
   */
  readonly state?: FisExperimentState;

  /**
   * @schema FisExperiment#targets
   */
  readonly targets?: { [key: string]: FisExperimentTarget };

  /**
   * @schema FisExperiment#actions
   */
  readonly actions?: { [key: string]: FisExperimentAction };

  /**
   * @schema FisExperiment#stopConditions
   */
  readonly stopConditions?: FisExperimentStopCondition[];

  /**
   * @schema FisExperiment#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FisExperiment#startTime
   */
  readonly startTime?: string;

  /**
   * @schema FisExperiment#endTime
   */
  readonly endTime?: string;

  /**
   * @schema FisExperiment#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisExperiment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperiment(obj: FisExperiment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'experimentTemplateId': obj.experimentTemplateId,
    'roleArn': obj.roleArn,
    'state': toJson_FisExperimentState(obj.state),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisExperimentTarget(i[1]) }), {})),
    'actions': ((obj.actions) === undefined) ? undefined : (Object.entries(obj.actions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisExperimentAction(i[1]) }), {})),
    'stopConditions': obj.stopConditions?.map(y => toJson_FisExperimentStopCondition(y)),
    'creationTime': obj.creationTime,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisActionSummary
 */
export interface FisActionSummary {
  /**
   * @schema FisActionSummary#id
   */
  readonly id?: string;

  /**
   * @schema FisActionSummary#description
   */
  readonly description?: string;

  /**
   * @schema FisActionSummary#targets
   */
  readonly targets?: { [key: string]: FisActionTarget };

  /**
   * @schema FisActionSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisActionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisActionSummary(obj: FisActionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_FisActionTarget(i[1]) }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplateSummary
 */
export interface FisExperimentTemplateSummary {
  /**
   * @schema FisExperimentTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema FisExperimentTemplateSummary#description
   */
  readonly description?: string;

  /**
   * @schema FisExperimentTemplateSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FisExperimentTemplateSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema FisExperimentTemplateSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisExperimentTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplateSummary(obj: FisExperimentTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'creationTime': obj.creationTime,
    'lastUpdateTime': obj.lastUpdateTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentSummary
 */
export interface FisExperimentSummary {
  /**
   * @schema FisExperimentSummary#id
   */
  readonly id?: string;

  /**
   * @schema FisExperimentSummary#experimentTemplateId
   */
  readonly experimentTemplateId?: string;

  /**
   * @schema FisExperimentSummary#state
   */
  readonly state?: FisExperimentState;

  /**
   * @schema FisExperimentSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FisExperimentSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'FisExperimentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentSummary(obj: FisExperimentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'experimentTemplateId': obj.experimentTemplateId,
    'state': toJson_FisExperimentState(obj.state),
    'creationTime': obj.creationTime,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisUpdateExperimentTemplateStopConditionInput
 */
export interface FisUpdateExperimentTemplateStopConditionInput {
  /**
   * @schema FisUpdateExperimentTemplateStopConditionInput#source
   */
  readonly source: string;

  /**
   * @schema FisUpdateExperimentTemplateStopConditionInput#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FisUpdateExperimentTemplateStopConditionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUpdateExperimentTemplateStopConditionInput(obj: FisUpdateExperimentTemplateStopConditionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisUpdateExperimentTemplateTargetInput
 */
export interface FisUpdateExperimentTemplateTargetInput {
  /**
   * @schema FisUpdateExperimentTemplateTargetInput#resourceType
   */
  readonly resourceType: string;

  /**
   * @schema FisUpdateExperimentTemplateTargetInput#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema FisUpdateExperimentTemplateTargetInput#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema FisUpdateExperimentTemplateTargetInput#filters
   */
  readonly filters?: FisExperimentTemplateTargetInputFilter[];

  /**
   * @schema FisUpdateExperimentTemplateTargetInput#selectionMode
   */
  readonly selectionMode: string;

}

/**
 * Converts an object of type 'FisUpdateExperimentTemplateTargetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUpdateExperimentTemplateTargetInput(obj: FisUpdateExperimentTemplateTargetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceArns': obj.resourceArns?.map(y => y),
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'filters': obj.filters?.map(y => toJson_FisExperimentTemplateTargetInputFilter(y)),
    'selectionMode': obj.selectionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisUpdateExperimentTemplateActionInputItem
 */
export interface FisUpdateExperimentTemplateActionInputItem {
  /**
   * @schema FisUpdateExperimentTemplateActionInputItem#actionId
   */
  readonly actionId?: string;

  /**
   * @schema FisUpdateExperimentTemplateActionInputItem#description
   */
  readonly description?: string;

  /**
   * @schema FisUpdateExperimentTemplateActionInputItem#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema FisUpdateExperimentTemplateActionInputItem#targets
   */
  readonly targets?: { [key: string]: string };

  /**
   * @schema FisUpdateExperimentTemplateActionInputItem#startAfter
   */
  readonly startAfter?: string[];

}

/**
 * Converts an object of type 'FisUpdateExperimentTemplateActionInputItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisUpdateExperimentTemplateActionInputItem(obj: FisUpdateExperimentTemplateActionInputItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionId': obj.actionId,
    'description': obj.description,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'startAfter': obj.startAfter?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplateTargetInputFilter
 */
export interface FisExperimentTemplateTargetInputFilter {
  /**
   * @schema FisExperimentTemplateTargetInputFilter#path
   */
  readonly path: string;

  /**
   * @schema FisExperimentTemplateTargetInputFilter#values
   */
  readonly values: string[];

}

/**
 * Converts an object of type 'FisExperimentTemplateTargetInputFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplateTargetInputFilter(obj: FisExperimentTemplateTargetInputFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplateTarget
 */
export interface FisExperimentTemplateTarget {
  /**
   * @schema FisExperimentTemplateTarget#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema FisExperimentTemplateTarget#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema FisExperimentTemplateTarget#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema FisExperimentTemplateTarget#filters
   */
  readonly filters?: FisExperimentTemplateTargetFilter[];

  /**
   * @schema FisExperimentTemplateTarget#selectionMode
   */
  readonly selectionMode?: string;

}

/**
 * Converts an object of type 'FisExperimentTemplateTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplateTarget(obj: FisExperimentTemplateTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceArns': obj.resourceArns?.map(y => y),
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'filters': obj.filters?.map(y => toJson_FisExperimentTemplateTargetFilter(y)),
    'selectionMode': obj.selectionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplateAction
 */
export interface FisExperimentTemplateAction {
  /**
   * @schema FisExperimentTemplateAction#actionId
   */
  readonly actionId?: string;

  /**
   * @schema FisExperimentTemplateAction#description
   */
  readonly description?: string;

  /**
   * @schema FisExperimentTemplateAction#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema FisExperimentTemplateAction#targets
   */
  readonly targets?: { [key: string]: string };

  /**
   * @schema FisExperimentTemplateAction#startAfter
   */
  readonly startAfter?: string[];

}

/**
 * Converts an object of type 'FisExperimentTemplateAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplateAction(obj: FisExperimentTemplateAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionId': obj.actionId,
    'description': obj.description,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'startAfter': obj.startAfter?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplateStopCondition
 */
export interface FisExperimentTemplateStopCondition {
  /**
   * @schema FisExperimentTemplateStopCondition#source
   */
  readonly source?: string;

  /**
   * @schema FisExperimentTemplateStopCondition#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FisExperimentTemplateStopCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplateStopCondition(obj: FisExperimentTemplateStopCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisActionParameter
 */
export interface FisActionParameter {
  /**
   * @schema FisActionParameter#description
   */
  readonly description?: string;

  /**
   * @schema FisActionParameter#required
   */
  readonly required?: boolean;

}

/**
 * Converts an object of type 'FisActionParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisActionParameter(obj: FisActionParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'required': obj.required,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisActionTarget
 */
export interface FisActionTarget {
  /**
   * @schema FisActionTarget#resourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'FisActionTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisActionTarget(obj: FisActionTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentState
 */
export interface FisExperimentState {
  /**
   * @schema FisExperimentState#status
   */
  readonly status?: string;

  /**
   * @schema FisExperimentState#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'FisExperimentState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentState(obj: FisExperimentState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTarget
 */
export interface FisExperimentTarget {
  /**
   * @schema FisExperimentTarget#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema FisExperimentTarget#resourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema FisExperimentTarget#resourceTags
   */
  readonly resourceTags?: { [key: string]: string };

  /**
   * @schema FisExperimentTarget#filters
   */
  readonly filters?: FisExperimentTargetFilter[];

  /**
   * @schema FisExperimentTarget#selectionMode
   */
  readonly selectionMode?: string;

}

/**
 * Converts an object of type 'FisExperimentTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTarget(obj: FisExperimentTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceArns': obj.resourceArns?.map(y => y),
    'resourceTags': ((obj.resourceTags) === undefined) ? undefined : (Object.entries(obj.resourceTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'filters': obj.filters?.map(y => toJson_FisExperimentTargetFilter(y)),
    'selectionMode': obj.selectionMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentAction
 */
export interface FisExperimentAction {
  /**
   * @schema FisExperimentAction#actionId
   */
  readonly actionId?: string;

  /**
   * @schema FisExperimentAction#description
   */
  readonly description?: string;

  /**
   * @schema FisExperimentAction#parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema FisExperimentAction#targets
   */
  readonly targets?: { [key: string]: string };

  /**
   * @schema FisExperimentAction#startAfter
   */
  readonly startAfter?: string[];

  /**
   * @schema FisExperimentAction#state
   */
  readonly state?: FisExperimentActionState;

}

/**
 * Converts an object of type 'FisExperimentAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentAction(obj: FisExperimentAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionId': obj.actionId,
    'description': obj.description,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'targets': ((obj.targets) === undefined) ? undefined : (Object.entries(obj.targets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'startAfter': obj.startAfter?.map(y => y),
    'state': toJson_FisExperimentActionState(obj.state),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentStopCondition
 */
export interface FisExperimentStopCondition {
  /**
   * @schema FisExperimentStopCondition#source
   */
  readonly source?: string;

  /**
   * @schema FisExperimentStopCondition#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'FisExperimentStopCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentStopCondition(obj: FisExperimentStopCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTemplateTargetFilter
 */
export interface FisExperimentTemplateTargetFilter {
  /**
   * @schema FisExperimentTemplateTargetFilter#path
   */
  readonly path?: string;

  /**
   * @schema FisExperimentTemplateTargetFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'FisExperimentTemplateTargetFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTemplateTargetFilter(obj: FisExperimentTemplateTargetFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentTargetFilter
 */
export interface FisExperimentTargetFilter {
  /**
   * @schema FisExperimentTargetFilter#path
   */
  readonly path?: string;

  /**
   * @schema FisExperimentTargetFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'FisExperimentTargetFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentTargetFilter(obj: FisExperimentTargetFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FisExperimentActionState
 */
export interface FisExperimentActionState {
  /**
   * @schema FisExperimentActionState#status
   */
  readonly status?: string;

  /**
   * @schema FisExperimentActionState#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'FisExperimentActionState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FisExperimentActionState(obj: FisExperimentActionState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
