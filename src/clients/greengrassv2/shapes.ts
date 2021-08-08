/**
 * @schema GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest
 */
export interface GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest {
  /**
   * @schema GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest#entries
   */
  readonly entries?: GreengrassV2AssociateClientDeviceWithCoreDeviceEntry[];

  /**
   * @schema GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

}

/**
 * Converts an object of type 'GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest(obj: GreengrassV2BatchAssociateClientDeviceWithCoreDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entries': obj.entries?.map(y => toJson_GreengrassV2AssociateClientDeviceWithCoreDeviceEntry(y)),
    'coreDeviceThingName': obj.coreDeviceThingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2BatchAssociateClientDeviceWithCoreDeviceResponse
 */
export interface GreengrassV2BatchAssociateClientDeviceWithCoreDeviceResponse {
  /**
   * @schema GreengrassV2BatchAssociateClientDeviceWithCoreDeviceResponse#errorEntries
   */
  readonly errorEntries?: GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry[];

}

/**
 * Converts an object of type 'GreengrassV2BatchAssociateClientDeviceWithCoreDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2BatchAssociateClientDeviceWithCoreDeviceResponse(obj: GreengrassV2BatchAssociateClientDeviceWithCoreDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest
 */
export interface GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest {
  /**
   * @schema GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest#entries
   */
  readonly entries?: GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry[];

  /**
   * @schema GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

}

/**
 * Converts an object of type 'GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest(obj: GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entries': obj.entries?.map(y => toJson_GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry(y)),
    'coreDeviceThingName': obj.coreDeviceThingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceResponse
 */
export interface GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceResponse {
  /**
   * @schema GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceResponse#errorEntries
   */
  readonly errorEntries?: GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry[];

}

/**
 * Converts an object of type 'GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceResponse(obj: GreengrassV2BatchDisassociateClientDeviceFromCoreDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CancelDeploymentRequest
 */
export interface GreengrassV2CancelDeploymentRequest {
  /**
   * @schema GreengrassV2CancelDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

}

/**
 * Converts an object of type 'GreengrassV2CancelDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CancelDeploymentRequest(obj: GreengrassV2CancelDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CancelDeploymentResponse
 */
export interface GreengrassV2CancelDeploymentResponse {
  /**
   * @schema GreengrassV2CancelDeploymentResponse#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'GreengrassV2CancelDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CancelDeploymentResponse(obj: GreengrassV2CancelDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CreateComponentVersionRequest
 */
export interface GreengrassV2CreateComponentVersionRequest {
  /**
   * @schema GreengrassV2CreateComponentVersionRequest#inlineRecipe
   */
  readonly inlineRecipe?: any;

  /**
   * @schema GreengrassV2CreateComponentVersionRequest#lambdaFunction
   */
  readonly lambdaFunction?: GreengrassV2LambdaFunctionRecipeSource;

  /**
   * @schema GreengrassV2CreateComponentVersionRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GreengrassV2CreateComponentVersionRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2CreateComponentVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CreateComponentVersionRequest(obj: GreengrassV2CreateComponentVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inlineRecipe': obj.inlineRecipe,
    'lambdaFunction': toJson_GreengrassV2LambdaFunctionRecipeSource(obj.lambdaFunction),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CreateComponentVersionResponse
 */
export interface GreengrassV2CreateComponentVersionResponse {
  /**
   * @schema GreengrassV2CreateComponentVersionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassV2CreateComponentVersionResponse#componentName
   */
  readonly componentName: string;

  /**
   * @schema GreengrassV2CreateComponentVersionResponse#componentVersion
   */
  readonly componentVersion: string;

  /**
   * @schema GreengrassV2CreateComponentVersionResponse#creationTimestamp
   */
  readonly creationTimestamp: string;

  /**
   * @schema GreengrassV2CreateComponentVersionResponse#status
   */
  readonly status: GreengrassV2CloudComponentStatus;

}

/**
 * Converts an object of type 'GreengrassV2CreateComponentVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CreateComponentVersionResponse(obj: GreengrassV2CreateComponentVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'creationTimestamp': obj.creationTimestamp,
    'status': toJson_GreengrassV2CloudComponentStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CreateDeploymentRequest
 */
export interface GreengrassV2CreateDeploymentRequest {
  /**
   * @schema GreengrassV2CreateDeploymentRequest#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema GreengrassV2CreateDeploymentRequest#deploymentName
   */
  readonly deploymentName?: string;

  /**
   * @schema GreengrassV2CreateDeploymentRequest#components
   */
  readonly components?: { [key: string]: GreengrassV2ComponentDeploymentSpecification };

  /**
   * @schema GreengrassV2CreateDeploymentRequest#iotJobConfiguration
   */
  readonly iotJobConfiguration?: GreengrassV2DeploymentIoTJobConfiguration;

  /**
   * @schema GreengrassV2CreateDeploymentRequest#deploymentPolicies
   */
  readonly deploymentPolicies?: GreengrassV2DeploymentPolicies;

  /**
   * @schema GreengrassV2CreateDeploymentRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema GreengrassV2CreateDeploymentRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2CreateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CreateDeploymentRequest(obj: GreengrassV2CreateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'deploymentName': obj.deploymentName,
    'components': ((obj.components) === undefined) ? undefined : (Object.entries(obj.components).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GreengrassV2ComponentDeploymentSpecification(i[1]) }), {})),
    'iotJobConfiguration': toJson_GreengrassV2DeploymentIoTJobConfiguration(obj.iotJobConfiguration),
    'deploymentPolicies': toJson_GreengrassV2DeploymentPolicies(obj.deploymentPolicies),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CreateDeploymentResponse
 */
export interface GreengrassV2CreateDeploymentResponse {
  /**
   * @schema GreengrassV2CreateDeploymentResponse#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassV2CreateDeploymentResponse#iotJobId
   */
  readonly iotJobId?: string;

  /**
   * @schema GreengrassV2CreateDeploymentResponse#iotJobArn
   */
  readonly iotJobArn?: string;

}

/**
 * Converts an object of type 'GreengrassV2CreateDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CreateDeploymentResponse(obj: GreengrassV2CreateDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'iotJobId': obj.iotJobId,
    'iotJobArn': obj.iotJobArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DeleteComponentRequest
 */
export interface GreengrassV2DeleteComponentRequest {
  /**
   * @schema GreengrassV2DeleteComponentRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'GreengrassV2DeleteComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DeleteComponentRequest(obj: GreengrassV2DeleteComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DeleteCoreDeviceRequest
 */
export interface GreengrassV2DeleteCoreDeviceRequest {
  /**
   * @schema GreengrassV2DeleteCoreDeviceRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

}

/**
 * Converts an object of type 'GreengrassV2DeleteCoreDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DeleteCoreDeviceRequest(obj: GreengrassV2DeleteCoreDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DescribeComponentRequest
 */
export interface GreengrassV2DescribeComponentRequest {
  /**
   * @schema GreengrassV2DescribeComponentRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'GreengrassV2DescribeComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DescribeComponentRequest(obj: GreengrassV2DescribeComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DescribeComponentResponse
 */
export interface GreengrassV2DescribeComponentResponse {
  /**
   * @schema GreengrassV2DescribeComponentResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassV2DescribeComponentResponse#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2DescribeComponentResponse#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2DescribeComponentResponse#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassV2DescribeComponentResponse#publisher
   */
  readonly publisher?: string;

  /**
   * @schema GreengrassV2DescribeComponentResponse#description
   */
  readonly description?: string;

  /**
   * @schema GreengrassV2DescribeComponentResponse#status
   */
  readonly status?: GreengrassV2CloudComponentStatus;

  /**
   * @schema GreengrassV2DescribeComponentResponse#platforms
   */
  readonly platforms?: GreengrassV2ComponentPlatform[];

  /**
   * @schema GreengrassV2DescribeComponentResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2DescribeComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DescribeComponentResponse(obj: GreengrassV2DescribeComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'creationTimestamp': obj.creationTimestamp,
    'publisher': obj.publisher,
    'description': obj.description,
    'status': toJson_GreengrassV2CloudComponentStatus(obj.status),
    'platforms': obj.platforms?.map(y => toJson_GreengrassV2ComponentPlatform(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetComponentRequest
 */
export interface GreengrassV2GetComponentRequest {
  /**
   * @schema GreengrassV2GetComponentRequest#recipeOutputFormat
   */
  readonly recipeOutputFormat?: string;

  /**
   * @schema GreengrassV2GetComponentRequest#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'GreengrassV2GetComponentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetComponentRequest(obj: GreengrassV2GetComponentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recipeOutputFormat': obj.recipeOutputFormat,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetComponentResponse
 */
export interface GreengrassV2GetComponentResponse {
  /**
   * @schema GreengrassV2GetComponentResponse#recipeOutputFormat
   */
  readonly recipeOutputFormat: string;

  /**
   * @schema GreengrassV2GetComponentResponse#recipe
   */
  readonly recipe: any;

  /**
   * @schema GreengrassV2GetComponentResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2GetComponentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetComponentResponse(obj: GreengrassV2GetComponentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'recipeOutputFormat': obj.recipeOutputFormat,
    'recipe': obj.recipe,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetComponentVersionArtifactRequest
 */
export interface GreengrassV2GetComponentVersionArtifactRequest {
  /**
   * @schema GreengrassV2GetComponentVersionArtifactRequest#arn
   */
  readonly arn: string;

  /**
   * @schema GreengrassV2GetComponentVersionArtifactRequest#artifactName
   */
  readonly artifactName: string;

}

/**
 * Converts an object of type 'GreengrassV2GetComponentVersionArtifactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetComponentVersionArtifactRequest(obj: GreengrassV2GetComponentVersionArtifactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'artifactName': obj.artifactName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetComponentVersionArtifactResponse
 */
export interface GreengrassV2GetComponentVersionArtifactResponse {
  /**
   * @schema GreengrassV2GetComponentVersionArtifactResponse#preSignedUrl
   */
  readonly preSignedUrl: string;

}

/**
 * Converts an object of type 'GreengrassV2GetComponentVersionArtifactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetComponentVersionArtifactResponse(obj: GreengrassV2GetComponentVersionArtifactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'preSignedUrl': obj.preSignedUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetCoreDeviceRequest
 */
export interface GreengrassV2GetCoreDeviceRequest {
  /**
   * @schema GreengrassV2GetCoreDeviceRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

}

/**
 * Converts an object of type 'GreengrassV2GetCoreDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetCoreDeviceRequest(obj: GreengrassV2GetCoreDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetCoreDeviceResponse
 */
export interface GreengrassV2GetCoreDeviceResponse {
  /**
   * @schema GreengrassV2GetCoreDeviceResponse#coreDeviceThingName
   */
  readonly coreDeviceThingName?: string;

  /**
   * @schema GreengrassV2GetCoreDeviceResponse#coreVersion
   */
  readonly coreVersion?: string;

  /**
   * @schema GreengrassV2GetCoreDeviceResponse#platform
   */
  readonly platform?: string;

  /**
   * @schema GreengrassV2GetCoreDeviceResponse#architecture
   */
  readonly architecture?: string;

  /**
   * @schema GreengrassV2GetCoreDeviceResponse#status
   */
  readonly status?: string;

  /**
   * @schema GreengrassV2GetCoreDeviceResponse#lastStatusUpdateTimestamp
   */
  readonly lastStatusUpdateTimestamp?: string;

  /**
   * @schema GreengrassV2GetCoreDeviceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2GetCoreDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetCoreDeviceResponse(obj: GreengrassV2GetCoreDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
    'coreVersion': obj.coreVersion,
    'platform': obj.platform,
    'architecture': obj.architecture,
    'status': obj.status,
    'lastStatusUpdateTimestamp': obj.lastStatusUpdateTimestamp,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetDeploymentRequest
 */
export interface GreengrassV2GetDeploymentRequest {
  /**
   * @schema GreengrassV2GetDeploymentRequest#deploymentId
   */
  readonly deploymentId: string;

}

/**
 * Converts an object of type 'GreengrassV2GetDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetDeploymentRequest(obj: GreengrassV2GetDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2GetDeploymentResponse
 */
export interface GreengrassV2GetDeploymentResponse {
  /**
   * @schema GreengrassV2GetDeploymentResponse#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#deploymentName
   */
  readonly deploymentName?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#deploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#iotJobId
   */
  readonly iotJobId?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#iotJobArn
   */
  readonly iotJobArn?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#components
   */
  readonly components?: { [key: string]: GreengrassV2ComponentDeploymentSpecification };

  /**
   * @schema GreengrassV2GetDeploymentResponse#deploymentPolicies
   */
  readonly deploymentPolicies?: GreengrassV2DeploymentPolicies;

  /**
   * @schema GreengrassV2GetDeploymentResponse#iotJobConfiguration
   */
  readonly iotJobConfiguration?: GreengrassV2DeploymentIoTJobConfiguration;

  /**
   * @schema GreengrassV2GetDeploymentResponse#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassV2GetDeploymentResponse#isLatestForTarget
   */
  readonly isLatestForTarget?: boolean;

  /**
   * @schema GreengrassV2GetDeploymentResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2GetDeploymentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2GetDeploymentResponse(obj: GreengrassV2GetDeploymentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'revisionId': obj.revisionId,
    'deploymentId': obj.deploymentId,
    'deploymentName': obj.deploymentName,
    'deploymentStatus': obj.deploymentStatus,
    'iotJobId': obj.iotJobId,
    'iotJobArn': obj.iotJobArn,
    'components': ((obj.components) === undefined) ? undefined : (Object.entries(obj.components).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GreengrassV2ComponentDeploymentSpecification(i[1]) }), {})),
    'deploymentPolicies': toJson_GreengrassV2DeploymentPolicies(obj.deploymentPolicies),
    'iotJobConfiguration': toJson_GreengrassV2DeploymentIoTJobConfiguration(obj.iotJobConfiguration),
    'creationTimestamp': obj.creationTimestamp,
    'isLatestForTarget': obj.isLatestForTarget,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest
 */
export interface GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest {
  /**
   * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

  /**
   * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest(obj: GreengrassV2ListClientDevicesAssociatedWithCoreDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse
 */
export interface GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse {
  /**
   * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse#associatedClientDevices
   */
  readonly associatedClientDevices?: GreengrassV2AssociatedClientDevice[];

  /**
   * @schema GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse(obj: GreengrassV2ListClientDevicesAssociatedWithCoreDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'associatedClientDevices': obj.associatedClientDevices?.map(y => toJson_GreengrassV2AssociatedClientDevice(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListComponentVersionsRequest
 */
export interface GreengrassV2ListComponentVersionsRequest {
  /**
   * @schema GreengrassV2ListComponentVersionsRequest#arn
   */
  readonly arn: string;

  /**
   * @schema GreengrassV2ListComponentVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListComponentVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListComponentVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListComponentVersionsRequest(obj: GreengrassV2ListComponentVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListComponentVersionsResponse
 */
export interface GreengrassV2ListComponentVersionsResponse {
  /**
   * @schema GreengrassV2ListComponentVersionsResponse#componentVersions
   */
  readonly componentVersions?: GreengrassV2ComponentVersionListItem[];

  /**
   * @schema GreengrassV2ListComponentVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListComponentVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListComponentVersionsResponse(obj: GreengrassV2ListComponentVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentVersions': obj.componentVersions?.map(y => toJson_GreengrassV2ComponentVersionListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListComponentsRequest
 */
export interface GreengrassV2ListComponentsRequest {
  /**
   * @schema GreengrassV2ListComponentsRequest#scope
   */
  readonly scope?: string;

  /**
   * @schema GreengrassV2ListComponentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListComponentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListComponentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListComponentsRequest(obj: GreengrassV2ListComponentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scope': obj.scope,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListComponentsResponse
 */
export interface GreengrassV2ListComponentsResponse {
  /**
   * @schema GreengrassV2ListComponentsResponse#components
   */
  readonly components?: GreengrassV2Component[];

  /**
   * @schema GreengrassV2ListComponentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListComponentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListComponentsResponse(obj: GreengrassV2ListComponentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'components': obj.components?.map(y => toJson_GreengrassV2Component(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListCoreDevicesRequest
 */
export interface GreengrassV2ListCoreDevicesRequest {
  /**
   * @schema GreengrassV2ListCoreDevicesRequest#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema GreengrassV2ListCoreDevicesRequest#status
   */
  readonly status?: string;

  /**
   * @schema GreengrassV2ListCoreDevicesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListCoreDevicesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListCoreDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListCoreDevicesRequest(obj: GreengrassV2ListCoreDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupArn': obj.thingGroupArn,
    'status': obj.status,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListCoreDevicesResponse
 */
export interface GreengrassV2ListCoreDevicesResponse {
  /**
   * @schema GreengrassV2ListCoreDevicesResponse#coreDevices
   */
  readonly coreDevices?: GreengrassV2CoreDevice[];

  /**
   * @schema GreengrassV2ListCoreDevicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListCoreDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListCoreDevicesResponse(obj: GreengrassV2ListCoreDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDevices': obj.coreDevices?.map(y => toJson_GreengrassV2CoreDevice(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListDeploymentsRequest
 */
export interface GreengrassV2ListDeploymentsRequest {
  /**
   * @schema GreengrassV2ListDeploymentsRequest#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema GreengrassV2ListDeploymentsRequest#historyFilter
   */
  readonly historyFilter?: string;

  /**
   * @schema GreengrassV2ListDeploymentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListDeploymentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListDeploymentsRequest(obj: GreengrassV2ListDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'historyFilter': obj.historyFilter,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListDeploymentsResponse
 */
export interface GreengrassV2ListDeploymentsResponse {
  /**
   * @schema GreengrassV2ListDeploymentsResponse#deployments
   */
  readonly deployments?: GreengrassV2Deployment[];

  /**
   * @schema GreengrassV2ListDeploymentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListDeploymentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListDeploymentsResponse(obj: GreengrassV2ListDeploymentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deployments': obj.deployments?.map(y => toJson_GreengrassV2Deployment(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListEffectiveDeploymentsRequest
 */
export interface GreengrassV2ListEffectiveDeploymentsRequest {
  /**
   * @schema GreengrassV2ListEffectiveDeploymentsRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

  /**
   * @schema GreengrassV2ListEffectiveDeploymentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListEffectiveDeploymentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListEffectiveDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListEffectiveDeploymentsRequest(obj: GreengrassV2ListEffectiveDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListEffectiveDeploymentsResponse
 */
export interface GreengrassV2ListEffectiveDeploymentsResponse {
  /**
   * @schema GreengrassV2ListEffectiveDeploymentsResponse#effectiveDeployments
   */
  readonly effectiveDeployments?: GreengrassV2EffectiveDeployment[];

  /**
   * @schema GreengrassV2ListEffectiveDeploymentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListEffectiveDeploymentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListEffectiveDeploymentsResponse(obj: GreengrassV2ListEffectiveDeploymentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'effectiveDeployments': obj.effectiveDeployments?.map(y => toJson_GreengrassV2EffectiveDeployment(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListInstalledComponentsRequest
 */
export interface GreengrassV2ListInstalledComponentsRequest {
  /**
   * @schema GreengrassV2ListInstalledComponentsRequest#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

  /**
   * @schema GreengrassV2ListInstalledComponentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GreengrassV2ListInstalledComponentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListInstalledComponentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListInstalledComponentsRequest(obj: GreengrassV2ListInstalledComponentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListInstalledComponentsResponse
 */
export interface GreengrassV2ListInstalledComponentsResponse {
  /**
   * @schema GreengrassV2ListInstalledComponentsResponse#installedComponents
   */
  readonly installedComponents?: GreengrassV2InstalledComponent[];

  /**
   * @schema GreengrassV2ListInstalledComponentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'GreengrassV2ListInstalledComponentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListInstalledComponentsResponse(obj: GreengrassV2ListInstalledComponentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'installedComponents': obj.installedComponents?.map(y => toJson_GreengrassV2InstalledComponent(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListTagsForResourceRequest
 */
export interface GreengrassV2ListTagsForResourceRequest {
  /**
   * @schema GreengrassV2ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'GreengrassV2ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListTagsForResourceRequest(obj: GreengrassV2ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ListTagsForResourceResponse
 */
export interface GreengrassV2ListTagsForResourceResponse {
  /**
   * @schema GreengrassV2ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ListTagsForResourceResponse(obj: GreengrassV2ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ResolveComponentCandidatesRequest
 */
export interface GreengrassV2ResolveComponentCandidatesRequest {
  /**
   * @schema GreengrassV2ResolveComponentCandidatesRequest#platform
   */
  readonly platform: GreengrassV2ComponentPlatform;

  /**
   * @schema GreengrassV2ResolveComponentCandidatesRequest#componentCandidates
   */
  readonly componentCandidates: GreengrassV2ComponentCandidate[];

}

/**
 * Converts an object of type 'GreengrassV2ResolveComponentCandidatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ResolveComponentCandidatesRequest(obj: GreengrassV2ResolveComponentCandidatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'platform': toJson_GreengrassV2ComponentPlatform(obj.platform),
    'componentCandidates': obj.componentCandidates?.map(y => toJson_GreengrassV2ComponentCandidate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ResolveComponentCandidatesResponse
 */
export interface GreengrassV2ResolveComponentCandidatesResponse {
  /**
   * @schema GreengrassV2ResolveComponentCandidatesResponse#resolvedComponentVersions
   */
  readonly resolvedComponentVersions?: GreengrassV2ResolvedComponentVersion[];

}

/**
 * Converts an object of type 'GreengrassV2ResolveComponentCandidatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ResolveComponentCandidatesResponse(obj: GreengrassV2ResolveComponentCandidatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resolvedComponentVersions': obj.resolvedComponentVersions?.map(y => toJson_GreengrassV2ResolvedComponentVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2TagResourceRequest
 */
export interface GreengrassV2TagResourceRequest {
  /**
   * @schema GreengrassV2TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GreengrassV2TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2TagResourceRequest(obj: GreengrassV2TagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema GreengrassV2TagResourceResponse
 */
export interface GreengrassV2TagResourceResponse {
}

/**
 * Converts an object of type 'GreengrassV2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2TagResourceResponse(obj: GreengrassV2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2UntagResourceRequest
 */
export interface GreengrassV2UntagResourceRequest {
  /**
   * @schema GreengrassV2UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GreengrassV2UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'GreengrassV2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2UntagResourceRequest(obj: GreengrassV2UntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema GreengrassV2UntagResourceResponse
 */
export interface GreengrassV2UntagResourceResponse {
}

/**
 * Converts an object of type 'GreengrassV2UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2UntagResourceResponse(obj: GreengrassV2UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2AssociateClientDeviceWithCoreDeviceEntry
 */
export interface GreengrassV2AssociateClientDeviceWithCoreDeviceEntry {
  /**
   * @schema GreengrassV2AssociateClientDeviceWithCoreDeviceEntry#thingName
   */
  readonly thingName: string;

}

/**
 * Converts an object of type 'GreengrassV2AssociateClientDeviceWithCoreDeviceEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2AssociateClientDeviceWithCoreDeviceEntry(obj: GreengrassV2AssociateClientDeviceWithCoreDeviceEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry
 */
export interface GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry {
  /**
   * @schema GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry#thingName
   */
  readonly thingName?: string;

  /**
   * @schema GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry#code
   */
  readonly code?: string;

  /**
   * @schema GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry(obj: GreengrassV2AssociateClientDeviceWithCoreDeviceErrorEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry
 */
export interface GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry {
  /**
   * @schema GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry#thingName
   */
  readonly thingName: string;

}

/**
 * Converts an object of type 'GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry(obj: GreengrassV2DisassociateClientDeviceFromCoreDeviceEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry
 */
export interface GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry {
  /**
   * @schema GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry#thingName
   */
  readonly thingName?: string;

  /**
   * @schema GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry#code
   */
  readonly code?: string;

  /**
   * @schema GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry(obj: GreengrassV2DisassociateClientDeviceFromCoreDeviceErrorEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaFunctionRecipeSource
 */
export interface GreengrassV2LambdaFunctionRecipeSource {
  /**
   * @schema GreengrassV2LambdaFunctionRecipeSource#lambdaArn
   */
  readonly lambdaArn: string;

  /**
   * @schema GreengrassV2LambdaFunctionRecipeSource#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2LambdaFunctionRecipeSource#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2LambdaFunctionRecipeSource#componentPlatforms
   */
  readonly componentPlatforms?: GreengrassV2ComponentPlatform[];

  /**
   * @schema GreengrassV2LambdaFunctionRecipeSource#componentDependencies
   */
  readonly componentDependencies?: { [key: string]: GreengrassV2ComponentDependencyRequirement };

  /**
   * @schema GreengrassV2LambdaFunctionRecipeSource#componentLambdaParameters
   */
  readonly componentLambdaParameters?: GreengrassV2LambdaExecutionParameters;

}

/**
 * Converts an object of type 'GreengrassV2LambdaFunctionRecipeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaFunctionRecipeSource(obj: GreengrassV2LambdaFunctionRecipeSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lambdaArn': obj.lambdaArn,
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'componentPlatforms': obj.componentPlatforms?.map(y => toJson_GreengrassV2ComponentPlatform(y)),
    'componentDependencies': ((obj.componentDependencies) === undefined) ? undefined : (Object.entries(obj.componentDependencies).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_GreengrassV2ComponentDependencyRequirement(i[1]) }), {})),
    'componentLambdaParameters': toJson_GreengrassV2LambdaExecutionParameters(obj.componentLambdaParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CloudComponentStatus
 */
export interface GreengrassV2CloudComponentStatus {
  /**
   * @schema GreengrassV2CloudComponentStatus#componentState
   */
  readonly componentState?: string;

  /**
   * @schema GreengrassV2CloudComponentStatus#message
   */
  readonly message?: string;

  /**
   * @schema GreengrassV2CloudComponentStatus#errors
   */
  readonly errors?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2CloudComponentStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CloudComponentStatus(obj: GreengrassV2CloudComponentStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentState': obj.componentState,
    'message': obj.message,
    'errors': ((obj.errors) === undefined) ? undefined : (Object.entries(obj.errors).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentDeploymentSpecification
 */
export interface GreengrassV2ComponentDeploymentSpecification {
  /**
   * @schema GreengrassV2ComponentDeploymentSpecification#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2ComponentDeploymentSpecification#configurationUpdate
   */
  readonly configurationUpdate?: GreengrassV2ComponentConfigurationUpdate;

  /**
   * @schema GreengrassV2ComponentDeploymentSpecification#runWith
   */
  readonly runWith?: GreengrassV2ComponentRunWith;

}

/**
 * Converts an object of type 'GreengrassV2ComponentDeploymentSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentDeploymentSpecification(obj: GreengrassV2ComponentDeploymentSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentVersion': obj.componentVersion,
    'configurationUpdate': toJson_GreengrassV2ComponentConfigurationUpdate(obj.configurationUpdate),
    'runWith': toJson_GreengrassV2ComponentRunWith(obj.runWith),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DeploymentIoTJobConfiguration
 */
export interface GreengrassV2DeploymentIoTJobConfiguration {
  /**
   * @schema GreengrassV2DeploymentIoTJobConfiguration#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: GreengrassV2IoTJobExecutionsRolloutConfig;

  /**
   * @schema GreengrassV2DeploymentIoTJobConfiguration#abortConfig
   */
  readonly abortConfig?: GreengrassV2IoTJobAbortConfig;

  /**
   * @schema GreengrassV2DeploymentIoTJobConfiguration#timeoutConfig
   */
  readonly timeoutConfig?: GreengrassV2IoTJobTimeoutConfig;

}

/**
 * Converts an object of type 'GreengrassV2DeploymentIoTJobConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DeploymentIoTJobConfiguration(obj: GreengrassV2DeploymentIoTJobConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobExecutionsRolloutConfig': toJson_GreengrassV2IoTJobExecutionsRolloutConfig(obj.jobExecutionsRolloutConfig),
    'abortConfig': toJson_GreengrassV2IoTJobAbortConfig(obj.abortConfig),
    'timeoutConfig': toJson_GreengrassV2IoTJobTimeoutConfig(obj.timeoutConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DeploymentPolicies
 */
export interface GreengrassV2DeploymentPolicies {
  /**
   * @schema GreengrassV2DeploymentPolicies#failureHandlingPolicy
   */
  readonly failureHandlingPolicy?: string;

  /**
   * @schema GreengrassV2DeploymentPolicies#componentUpdatePolicy
   */
  readonly componentUpdatePolicy?: GreengrassV2DeploymentComponentUpdatePolicy;

  /**
   * @schema GreengrassV2DeploymentPolicies#configurationValidationPolicy
   */
  readonly configurationValidationPolicy?: GreengrassV2DeploymentConfigurationValidationPolicy;

}

/**
 * Converts an object of type 'GreengrassV2DeploymentPolicies' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DeploymentPolicies(obj: GreengrassV2DeploymentPolicies | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failureHandlingPolicy': obj.failureHandlingPolicy,
    'componentUpdatePolicy': toJson_GreengrassV2DeploymentComponentUpdatePolicy(obj.componentUpdatePolicy),
    'configurationValidationPolicy': toJson_GreengrassV2DeploymentConfigurationValidationPolicy(obj.configurationValidationPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentPlatform
 */
export interface GreengrassV2ComponentPlatform {
  /**
   * @schema GreengrassV2ComponentPlatform#name
   */
  readonly name?: string;

  /**
   * @schema GreengrassV2ComponentPlatform#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2ComponentPlatform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentPlatform(obj: GreengrassV2ComponentPlatform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2AssociatedClientDevice
 */
export interface GreengrassV2AssociatedClientDevice {
  /**
   * @schema GreengrassV2AssociatedClientDevice#thingName
   */
  readonly thingName?: string;

  /**
   * @schema GreengrassV2AssociatedClientDevice#associationTimestamp
   */
  readonly associationTimestamp?: string;

}

/**
 * Converts an object of type 'GreengrassV2AssociatedClientDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2AssociatedClientDevice(obj: GreengrassV2AssociatedClientDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'associationTimestamp': obj.associationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentVersionListItem
 */
export interface GreengrassV2ComponentVersionListItem {
  /**
   * @schema GreengrassV2ComponentVersionListItem#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2ComponentVersionListItem#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2ComponentVersionListItem#arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'GreengrassV2ComponentVersionListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentVersionListItem(obj: GreengrassV2ComponentVersionListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2Component
 */
export interface GreengrassV2Component {
  /**
   * @schema GreengrassV2Component#arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassV2Component#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2Component#latestVersion
   */
  readonly latestVersion?: GreengrassV2ComponentLatestVersion;

}

/**
 * Converts an object of type 'GreengrassV2Component' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2Component(obj: GreengrassV2Component | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'componentName': obj.componentName,
    'latestVersion': toJson_GreengrassV2ComponentLatestVersion(obj.latestVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2CoreDevice
 */
export interface GreengrassV2CoreDevice {
  /**
   * @schema GreengrassV2CoreDevice#coreDeviceThingName
   */
  readonly coreDeviceThingName?: string;

  /**
   * @schema GreengrassV2CoreDevice#status
   */
  readonly status?: string;

  /**
   * @schema GreengrassV2CoreDevice#lastStatusUpdateTimestamp
   */
  readonly lastStatusUpdateTimestamp?: string;

}

/**
 * Converts an object of type 'GreengrassV2CoreDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2CoreDevice(obj: GreengrassV2CoreDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
    'status': obj.status,
    'lastStatusUpdateTimestamp': obj.lastStatusUpdateTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2Deployment
 */
export interface GreengrassV2Deployment {
  /**
   * @schema GreengrassV2Deployment#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema GreengrassV2Deployment#revisionId
   */
  readonly revisionId?: string;

  /**
   * @schema GreengrassV2Deployment#deploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema GreengrassV2Deployment#deploymentName
   */
  readonly deploymentName?: string;

  /**
   * @schema GreengrassV2Deployment#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassV2Deployment#deploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema GreengrassV2Deployment#isLatestForTarget
   */
  readonly isLatestForTarget?: boolean;

}

/**
 * Converts an object of type 'GreengrassV2Deployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2Deployment(obj: GreengrassV2Deployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'revisionId': obj.revisionId,
    'deploymentId': obj.deploymentId,
    'deploymentName': obj.deploymentName,
    'creationTimestamp': obj.creationTimestamp,
    'deploymentStatus': obj.deploymentStatus,
    'isLatestForTarget': obj.isLatestForTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2EffectiveDeployment
 */
export interface GreengrassV2EffectiveDeployment {
  /**
   * @schema GreengrassV2EffectiveDeployment#deploymentId
   */
  readonly deploymentId: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#deploymentName
   */
  readonly deploymentName: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#iotJobId
   */
  readonly iotJobId?: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#iotJobArn
   */
  readonly iotJobArn?: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#description
   */
  readonly description?: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#coreDeviceExecutionStatus
   */
  readonly coreDeviceExecutionStatus: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#reason
   */
  readonly reason?: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#creationTimestamp
   */
  readonly creationTimestamp: string;

  /**
   * @schema GreengrassV2EffectiveDeployment#modifiedTimestamp
   */
  readonly modifiedTimestamp: string;

}

/**
 * Converts an object of type 'GreengrassV2EffectiveDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2EffectiveDeployment(obj: GreengrassV2EffectiveDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentId': obj.deploymentId,
    'deploymentName': obj.deploymentName,
    'iotJobId': obj.iotJobId,
    'iotJobArn': obj.iotJobArn,
    'description': obj.description,
    'targetArn': obj.targetArn,
    'coreDeviceExecutionStatus': obj.coreDeviceExecutionStatus,
    'reason': obj.reason,
    'creationTimestamp': obj.creationTimestamp,
    'modifiedTimestamp': obj.modifiedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2InstalledComponent
 */
export interface GreengrassV2InstalledComponent {
  /**
   * @schema GreengrassV2InstalledComponent#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2InstalledComponent#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2InstalledComponent#lifecycleState
   */
  readonly lifecycleState?: string;

  /**
   * @schema GreengrassV2InstalledComponent#lifecycleStateDetails
   */
  readonly lifecycleStateDetails?: string;

  /**
   * @schema GreengrassV2InstalledComponent#isRoot
   */
  readonly isRoot?: boolean;

}

/**
 * Converts an object of type 'GreengrassV2InstalledComponent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2InstalledComponent(obj: GreengrassV2InstalledComponent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'lifecycleState': obj.lifecycleState,
    'lifecycleStateDetails': obj.lifecycleStateDetails,
    'isRoot': obj.isRoot,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentCandidate
 */
export interface GreengrassV2ComponentCandidate {
  /**
   * @schema GreengrassV2ComponentCandidate#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2ComponentCandidate#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2ComponentCandidate#versionRequirements
   */
  readonly versionRequirements?: { [key: string]: string };

}

/**
 * Converts an object of type 'GreengrassV2ComponentCandidate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentCandidate(obj: GreengrassV2ComponentCandidate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'versionRequirements': ((obj.versionRequirements) === undefined) ? undefined : (Object.entries(obj.versionRequirements).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ResolvedComponentVersion
 */
export interface GreengrassV2ResolvedComponentVersion {
  /**
   * @schema GreengrassV2ResolvedComponentVersion#arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassV2ResolvedComponentVersion#componentName
   */
  readonly componentName?: string;

  /**
   * @schema GreengrassV2ResolvedComponentVersion#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2ResolvedComponentVersion#recipe
   */
  readonly recipe?: any;

}

/**
 * Converts an object of type 'GreengrassV2ResolvedComponentVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ResolvedComponentVersion(obj: GreengrassV2ResolvedComponentVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'componentName': obj.componentName,
    'componentVersion': obj.componentVersion,
    'recipe': obj.recipe,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentDependencyRequirement
 */
export interface GreengrassV2ComponentDependencyRequirement {
  /**
   * @schema GreengrassV2ComponentDependencyRequirement#versionRequirement
   */
  readonly versionRequirement?: string;

  /**
   * @schema GreengrassV2ComponentDependencyRequirement#dependencyType
   */
  readonly dependencyType?: string;

}

/**
 * Converts an object of type 'GreengrassV2ComponentDependencyRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentDependencyRequirement(obj: GreengrassV2ComponentDependencyRequirement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionRequirement': obj.versionRequirement,
    'dependencyType': obj.dependencyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaExecutionParameters
 */
export interface GreengrassV2LambdaExecutionParameters {
  /**
   * @schema GreengrassV2LambdaExecutionParameters#eventSources
   */
  readonly eventSources?: GreengrassV2LambdaEventSource[];

  /**
   * @schema GreengrassV2LambdaExecutionParameters#maxQueueSize
   */
  readonly maxQueueSize?: number;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#maxInstancesCount
   */
  readonly maxInstancesCount?: number;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#maxIdleTimeInSeconds
   */
  readonly maxIdleTimeInSeconds?: number;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#timeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#statusTimeoutInSeconds
   */
  readonly statusTimeoutInSeconds?: number;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#pinned
   */
  readonly pinned?: boolean;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#inputPayloadEncodingType
   */
  readonly inputPayloadEncodingType?: string;

  /**
   * @schema GreengrassV2LambdaExecutionParameters#execArgs
   */
  readonly execArgs?: string[];

  /**
   * @schema GreengrassV2LambdaExecutionParameters#environmentVariables
   */
  readonly environmentVariables?: { [key: string]: string };

  /**
   * @schema GreengrassV2LambdaExecutionParameters#linuxProcessParams
   */
  readonly linuxProcessParams?: GreengrassV2LambdaLinuxProcessParams;

}

/**
 * Converts an object of type 'GreengrassV2LambdaExecutionParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaExecutionParameters(obj: GreengrassV2LambdaExecutionParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventSources': obj.eventSources?.map(y => toJson_GreengrassV2LambdaEventSource(y)),
    'maxQueueSize': obj.maxQueueSize,
    'maxInstancesCount': obj.maxInstancesCount,
    'maxIdleTimeInSeconds': obj.maxIdleTimeInSeconds,
    'timeoutInSeconds': obj.timeoutInSeconds,
    'statusTimeoutInSeconds': obj.statusTimeoutInSeconds,
    'pinned': obj.pinned,
    'inputPayloadEncodingType': obj.inputPayloadEncodingType,
    'execArgs': obj.execArgs?.map(y => y),
    'environmentVariables': ((obj.environmentVariables) === undefined) ? undefined : (Object.entries(obj.environmentVariables).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'linuxProcessParams': toJson_GreengrassV2LambdaLinuxProcessParams(obj.linuxProcessParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentConfigurationUpdate
 */
export interface GreengrassV2ComponentConfigurationUpdate {
  /**
   * @schema GreengrassV2ComponentConfigurationUpdate#merge
   */
  readonly merge?: string;

  /**
   * @schema GreengrassV2ComponentConfigurationUpdate#reset
   */
  readonly reset?: string[];

}

/**
 * Converts an object of type 'GreengrassV2ComponentConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentConfigurationUpdate(obj: GreengrassV2ComponentConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'merge': obj.merge,
    'reset': obj.reset?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentRunWith
 */
export interface GreengrassV2ComponentRunWith {
  /**
   * @schema GreengrassV2ComponentRunWith#posixUser
   */
  readonly posixUser?: string;

  /**
   * @schema GreengrassV2ComponentRunWith#systemResourceLimits
   */
  readonly systemResourceLimits?: GreengrassV2SystemResourceLimits;

}

/**
 * Converts an object of type 'GreengrassV2ComponentRunWith' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentRunWith(obj: GreengrassV2ComponentRunWith | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'posixUser': obj.posixUser,
    'systemResourceLimits': toJson_GreengrassV2SystemResourceLimits(obj.systemResourceLimits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2IoTJobExecutionsRolloutConfig
 */
export interface GreengrassV2IoTJobExecutionsRolloutConfig {
  /**
   * @schema GreengrassV2IoTJobExecutionsRolloutConfig#exponentialRate
   */
  readonly exponentialRate?: GreengrassV2IoTJobExponentialRolloutRate;

  /**
   * @schema GreengrassV2IoTJobExecutionsRolloutConfig#maximumPerMinute
   */
  readonly maximumPerMinute?: number;

}

/**
 * Converts an object of type 'GreengrassV2IoTJobExecutionsRolloutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2IoTJobExecutionsRolloutConfig(obj: GreengrassV2IoTJobExecutionsRolloutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exponentialRate': toJson_GreengrassV2IoTJobExponentialRolloutRate(obj.exponentialRate),
    'maximumPerMinute': obj.maximumPerMinute,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2IoTJobAbortConfig
 */
export interface GreengrassV2IoTJobAbortConfig {
  /**
   * @schema GreengrassV2IoTJobAbortConfig#criteriaList
   */
  readonly criteriaList: GreengrassV2IoTJobAbortCriteria[];

}

/**
 * Converts an object of type 'GreengrassV2IoTJobAbortConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2IoTJobAbortConfig(obj: GreengrassV2IoTJobAbortConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'criteriaList': obj.criteriaList?.map(y => toJson_GreengrassV2IoTJobAbortCriteria(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2IoTJobTimeoutConfig
 */
export interface GreengrassV2IoTJobTimeoutConfig {
  /**
   * @schema GreengrassV2IoTJobTimeoutConfig#inProgressTimeoutInMinutes
   */
  readonly inProgressTimeoutInMinutes?: number;

}

/**
 * Converts an object of type 'GreengrassV2IoTJobTimeoutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2IoTJobTimeoutConfig(obj: GreengrassV2IoTJobTimeoutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inProgressTimeoutInMinutes': obj.inProgressTimeoutInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DeploymentComponentUpdatePolicy
 */
export interface GreengrassV2DeploymentComponentUpdatePolicy {
  /**
   * @schema GreengrassV2DeploymentComponentUpdatePolicy#timeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema GreengrassV2DeploymentComponentUpdatePolicy#action
   */
  readonly action?: string;

}

/**
 * Converts an object of type 'GreengrassV2DeploymentComponentUpdatePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DeploymentComponentUpdatePolicy(obj: GreengrassV2DeploymentComponentUpdatePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutInSeconds': obj.timeoutInSeconds,
    'action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2DeploymentConfigurationValidationPolicy
 */
export interface GreengrassV2DeploymentConfigurationValidationPolicy {
  /**
   * @schema GreengrassV2DeploymentConfigurationValidationPolicy#timeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

}

/**
 * Converts an object of type 'GreengrassV2DeploymentConfigurationValidationPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2DeploymentConfigurationValidationPolicy(obj: GreengrassV2DeploymentConfigurationValidationPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeoutInSeconds': obj.timeoutInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2ComponentLatestVersion
 */
export interface GreengrassV2ComponentLatestVersion {
  /**
   * @schema GreengrassV2ComponentLatestVersion#arn
   */
  readonly arn?: string;

  /**
   * @schema GreengrassV2ComponentLatestVersion#componentVersion
   */
  readonly componentVersion?: string;

  /**
   * @schema GreengrassV2ComponentLatestVersion#creationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema GreengrassV2ComponentLatestVersion#description
   */
  readonly description?: string;

  /**
   * @schema GreengrassV2ComponentLatestVersion#publisher
   */
  readonly publisher?: string;

  /**
   * @schema GreengrassV2ComponentLatestVersion#platforms
   */
  readonly platforms?: GreengrassV2ComponentPlatform[];

}

/**
 * Converts an object of type 'GreengrassV2ComponentLatestVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2ComponentLatestVersion(obj: GreengrassV2ComponentLatestVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'componentVersion': obj.componentVersion,
    'creationTimestamp': obj.creationTimestamp,
    'description': obj.description,
    'publisher': obj.publisher,
    'platforms': obj.platforms?.map(y => toJson_GreengrassV2ComponentPlatform(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaEventSource
 */
export interface GreengrassV2LambdaEventSource {
  /**
   * @schema GreengrassV2LambdaEventSource#topic
   */
  readonly topic: string;

  /**
   * @schema GreengrassV2LambdaEventSource#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'GreengrassV2LambdaEventSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaEventSource(obj: GreengrassV2LambdaEventSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topic': obj.topic,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaLinuxProcessParams
 */
export interface GreengrassV2LambdaLinuxProcessParams {
  /**
   * @schema GreengrassV2LambdaLinuxProcessParams#isolationMode
   */
  readonly isolationMode?: string;

  /**
   * @schema GreengrassV2LambdaLinuxProcessParams#containerParams
   */
  readonly containerParams?: GreengrassV2LambdaContainerParams;

}

/**
 * Converts an object of type 'GreengrassV2LambdaLinuxProcessParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaLinuxProcessParams(obj: GreengrassV2LambdaLinuxProcessParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isolationMode': obj.isolationMode,
    'containerParams': toJson_GreengrassV2LambdaContainerParams(obj.containerParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2SystemResourceLimits
 */
export interface GreengrassV2SystemResourceLimits {
  /**
   * @schema GreengrassV2SystemResourceLimits#memory
   */
  readonly memory?: number;

  /**
   * @schema GreengrassV2SystemResourceLimits#cpus
   */
  readonly cpus?: number;

}

/**
 * Converts an object of type 'GreengrassV2SystemResourceLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2SystemResourceLimits(obj: GreengrassV2SystemResourceLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memory': obj.memory,
    'cpus': obj.cpus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2IoTJobExponentialRolloutRate
 */
export interface GreengrassV2IoTJobExponentialRolloutRate {
  /**
   * @schema GreengrassV2IoTJobExponentialRolloutRate#baseRatePerMinute
   */
  readonly baseRatePerMinute: number;

  /**
   * @schema GreengrassV2IoTJobExponentialRolloutRate#incrementFactor
   */
  readonly incrementFactor: number;

  /**
   * @schema GreengrassV2IoTJobExponentialRolloutRate#rateIncreaseCriteria
   */
  readonly rateIncreaseCriteria: GreengrassV2IoTJobRateIncreaseCriteria;

}

/**
 * Converts an object of type 'GreengrassV2IoTJobExponentialRolloutRate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2IoTJobExponentialRolloutRate(obj: GreengrassV2IoTJobExponentialRolloutRate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseRatePerMinute': obj.baseRatePerMinute,
    'incrementFactor': obj.incrementFactor,
    'rateIncreaseCriteria': toJson_GreengrassV2IoTJobRateIncreaseCriteria(obj.rateIncreaseCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2IoTJobAbortCriteria
 */
export interface GreengrassV2IoTJobAbortCriteria {
  /**
   * @schema GreengrassV2IoTJobAbortCriteria#failureType
   */
  readonly failureType: string;

  /**
   * @schema GreengrassV2IoTJobAbortCriteria#action
   */
  readonly action: string;

  /**
   * @schema GreengrassV2IoTJobAbortCriteria#thresholdPercentage
   */
  readonly thresholdPercentage: number;

  /**
   * @schema GreengrassV2IoTJobAbortCriteria#minNumberOfExecutedThings
   */
  readonly minNumberOfExecutedThings: number;

}

/**
 * Converts an object of type 'GreengrassV2IoTJobAbortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2IoTJobAbortCriteria(obj: GreengrassV2IoTJobAbortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failureType': obj.failureType,
    'action': obj.action,
    'thresholdPercentage': obj.thresholdPercentage,
    'minNumberOfExecutedThings': obj.minNumberOfExecutedThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaContainerParams
 */
export interface GreengrassV2LambdaContainerParams {
  /**
   * @schema GreengrassV2LambdaContainerParams#memorySizeInKB
   */
  readonly memorySizeInKb?: number;

  /**
   * @schema GreengrassV2LambdaContainerParams#mountROSysfs
   */
  readonly mountRoSysfs?: boolean;

  /**
   * @schema GreengrassV2LambdaContainerParams#volumes
   */
  readonly volumes?: GreengrassV2LambdaVolumeMount[];

  /**
   * @schema GreengrassV2LambdaContainerParams#devices
   */
  readonly devices?: GreengrassV2LambdaDeviceMount[];

}

/**
 * Converts an object of type 'GreengrassV2LambdaContainerParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaContainerParams(obj: GreengrassV2LambdaContainerParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memorySizeInKB': obj.memorySizeInKb,
    'mountROSysfs': obj.mountRoSysfs,
    'volumes': obj.volumes?.map(y => toJson_GreengrassV2LambdaVolumeMount(y)),
    'devices': obj.devices?.map(y => toJson_GreengrassV2LambdaDeviceMount(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2IoTJobRateIncreaseCriteria
 */
export interface GreengrassV2IoTJobRateIncreaseCriteria {
  /**
   * @schema GreengrassV2IoTJobRateIncreaseCriteria#numberOfNotifiedThings
   */
  readonly numberOfNotifiedThings?: number;

  /**
   * @schema GreengrassV2IoTJobRateIncreaseCriteria#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

}

/**
 * Converts an object of type 'GreengrassV2IoTJobRateIncreaseCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2IoTJobRateIncreaseCriteria(obj: GreengrassV2IoTJobRateIncreaseCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'numberOfNotifiedThings': obj.numberOfNotifiedThings,
    'numberOfSucceededThings': obj.numberOfSucceededThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaVolumeMount
 */
export interface GreengrassV2LambdaVolumeMount {
  /**
   * @schema GreengrassV2LambdaVolumeMount#sourcePath
   */
  readonly sourcePath: string;

  /**
   * @schema GreengrassV2LambdaVolumeMount#destinationPath
   */
  readonly destinationPath: string;

  /**
   * @schema GreengrassV2LambdaVolumeMount#permission
   */
  readonly permission?: string;

  /**
   * @schema GreengrassV2LambdaVolumeMount#addGroupOwner
   */
  readonly addGroupOwner?: boolean;

}

/**
 * Converts an object of type 'GreengrassV2LambdaVolumeMount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaVolumeMount(obj: GreengrassV2LambdaVolumeMount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourcePath': obj.sourcePath,
    'destinationPath': obj.destinationPath,
    'permission': obj.permission,
    'addGroupOwner': obj.addGroupOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GreengrassV2LambdaDeviceMount
 */
export interface GreengrassV2LambdaDeviceMount {
  /**
   * @schema GreengrassV2LambdaDeviceMount#path
   */
  readonly path: string;

  /**
   * @schema GreengrassV2LambdaDeviceMount#permission
   */
  readonly permission?: string;

  /**
   * @schema GreengrassV2LambdaDeviceMount#addGroupOwner
   */
  readonly addGroupOwner?: boolean;

}

/**
 * Converts an object of type 'GreengrassV2LambdaDeviceMount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GreengrassV2LambdaDeviceMount(obj: GreengrassV2LambdaDeviceMount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
    'permission': obj.permission,
    'addGroupOwner': obj.addGroupOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
