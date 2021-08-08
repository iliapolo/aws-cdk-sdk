/**
 * @schema ProtonAcceptEnvironmentAccountConnectionInput
 */
export interface ProtonAcceptEnvironmentAccountConnectionInput {
  /**
   * @schema ProtonAcceptEnvironmentAccountConnectionInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'ProtonAcceptEnvironmentAccountConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonAcceptEnvironmentAccountConnectionInput(obj: ProtonAcceptEnvironmentAccountConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonAcceptEnvironmentAccountConnectionOutput
 */
export interface ProtonAcceptEnvironmentAccountConnectionOutput {
  /**
   * @schema ProtonAcceptEnvironmentAccountConnectionOutput#environmentAccountConnection
   */
  readonly environmentAccountConnection: ProtonEnvironmentAccountConnection;

}

/**
 * Converts an object of type 'ProtonAcceptEnvironmentAccountConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonAcceptEnvironmentAccountConnectionOutput(obj: ProtonAcceptEnvironmentAccountConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnection': toJson_ProtonEnvironmentAccountConnection(obj.environmentAccountConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCancelEnvironmentDeploymentInput
 */
export interface ProtonCancelEnvironmentDeploymentInput {
  /**
   * @schema ProtonCancelEnvironmentDeploymentInput#environmentName
   */
  readonly environmentName: string;

}

/**
 * Converts an object of type 'ProtonCancelEnvironmentDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCancelEnvironmentDeploymentInput(obj: ProtonCancelEnvironmentDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentName': obj.environmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCancelEnvironmentDeploymentOutput
 */
export interface ProtonCancelEnvironmentDeploymentOutput {
  /**
   * @schema ProtonCancelEnvironmentDeploymentOutput#environment
   */
  readonly environment: ProtonEnvironment;

}

/**
 * Converts an object of type 'ProtonCancelEnvironmentDeploymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCancelEnvironmentDeploymentOutput(obj: ProtonCancelEnvironmentDeploymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_ProtonEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCancelServiceInstanceDeploymentInput
 */
export interface ProtonCancelServiceInstanceDeploymentInput {
  /**
   * @schema ProtonCancelServiceInstanceDeploymentInput#serviceInstanceName
   */
  readonly serviceInstanceName: string;

  /**
   * @schema ProtonCancelServiceInstanceDeploymentInput#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'ProtonCancelServiceInstanceDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCancelServiceInstanceDeploymentInput(obj: ProtonCancelServiceInstanceDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceInstanceName': obj.serviceInstanceName,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCancelServiceInstanceDeploymentOutput
 */
export interface ProtonCancelServiceInstanceDeploymentOutput {
  /**
   * @schema ProtonCancelServiceInstanceDeploymentOutput#serviceInstance
   */
  readonly serviceInstance: ProtonServiceInstance;

}

/**
 * Converts an object of type 'ProtonCancelServiceInstanceDeploymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCancelServiceInstanceDeploymentOutput(obj: ProtonCancelServiceInstanceDeploymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceInstance': toJson_ProtonServiceInstance(obj.serviceInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCancelServicePipelineDeploymentInput
 */
export interface ProtonCancelServicePipelineDeploymentInput {
  /**
   * @schema ProtonCancelServicePipelineDeploymentInput#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'ProtonCancelServicePipelineDeploymentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCancelServicePipelineDeploymentInput(obj: ProtonCancelServicePipelineDeploymentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCancelServicePipelineDeploymentOutput
 */
export interface ProtonCancelServicePipelineDeploymentOutput {
  /**
   * @schema ProtonCancelServicePipelineDeploymentOutput#pipeline
   */
  readonly pipeline: ProtonServicePipeline;

}

/**
 * Converts an object of type 'ProtonCancelServicePipelineDeploymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCancelServicePipelineDeploymentOutput(obj: ProtonCancelServicePipelineDeploymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_ProtonServicePipeline(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentInput
 */
export interface ProtonCreateEnvironmentInput {
  /**
   * @schema ProtonCreateEnvironmentInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonCreateEnvironmentInput#environmentAccountConnectionId
   */
  readonly environmentAccountConnectionId?: string;

  /**
   * @schema ProtonCreateEnvironmentInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonCreateEnvironmentInput#protonServiceRoleArn
   */
  readonly protonServiceRoleArn?: string;

  /**
   * @schema ProtonCreateEnvironmentInput#spec
   */
  readonly spec: string;

  /**
   * @schema ProtonCreateEnvironmentInput#tags
   */
  readonly tags?: ProtonTag[];

  /**
   * @schema ProtonCreateEnvironmentInput#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonCreateEnvironmentInput#templateMinorVersion
   */
  readonly templateMinorVersion?: string;

  /**
   * @schema ProtonCreateEnvironmentInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentInput(obj: ProtonCreateEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'environmentAccountConnectionId': obj.environmentAccountConnectionId,
    'name': obj.name,
    'protonServiceRoleArn': obj.protonServiceRoleArn,
    'spec': obj.spec,
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentOutput
 */
export interface ProtonCreateEnvironmentOutput {
  /**
   * @schema ProtonCreateEnvironmentOutput#environment
   */
  readonly environment: ProtonEnvironment;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentOutput(obj: ProtonCreateEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_ProtonEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentAccountConnectionInput
 */
export interface ProtonCreateEnvironmentAccountConnectionInput {
  /**
   * @schema ProtonCreateEnvironmentAccountConnectionInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ProtonCreateEnvironmentAccountConnectionInput#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema ProtonCreateEnvironmentAccountConnectionInput#managementAccountId
   */
  readonly managementAccountId: string;

  /**
   * @schema ProtonCreateEnvironmentAccountConnectionInput#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentAccountConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentAccountConnectionInput(obj: ProtonCreateEnvironmentAccountConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'environmentName': obj.environmentName,
    'managementAccountId': obj.managementAccountId,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentAccountConnectionOutput
 */
export interface ProtonCreateEnvironmentAccountConnectionOutput {
  /**
   * @schema ProtonCreateEnvironmentAccountConnectionOutput#environmentAccountConnection
   */
  readonly environmentAccountConnection: ProtonEnvironmentAccountConnection;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentAccountConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentAccountConnectionOutput(obj: ProtonCreateEnvironmentAccountConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnection': toJson_ProtonEnvironmentAccountConnection(obj.environmentAccountConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentTemplateInput
 */
export interface ProtonCreateEnvironmentTemplateInput {
  /**
   * @schema ProtonCreateEnvironmentTemplateInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateInput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateInput#provisioning
   */
  readonly provisioning?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateInput#tags
   */
  readonly tags?: ProtonTag[];

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentTemplateInput(obj: ProtonCreateEnvironmentTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'displayName': obj.displayName,
    'encryptionKey': obj.encryptionKey,
    'name': obj.name,
    'provisioning': obj.provisioning,
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentTemplateOutput
 */
export interface ProtonCreateEnvironmentTemplateOutput {
  /**
   * @schema ProtonCreateEnvironmentTemplateOutput#environmentTemplate
   */
  readonly environmentTemplate: ProtonEnvironmentTemplate;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentTemplateOutput(obj: ProtonCreateEnvironmentTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplate': toJson_ProtonEnvironmentTemplate(obj.environmentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentTemplateVersionInput
 */
export interface ProtonCreateEnvironmentTemplateVersionInput {
  /**
   * @schema ProtonCreateEnvironmentTemplateVersionInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateVersionInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateVersionInput#majorVersion
   */
  readonly majorVersion?: string;

  /**
   * @schema ProtonCreateEnvironmentTemplateVersionInput#source
   */
  readonly source: ProtonTemplateVersionSourceInput;

  /**
   * @schema ProtonCreateEnvironmentTemplateVersionInput#tags
   */
  readonly tags?: ProtonTag[];

  /**
   * @schema ProtonCreateEnvironmentTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentTemplateVersionInput(obj: ProtonCreateEnvironmentTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'description': obj.description,
    'majorVersion': obj.majorVersion,
    'source': toJson_ProtonTemplateVersionSourceInput(obj.source),
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateEnvironmentTemplateVersionOutput
 */
export interface ProtonCreateEnvironmentTemplateVersionOutput {
  /**
   * @schema ProtonCreateEnvironmentTemplateVersionOutput#environmentTemplateVersion
   */
  readonly environmentTemplateVersion: ProtonEnvironmentTemplateVersion;

}

/**
 * Converts an object of type 'ProtonCreateEnvironmentTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateEnvironmentTemplateVersionOutput(obj: ProtonCreateEnvironmentTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplateVersion': toJson_ProtonEnvironmentTemplateVersion(obj.environmentTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateServiceInput
 */
export interface ProtonCreateServiceInput {
  /**
   * @schema ProtonCreateServiceInput#branchName
   */
  readonly branchName?: string;

  /**
   * @schema ProtonCreateServiceInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonCreateServiceInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonCreateServiceInput#repositoryConnectionArn
   */
  readonly repositoryConnectionArn?: string;

  /**
   * @schema ProtonCreateServiceInput#repositoryId
   */
  readonly repositoryId?: string;

  /**
   * @schema ProtonCreateServiceInput#spec
   */
  readonly spec: string;

  /**
   * @schema ProtonCreateServiceInput#tags
   */
  readonly tags?: ProtonTag[];

  /**
   * @schema ProtonCreateServiceInput#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonCreateServiceInput#templateMinorVersion
   */
  readonly templateMinorVersion?: string;

  /**
   * @schema ProtonCreateServiceInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonCreateServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateServiceInput(obj: ProtonCreateServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'branchName': obj.branchName,
    'description': obj.description,
    'name': obj.name,
    'repositoryConnectionArn': obj.repositoryConnectionArn,
    'repositoryId': obj.repositoryId,
    'spec': obj.spec,
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateServiceOutput
 */
export interface ProtonCreateServiceOutput {
  /**
   * @schema ProtonCreateServiceOutput#service
   */
  readonly service: ProtonService;

}

/**
 * Converts an object of type 'ProtonCreateServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateServiceOutput(obj: ProtonCreateServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_ProtonService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateServiceTemplateInput
 */
export interface ProtonCreateServiceTemplateInput {
  /**
   * @schema ProtonCreateServiceTemplateInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonCreateServiceTemplateInput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonCreateServiceTemplateInput#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema ProtonCreateServiceTemplateInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonCreateServiceTemplateInput#pipelineProvisioning
   */
  readonly pipelineProvisioning?: string;

  /**
   * @schema ProtonCreateServiceTemplateInput#tags
   */
  readonly tags?: ProtonTag[];

}

/**
 * Converts an object of type 'ProtonCreateServiceTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateServiceTemplateInput(obj: ProtonCreateServiceTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'displayName': obj.displayName,
    'encryptionKey': obj.encryptionKey,
    'name': obj.name,
    'pipelineProvisioning': obj.pipelineProvisioning,
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateServiceTemplateOutput
 */
export interface ProtonCreateServiceTemplateOutput {
  /**
   * @schema ProtonCreateServiceTemplateOutput#serviceTemplate
   */
  readonly serviceTemplate: ProtonServiceTemplate;

}

/**
 * Converts an object of type 'ProtonCreateServiceTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateServiceTemplateOutput(obj: ProtonCreateServiceTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplate': toJson_ProtonServiceTemplate(obj.serviceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateServiceTemplateVersionInput
 */
export interface ProtonCreateServiceTemplateVersionInput {
  /**
   * @schema ProtonCreateServiceTemplateVersionInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ProtonCreateServiceTemplateVersionInput#compatibleEnvironmentTemplates
   */
  readonly compatibleEnvironmentTemplates: ProtonCompatibleEnvironmentTemplateInput[];

  /**
   * @schema ProtonCreateServiceTemplateVersionInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonCreateServiceTemplateVersionInput#majorVersion
   */
  readonly majorVersion?: string;

  /**
   * @schema ProtonCreateServiceTemplateVersionInput#source
   */
  readonly source: ProtonTemplateVersionSourceInput;

  /**
   * @schema ProtonCreateServiceTemplateVersionInput#tags
   */
  readonly tags?: ProtonTag[];

  /**
   * @schema ProtonCreateServiceTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonCreateServiceTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateServiceTemplateVersionInput(obj: ProtonCreateServiceTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'compatibleEnvironmentTemplates': obj.compatibleEnvironmentTemplates?.map(y => toJson_ProtonCompatibleEnvironmentTemplateInput(y)),
    'description': obj.description,
    'majorVersion': obj.majorVersion,
    'source': toJson_ProtonTemplateVersionSourceInput(obj.source),
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCreateServiceTemplateVersionOutput
 */
export interface ProtonCreateServiceTemplateVersionOutput {
  /**
   * @schema ProtonCreateServiceTemplateVersionOutput#serviceTemplateVersion
   */
  readonly serviceTemplateVersion: ProtonServiceTemplateVersion;

}

/**
 * Converts an object of type 'ProtonCreateServiceTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCreateServiceTemplateVersionOutput(obj: ProtonCreateServiceTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplateVersion': toJson_ProtonServiceTemplateVersion(obj.serviceTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentInput
 */
export interface ProtonDeleteEnvironmentInput {
  /**
   * @schema ProtonDeleteEnvironmentInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentInput(obj: ProtonDeleteEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentOutput
 */
export interface ProtonDeleteEnvironmentOutput {
  /**
   * @schema ProtonDeleteEnvironmentOutput#environment
   */
  readonly environment?: ProtonEnvironment;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentOutput(obj: ProtonDeleteEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_ProtonEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentAccountConnectionInput
 */
export interface ProtonDeleteEnvironmentAccountConnectionInput {
  /**
   * @schema ProtonDeleteEnvironmentAccountConnectionInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentAccountConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentAccountConnectionInput(obj: ProtonDeleteEnvironmentAccountConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentAccountConnectionOutput
 */
export interface ProtonDeleteEnvironmentAccountConnectionOutput {
  /**
   * @schema ProtonDeleteEnvironmentAccountConnectionOutput#environmentAccountConnection
   */
  readonly environmentAccountConnection?: ProtonEnvironmentAccountConnection;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentAccountConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentAccountConnectionOutput(obj: ProtonDeleteEnvironmentAccountConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnection': toJson_ProtonEnvironmentAccountConnection(obj.environmentAccountConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentTemplateInput
 */
export interface ProtonDeleteEnvironmentTemplateInput {
  /**
   * @schema ProtonDeleteEnvironmentTemplateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentTemplateInput(obj: ProtonDeleteEnvironmentTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentTemplateOutput
 */
export interface ProtonDeleteEnvironmentTemplateOutput {
  /**
   * @schema ProtonDeleteEnvironmentTemplateOutput#environmentTemplate
   */
  readonly environmentTemplate?: ProtonEnvironmentTemplate;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentTemplateOutput(obj: ProtonDeleteEnvironmentTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplate': toJson_ProtonEnvironmentTemplate(obj.environmentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentTemplateVersionInput
 */
export interface ProtonDeleteEnvironmentTemplateVersionInput {
  /**
   * @schema ProtonDeleteEnvironmentTemplateVersionInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonDeleteEnvironmentTemplateVersionInput#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonDeleteEnvironmentTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentTemplateVersionInput(obj: ProtonDeleteEnvironmentTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteEnvironmentTemplateVersionOutput
 */
export interface ProtonDeleteEnvironmentTemplateVersionOutput {
  /**
   * @schema ProtonDeleteEnvironmentTemplateVersionOutput#environmentTemplateVersion
   */
  readonly environmentTemplateVersion?: ProtonEnvironmentTemplateVersion;

}

/**
 * Converts an object of type 'ProtonDeleteEnvironmentTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteEnvironmentTemplateVersionOutput(obj: ProtonDeleteEnvironmentTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplateVersion': toJson_ProtonEnvironmentTemplateVersion(obj.environmentTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteServiceInput
 */
export interface ProtonDeleteServiceInput {
  /**
   * @schema ProtonDeleteServiceInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonDeleteServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteServiceInput(obj: ProtonDeleteServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteServiceOutput
 */
export interface ProtonDeleteServiceOutput {
  /**
   * @schema ProtonDeleteServiceOutput#service
   */
  readonly service?: ProtonService;

}

/**
 * Converts an object of type 'ProtonDeleteServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteServiceOutput(obj: ProtonDeleteServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_ProtonService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteServiceTemplateInput
 */
export interface ProtonDeleteServiceTemplateInput {
  /**
   * @schema ProtonDeleteServiceTemplateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonDeleteServiceTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteServiceTemplateInput(obj: ProtonDeleteServiceTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteServiceTemplateOutput
 */
export interface ProtonDeleteServiceTemplateOutput {
  /**
   * @schema ProtonDeleteServiceTemplateOutput#serviceTemplate
   */
  readonly serviceTemplate?: ProtonServiceTemplate;

}

/**
 * Converts an object of type 'ProtonDeleteServiceTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteServiceTemplateOutput(obj: ProtonDeleteServiceTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplate': toJson_ProtonServiceTemplate(obj.serviceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteServiceTemplateVersionInput
 */
export interface ProtonDeleteServiceTemplateVersionInput {
  /**
   * @schema ProtonDeleteServiceTemplateVersionInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonDeleteServiceTemplateVersionInput#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonDeleteServiceTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonDeleteServiceTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteServiceTemplateVersionInput(obj: ProtonDeleteServiceTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonDeleteServiceTemplateVersionOutput
 */
export interface ProtonDeleteServiceTemplateVersionOutput {
  /**
   * @schema ProtonDeleteServiceTemplateVersionOutput#serviceTemplateVersion
   */
  readonly serviceTemplateVersion?: ProtonServiceTemplateVersion;

}

/**
 * Converts an object of type 'ProtonDeleteServiceTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonDeleteServiceTemplateVersionOutput(obj: ProtonDeleteServiceTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplateVersion': toJson_ProtonServiceTemplateVersion(obj.serviceTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetAccountSettingsInput
 */
export interface ProtonGetAccountSettingsInput {
}

/**
 * Converts an object of type 'ProtonGetAccountSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetAccountSettingsInput(obj: ProtonGetAccountSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetAccountSettingsOutput
 */
export interface ProtonGetAccountSettingsOutput {
  /**
   * @schema ProtonGetAccountSettingsOutput#accountSettings
   */
  readonly accountSettings?: ProtonAccountSettings;

}

/**
 * Converts an object of type 'ProtonGetAccountSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetAccountSettingsOutput(obj: ProtonGetAccountSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountSettings': toJson_ProtonAccountSettings(obj.accountSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentInput
 */
export interface ProtonGetEnvironmentInput {
  /**
   * @schema ProtonGetEnvironmentInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentInput(obj: ProtonGetEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentOutput
 */
export interface ProtonGetEnvironmentOutput {
  /**
   * @schema ProtonGetEnvironmentOutput#environment
   */
  readonly environment: ProtonEnvironment;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentOutput(obj: ProtonGetEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_ProtonEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentAccountConnectionInput
 */
export interface ProtonGetEnvironmentAccountConnectionInput {
  /**
   * @schema ProtonGetEnvironmentAccountConnectionInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentAccountConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentAccountConnectionInput(obj: ProtonGetEnvironmentAccountConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentAccountConnectionOutput
 */
export interface ProtonGetEnvironmentAccountConnectionOutput {
  /**
   * @schema ProtonGetEnvironmentAccountConnectionOutput#environmentAccountConnection
   */
  readonly environmentAccountConnection: ProtonEnvironmentAccountConnection;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentAccountConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentAccountConnectionOutput(obj: ProtonGetEnvironmentAccountConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnection': toJson_ProtonEnvironmentAccountConnection(obj.environmentAccountConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentTemplateInput
 */
export interface ProtonGetEnvironmentTemplateInput {
  /**
   * @schema ProtonGetEnvironmentTemplateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentTemplateInput(obj: ProtonGetEnvironmentTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentTemplateOutput
 */
export interface ProtonGetEnvironmentTemplateOutput {
  /**
   * @schema ProtonGetEnvironmentTemplateOutput#environmentTemplate
   */
  readonly environmentTemplate: ProtonEnvironmentTemplate;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentTemplateOutput(obj: ProtonGetEnvironmentTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplate': toJson_ProtonEnvironmentTemplate(obj.environmentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentTemplateVersionInput
 */
export interface ProtonGetEnvironmentTemplateVersionInput {
  /**
   * @schema ProtonGetEnvironmentTemplateVersionInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonGetEnvironmentTemplateVersionInput#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonGetEnvironmentTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentTemplateVersionInput(obj: ProtonGetEnvironmentTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetEnvironmentTemplateVersionOutput
 */
export interface ProtonGetEnvironmentTemplateVersionOutput {
  /**
   * @schema ProtonGetEnvironmentTemplateVersionOutput#environmentTemplateVersion
   */
  readonly environmentTemplateVersion: ProtonEnvironmentTemplateVersion;

}

/**
 * Converts an object of type 'ProtonGetEnvironmentTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetEnvironmentTemplateVersionOutput(obj: ProtonGetEnvironmentTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplateVersion': toJson_ProtonEnvironmentTemplateVersion(obj.environmentTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceInput
 */
export interface ProtonGetServiceInput {
  /**
   * @schema ProtonGetServiceInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonGetServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceInput(obj: ProtonGetServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceOutput
 */
export interface ProtonGetServiceOutput {
  /**
   * @schema ProtonGetServiceOutput#service
   */
  readonly service?: ProtonService;

}

/**
 * Converts an object of type 'ProtonGetServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceOutput(obj: ProtonGetServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_ProtonService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceInstanceInput
 */
export interface ProtonGetServiceInstanceInput {
  /**
   * @schema ProtonGetServiceInstanceInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonGetServiceInstanceInput#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'ProtonGetServiceInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceInstanceInput(obj: ProtonGetServiceInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceInstanceOutput
 */
export interface ProtonGetServiceInstanceOutput {
  /**
   * @schema ProtonGetServiceInstanceOutput#serviceInstance
   */
  readonly serviceInstance: ProtonServiceInstance;

}

/**
 * Converts an object of type 'ProtonGetServiceInstanceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceInstanceOutput(obj: ProtonGetServiceInstanceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceInstance': toJson_ProtonServiceInstance(obj.serviceInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceTemplateInput
 */
export interface ProtonGetServiceTemplateInput {
  /**
   * @schema ProtonGetServiceTemplateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonGetServiceTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceTemplateInput(obj: ProtonGetServiceTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceTemplateOutput
 */
export interface ProtonGetServiceTemplateOutput {
  /**
   * @schema ProtonGetServiceTemplateOutput#serviceTemplate
   */
  readonly serviceTemplate: ProtonServiceTemplate;

}

/**
 * Converts an object of type 'ProtonGetServiceTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceTemplateOutput(obj: ProtonGetServiceTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplate': toJson_ProtonServiceTemplate(obj.serviceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceTemplateVersionInput
 */
export interface ProtonGetServiceTemplateVersionInput {
  /**
   * @schema ProtonGetServiceTemplateVersionInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonGetServiceTemplateVersionInput#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonGetServiceTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonGetServiceTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceTemplateVersionInput(obj: ProtonGetServiceTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonGetServiceTemplateVersionOutput
 */
export interface ProtonGetServiceTemplateVersionOutput {
  /**
   * @schema ProtonGetServiceTemplateVersionOutput#serviceTemplateVersion
   */
  readonly serviceTemplateVersion: ProtonServiceTemplateVersion;

}

/**
 * Converts an object of type 'ProtonGetServiceTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonGetServiceTemplateVersionOutput(obj: ProtonGetServiceTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplateVersion': toJson_ProtonServiceTemplateVersion(obj.serviceTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentAccountConnectionsInput
 */
export interface ProtonListEnvironmentAccountConnectionsInput {
  /**
   * @schema ProtonListEnvironmentAccountConnectionsInput#environmentName
   */
  readonly environmentName?: string;

  /**
   * @schema ProtonListEnvironmentAccountConnectionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListEnvironmentAccountConnectionsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListEnvironmentAccountConnectionsInput#requestedBy
   */
  readonly requestedBy: string;

  /**
   * @schema ProtonListEnvironmentAccountConnectionsInput#statuses
   */
  readonly statuses?: string[];

}

/**
 * Converts an object of type 'ProtonListEnvironmentAccountConnectionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentAccountConnectionsInput(obj: ProtonListEnvironmentAccountConnectionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentName': obj.environmentName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'requestedBy': obj.requestedBy,
    'statuses': obj.statuses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentAccountConnectionsOutput
 */
export interface ProtonListEnvironmentAccountConnectionsOutput {
  /**
   * @schema ProtonListEnvironmentAccountConnectionsOutput#environmentAccountConnections
   */
  readonly environmentAccountConnections: ProtonEnvironmentAccountConnectionSummary[];

  /**
   * @schema ProtonListEnvironmentAccountConnectionsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ProtonListEnvironmentAccountConnectionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentAccountConnectionsOutput(obj: ProtonListEnvironmentAccountConnectionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnections': obj.environmentAccountConnections?.map(y => toJson_ProtonEnvironmentAccountConnectionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentTemplateVersionsInput
 */
export interface ProtonListEnvironmentTemplateVersionsInput {
  /**
   * @schema ProtonListEnvironmentTemplateVersionsInput#majorVersion
   */
  readonly majorVersion?: string;

  /**
   * @schema ProtonListEnvironmentTemplateVersionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListEnvironmentTemplateVersionsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListEnvironmentTemplateVersionsInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonListEnvironmentTemplateVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentTemplateVersionsInput(obj: ProtonListEnvironmentTemplateVersionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentTemplateVersionsOutput
 */
export interface ProtonListEnvironmentTemplateVersionsOutput {
  /**
   * @schema ProtonListEnvironmentTemplateVersionsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListEnvironmentTemplateVersionsOutput#templateVersions
   */
  readonly templateVersions: ProtonEnvironmentTemplateVersionSummary[];

}

/**
 * Converts an object of type 'ProtonListEnvironmentTemplateVersionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentTemplateVersionsOutput(obj: ProtonListEnvironmentTemplateVersionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'templateVersions': obj.templateVersions?.map(y => toJson_ProtonEnvironmentTemplateVersionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentTemplatesInput
 */
export interface ProtonListEnvironmentTemplatesInput {
  /**
   * @schema ProtonListEnvironmentTemplatesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListEnvironmentTemplatesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ProtonListEnvironmentTemplatesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentTemplatesInput(obj: ProtonListEnvironmentTemplatesInput | undefined): Record<string, any> | undefined {
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
 * @schema ProtonListEnvironmentTemplatesOutput
 */
export interface ProtonListEnvironmentTemplatesOutput {
  /**
   * @schema ProtonListEnvironmentTemplatesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListEnvironmentTemplatesOutput#templates
   */
  readonly templates: ProtonEnvironmentTemplateSummary[];

}

/**
 * Converts an object of type 'ProtonListEnvironmentTemplatesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentTemplatesOutput(obj: ProtonListEnvironmentTemplatesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'templates': obj.templates?.map(y => toJson_ProtonEnvironmentTemplateSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentsInput
 */
export interface ProtonListEnvironmentsInput {
  /**
   * @schema ProtonListEnvironmentsInput#environmentTemplates
   */
  readonly environmentTemplates?: ProtonEnvironmentTemplateFilter[];

  /**
   * @schema ProtonListEnvironmentsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListEnvironmentsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ProtonListEnvironmentsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentsInput(obj: ProtonListEnvironmentsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplates': obj.environmentTemplates?.map(y => toJson_ProtonEnvironmentTemplateFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListEnvironmentsOutput
 */
export interface ProtonListEnvironmentsOutput {
  /**
   * @schema ProtonListEnvironmentsOutput#environments
   */
  readonly environments: ProtonEnvironmentSummary[];

  /**
   * @schema ProtonListEnvironmentsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ProtonListEnvironmentsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListEnvironmentsOutput(obj: ProtonListEnvironmentsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environments': obj.environments?.map(y => toJson_ProtonEnvironmentSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListServiceInstancesInput
 */
export interface ProtonListServiceInstancesInput {
  /**
   * @schema ProtonListServiceInstancesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListServiceInstancesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListServiceInstancesInput#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'ProtonListServiceInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServiceInstancesInput(obj: ProtonListServiceInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListServiceInstancesOutput
 */
export interface ProtonListServiceInstancesOutput {
  /**
   * @schema ProtonListServiceInstancesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListServiceInstancesOutput#serviceInstances
   */
  readonly serviceInstances: ProtonServiceInstanceSummary[];

}

/**
 * Converts an object of type 'ProtonListServiceInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServiceInstancesOutput(obj: ProtonListServiceInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'serviceInstances': obj.serviceInstances?.map(y => toJson_ProtonServiceInstanceSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListServiceTemplateVersionsInput
 */
export interface ProtonListServiceTemplateVersionsInput {
  /**
   * @schema ProtonListServiceTemplateVersionsInput#majorVersion
   */
  readonly majorVersion?: string;

  /**
   * @schema ProtonListServiceTemplateVersionsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListServiceTemplateVersionsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListServiceTemplateVersionsInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonListServiceTemplateVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServiceTemplateVersionsInput(obj: ProtonListServiceTemplateVersionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListServiceTemplateVersionsOutput
 */
export interface ProtonListServiceTemplateVersionsOutput {
  /**
   * @schema ProtonListServiceTemplateVersionsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListServiceTemplateVersionsOutput#templateVersions
   */
  readonly templateVersions: ProtonServiceTemplateVersionSummary[];

}

/**
 * Converts an object of type 'ProtonListServiceTemplateVersionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServiceTemplateVersionsOutput(obj: ProtonListServiceTemplateVersionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'templateVersions': obj.templateVersions?.map(y => toJson_ProtonServiceTemplateVersionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListServiceTemplatesInput
 */
export interface ProtonListServiceTemplatesInput {
  /**
   * @schema ProtonListServiceTemplatesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListServiceTemplatesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ProtonListServiceTemplatesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServiceTemplatesInput(obj: ProtonListServiceTemplatesInput | undefined): Record<string, any> | undefined {
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
 * @schema ProtonListServiceTemplatesOutput
 */
export interface ProtonListServiceTemplatesOutput {
  /**
   * @schema ProtonListServiceTemplatesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListServiceTemplatesOutput#templates
   */
  readonly templates: ProtonServiceTemplateSummary[];

}

/**
 * Converts an object of type 'ProtonListServiceTemplatesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServiceTemplatesOutput(obj: ProtonListServiceTemplatesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'templates': obj.templates?.map(y => toJson_ProtonServiceTemplateSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListServicesInput
 */
export interface ProtonListServicesInput {
  /**
   * @schema ProtonListServicesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListServicesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ProtonListServicesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServicesInput(obj: ProtonListServicesInput | undefined): Record<string, any> | undefined {
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
 * @schema ProtonListServicesOutput
 */
export interface ProtonListServicesOutput {
  /**
   * @schema ProtonListServicesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListServicesOutput#services
   */
  readonly services: ProtonServiceSummary[];

}

/**
 * Converts an object of type 'ProtonListServicesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListServicesOutput(obj: ProtonListServicesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'services': obj.services?.map(y => toJson_ProtonServiceSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListTagsForResourceInput
 */
export interface ProtonListTagsForResourceInput {
  /**
   * @schema ProtonListTagsForResourceInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ProtonListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'ProtonListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListTagsForResourceInput(obj: ProtonListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonListTagsForResourceOutput
 */
export interface ProtonListTagsForResourceOutput {
  /**
   * @schema ProtonListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ProtonListTagsForResourceOutput#tags
   */
  readonly tags: ProtonTag[];

}

/**
 * Converts an object of type 'ProtonListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonListTagsForResourceOutput(obj: ProtonListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonRejectEnvironmentAccountConnectionInput
 */
export interface ProtonRejectEnvironmentAccountConnectionInput {
  /**
   * @schema ProtonRejectEnvironmentAccountConnectionInput#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'ProtonRejectEnvironmentAccountConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonRejectEnvironmentAccountConnectionInput(obj: ProtonRejectEnvironmentAccountConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonRejectEnvironmentAccountConnectionOutput
 */
export interface ProtonRejectEnvironmentAccountConnectionOutput {
  /**
   * @schema ProtonRejectEnvironmentAccountConnectionOutput#environmentAccountConnection
   */
  readonly environmentAccountConnection: ProtonEnvironmentAccountConnection;

}

/**
 * Converts an object of type 'ProtonRejectEnvironmentAccountConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonRejectEnvironmentAccountConnectionOutput(obj: ProtonRejectEnvironmentAccountConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnection': toJson_ProtonEnvironmentAccountConnection(obj.environmentAccountConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonTagResourceInput
 */
export interface ProtonTagResourceInput {
  /**
   * @schema ProtonTagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ProtonTagResourceInput#tags
   */
  readonly tags: ProtonTag[];

}

/**
 * Converts an object of type 'ProtonTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonTagResourceInput(obj: ProtonTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_ProtonTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonTagResourceOutput
 */
export interface ProtonTagResourceOutput {
}

/**
 * Converts an object of type 'ProtonTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonTagResourceOutput(obj: ProtonTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUntagResourceInput
 */
export interface ProtonUntagResourceInput {
  /**
   * @schema ProtonUntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ProtonUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'ProtonUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUntagResourceInput(obj: ProtonUntagResourceInput | undefined): Record<string, any> | undefined {
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
 * @schema ProtonUntagResourceOutput
 */
export interface ProtonUntagResourceOutput {
}

/**
 * Converts an object of type 'ProtonUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUntagResourceOutput(obj: ProtonUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateAccountSettingsInput
 */
export interface ProtonUpdateAccountSettingsInput {
  /**
   * @schema ProtonUpdateAccountSettingsInput#pipelineServiceRoleArn
   */
  readonly pipelineServiceRoleArn?: string;

}

/**
 * Converts an object of type 'ProtonUpdateAccountSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateAccountSettingsInput(obj: ProtonUpdateAccountSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineServiceRoleArn': obj.pipelineServiceRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateAccountSettingsOutput
 */
export interface ProtonUpdateAccountSettingsOutput {
  /**
   * @schema ProtonUpdateAccountSettingsOutput#accountSettings
   */
  readonly accountSettings: ProtonAccountSettings;

}

/**
 * Converts an object of type 'ProtonUpdateAccountSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateAccountSettingsOutput(obj: ProtonUpdateAccountSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountSettings': toJson_ProtonAccountSettings(obj.accountSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentInput
 */
export interface ProtonUpdateEnvironmentInput {
  /**
   * @schema ProtonUpdateEnvironmentInput#deploymentType
   */
  readonly deploymentType: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#environmentAccountConnectionId
   */
  readonly environmentAccountConnectionId?: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#protonServiceRoleArn
   */
  readonly protonServiceRoleArn?: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#spec
   */
  readonly spec?: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#templateMajorVersion
   */
  readonly templateMajorVersion?: string;

  /**
   * @schema ProtonUpdateEnvironmentInput#templateMinorVersion
   */
  readonly templateMinorVersion?: string;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentInput(obj: ProtonUpdateEnvironmentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentType': obj.deploymentType,
    'description': obj.description,
    'environmentAccountConnectionId': obj.environmentAccountConnectionId,
    'name': obj.name,
    'protonServiceRoleArn': obj.protonServiceRoleArn,
    'spec': obj.spec,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentOutput
 */
export interface ProtonUpdateEnvironmentOutput {
  /**
   * @schema ProtonUpdateEnvironmentOutput#environment
   */
  readonly environment: ProtonEnvironment;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentOutput(obj: ProtonUpdateEnvironmentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environment': toJson_ProtonEnvironment(obj.environment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentAccountConnectionInput
 */
export interface ProtonUpdateEnvironmentAccountConnectionInput {
  /**
   * @schema ProtonUpdateEnvironmentAccountConnectionInput#id
   */
  readonly id: string;

  /**
   * @schema ProtonUpdateEnvironmentAccountConnectionInput#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentAccountConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentAccountConnectionInput(obj: ProtonUpdateEnvironmentAccountConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentAccountConnectionOutput
 */
export interface ProtonUpdateEnvironmentAccountConnectionOutput {
  /**
   * @schema ProtonUpdateEnvironmentAccountConnectionOutput#environmentAccountConnection
   */
  readonly environmentAccountConnection: ProtonEnvironmentAccountConnection;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentAccountConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentAccountConnectionOutput(obj: ProtonUpdateEnvironmentAccountConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentAccountConnection': toJson_ProtonEnvironmentAccountConnection(obj.environmentAccountConnection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentTemplateInput
 */
export interface ProtonUpdateEnvironmentTemplateInput {
  /**
   * @schema ProtonUpdateEnvironmentTemplateInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonUpdateEnvironmentTemplateInput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonUpdateEnvironmentTemplateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentTemplateInput(obj: ProtonUpdateEnvironmentTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'displayName': obj.displayName,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentTemplateOutput
 */
export interface ProtonUpdateEnvironmentTemplateOutput {
  /**
   * @schema ProtonUpdateEnvironmentTemplateOutput#environmentTemplate
   */
  readonly environmentTemplate: ProtonEnvironmentTemplate;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentTemplateOutput(obj: ProtonUpdateEnvironmentTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplate': toJson_ProtonEnvironmentTemplate(obj.environmentTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentTemplateVersionInput
 */
export interface ProtonUpdateEnvironmentTemplateVersionInput {
  /**
   * @schema ProtonUpdateEnvironmentTemplateVersionInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonUpdateEnvironmentTemplateVersionInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonUpdateEnvironmentTemplateVersionInput#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonUpdateEnvironmentTemplateVersionInput#status
   */
  readonly status?: string;

  /**
   * @schema ProtonUpdateEnvironmentTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentTemplateVersionInput(obj: ProtonUpdateEnvironmentTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'status': obj.status,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateEnvironmentTemplateVersionOutput
 */
export interface ProtonUpdateEnvironmentTemplateVersionOutput {
  /**
   * @schema ProtonUpdateEnvironmentTemplateVersionOutput#environmentTemplateVersion
   */
  readonly environmentTemplateVersion: ProtonEnvironmentTemplateVersion;

}

/**
 * Converts an object of type 'ProtonUpdateEnvironmentTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateEnvironmentTemplateVersionOutput(obj: ProtonUpdateEnvironmentTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'environmentTemplateVersion': toJson_ProtonEnvironmentTemplateVersion(obj.environmentTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceInput
 */
export interface ProtonUpdateServiceInput {
  /**
   * @schema ProtonUpdateServiceInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonUpdateServiceInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonUpdateServiceInput#spec
   */
  readonly spec?: string;

}

/**
 * Converts an object of type 'ProtonUpdateServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceInput(obj: ProtonUpdateServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'name': obj.name,
    'spec': obj.spec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceOutput
 */
export interface ProtonUpdateServiceOutput {
  /**
   * @schema ProtonUpdateServiceOutput#service
   */
  readonly service: ProtonService;

}

/**
 * Converts an object of type 'ProtonUpdateServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceOutput(obj: ProtonUpdateServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'service': toJson_ProtonService(obj.service),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceInstanceInput
 */
export interface ProtonUpdateServiceInstanceInput {
  /**
   * @schema ProtonUpdateServiceInstanceInput#deploymentType
   */
  readonly deploymentType: string;

  /**
   * @schema ProtonUpdateServiceInstanceInput#name
   */
  readonly name: string;

  /**
   * @schema ProtonUpdateServiceInstanceInput#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema ProtonUpdateServiceInstanceInput#spec
   */
  readonly spec?: string;

  /**
   * @schema ProtonUpdateServiceInstanceInput#templateMajorVersion
   */
  readonly templateMajorVersion?: string;

  /**
   * @schema ProtonUpdateServiceInstanceInput#templateMinorVersion
   */
  readonly templateMinorVersion?: string;

}

/**
 * Converts an object of type 'ProtonUpdateServiceInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceInstanceInput(obj: ProtonUpdateServiceInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentType': obj.deploymentType,
    'name': obj.name,
    'serviceName': obj.serviceName,
    'spec': obj.spec,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceInstanceOutput
 */
export interface ProtonUpdateServiceInstanceOutput {
  /**
   * @schema ProtonUpdateServiceInstanceOutput#serviceInstance
   */
  readonly serviceInstance: ProtonServiceInstance;

}

/**
 * Converts an object of type 'ProtonUpdateServiceInstanceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceInstanceOutput(obj: ProtonUpdateServiceInstanceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceInstance': toJson_ProtonServiceInstance(obj.serviceInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServicePipelineInput
 */
export interface ProtonUpdateServicePipelineInput {
  /**
   * @schema ProtonUpdateServicePipelineInput#deploymentType
   */
  readonly deploymentType: string;

  /**
   * @schema ProtonUpdateServicePipelineInput#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema ProtonUpdateServicePipelineInput#spec
   */
  readonly spec: string;

  /**
   * @schema ProtonUpdateServicePipelineInput#templateMajorVersion
   */
  readonly templateMajorVersion?: string;

  /**
   * @schema ProtonUpdateServicePipelineInput#templateMinorVersion
   */
  readonly templateMinorVersion?: string;

}

/**
 * Converts an object of type 'ProtonUpdateServicePipelineInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServicePipelineInput(obj: ProtonUpdateServicePipelineInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deploymentType': obj.deploymentType,
    'serviceName': obj.serviceName,
    'spec': obj.spec,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServicePipelineOutput
 */
export interface ProtonUpdateServicePipelineOutput {
  /**
   * @schema ProtonUpdateServicePipelineOutput#pipeline
   */
  readonly pipeline: ProtonServicePipeline;

}

/**
 * Converts an object of type 'ProtonUpdateServicePipelineOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServicePipelineOutput(obj: ProtonUpdateServicePipelineOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipeline': toJson_ProtonServicePipeline(obj.pipeline),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceTemplateInput
 */
export interface ProtonUpdateServiceTemplateInput {
  /**
   * @schema ProtonUpdateServiceTemplateInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonUpdateServiceTemplateInput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonUpdateServiceTemplateInput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'ProtonUpdateServiceTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceTemplateInput(obj: ProtonUpdateServiceTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'displayName': obj.displayName,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceTemplateOutput
 */
export interface ProtonUpdateServiceTemplateOutput {
  /**
   * @schema ProtonUpdateServiceTemplateOutput#serviceTemplate
   */
  readonly serviceTemplate: ProtonServiceTemplate;

}

/**
 * Converts an object of type 'ProtonUpdateServiceTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceTemplateOutput(obj: ProtonUpdateServiceTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplate': toJson_ProtonServiceTemplate(obj.serviceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceTemplateVersionInput
 */
export interface ProtonUpdateServiceTemplateVersionInput {
  /**
   * @schema ProtonUpdateServiceTemplateVersionInput#compatibleEnvironmentTemplates
   */
  readonly compatibleEnvironmentTemplates?: ProtonCompatibleEnvironmentTemplateInput[];

  /**
   * @schema ProtonUpdateServiceTemplateVersionInput#description
   */
  readonly description?: string;

  /**
   * @schema ProtonUpdateServiceTemplateVersionInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonUpdateServiceTemplateVersionInput#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonUpdateServiceTemplateVersionInput#status
   */
  readonly status?: string;

  /**
   * @schema ProtonUpdateServiceTemplateVersionInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonUpdateServiceTemplateVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceTemplateVersionInput(obj: ProtonUpdateServiceTemplateVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'compatibleEnvironmentTemplates': obj.compatibleEnvironmentTemplates?.map(y => toJson_ProtonCompatibleEnvironmentTemplateInput(y)),
    'description': obj.description,
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'status': obj.status,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonUpdateServiceTemplateVersionOutput
 */
export interface ProtonUpdateServiceTemplateVersionOutput {
  /**
   * @schema ProtonUpdateServiceTemplateVersionOutput#serviceTemplateVersion
   */
  readonly serviceTemplateVersion: ProtonServiceTemplateVersion;

}

/**
 * Converts an object of type 'ProtonUpdateServiceTemplateVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonUpdateServiceTemplateVersionOutput(obj: ProtonUpdateServiceTemplateVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceTemplateVersion': toJson_ProtonServiceTemplateVersion(obj.serviceTemplateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentAccountConnection
 */
export interface ProtonEnvironmentAccountConnection {
  /**
   * @schema ProtonEnvironmentAccountConnection#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#environmentAccountId
   */
  readonly environmentAccountId: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#id
   */
  readonly id: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#managementAccountId
   */
  readonly managementAccountId: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#requestedAt
   */
  readonly requestedAt: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema ProtonEnvironmentAccountConnection#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentAccountConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentAccountConnection(obj: ProtonEnvironmentAccountConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'environmentAccountId': obj.environmentAccountId,
    'environmentName': obj.environmentName,
    'id': obj.id,
    'lastModifiedAt': obj.lastModifiedAt,
    'managementAccountId': obj.managementAccountId,
    'requestedAt': obj.requestedAt,
    'roleArn': obj.roleArn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironment
 */
export interface ProtonEnvironment {
  /**
   * @schema ProtonEnvironment#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironment#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonEnvironment#deploymentStatus
   */
  readonly deploymentStatus: string;

  /**
   * @schema ProtonEnvironment#deploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ProtonEnvironment#description
   */
  readonly description?: string;

  /**
   * @schema ProtonEnvironment#environmentAccountConnectionId
   */
  readonly environmentAccountConnectionId?: string;

  /**
   * @schema ProtonEnvironment#environmentAccountId
   */
  readonly environmentAccountId?: string;

  /**
   * @schema ProtonEnvironment#lastDeploymentAttemptedAt
   */
  readonly lastDeploymentAttemptedAt: string;

  /**
   * @schema ProtonEnvironment#lastDeploymentSucceededAt
   */
  readonly lastDeploymentSucceededAt: string;

  /**
   * @schema ProtonEnvironment#name
   */
  readonly name: string;

  /**
   * @schema ProtonEnvironment#protonServiceRoleArn
   */
  readonly protonServiceRoleArn?: string;

  /**
   * @schema ProtonEnvironment#provisioning
   */
  readonly provisioning?: string;

  /**
   * @schema ProtonEnvironment#spec
   */
  readonly spec?: string;

  /**
   * @schema ProtonEnvironment#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonEnvironment#templateMinorVersion
   */
  readonly templateMinorVersion: string;

  /**
   * @schema ProtonEnvironment#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironment(obj: ProtonEnvironment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deploymentStatus': obj.deploymentStatus,
    'deploymentStatusMessage': obj.deploymentStatusMessage,
    'description': obj.description,
    'environmentAccountConnectionId': obj.environmentAccountConnectionId,
    'environmentAccountId': obj.environmentAccountId,
    'lastDeploymentAttemptedAt': obj.lastDeploymentAttemptedAt,
    'lastDeploymentSucceededAt': obj.lastDeploymentSucceededAt,
    'name': obj.name,
    'protonServiceRoleArn': obj.protonServiceRoleArn,
    'provisioning': obj.provisioning,
    'spec': obj.spec,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceInstance
 */
export interface ProtonServiceInstance {
  /**
   * @schema ProtonServiceInstance#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceInstance#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceInstance#deploymentStatus
   */
  readonly deploymentStatus: string;

  /**
   * @schema ProtonServiceInstance#deploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ProtonServiceInstance#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema ProtonServiceInstance#lastDeploymentAttemptedAt
   */
  readonly lastDeploymentAttemptedAt: string;

  /**
   * @schema ProtonServiceInstance#lastDeploymentSucceededAt
   */
  readonly lastDeploymentSucceededAt: string;

  /**
   * @schema ProtonServiceInstance#name
   */
  readonly name: string;

  /**
   * @schema ProtonServiceInstance#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema ProtonServiceInstance#spec
   */
  readonly spec?: string;

  /**
   * @schema ProtonServiceInstance#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonServiceInstance#templateMinorVersion
   */
  readonly templateMinorVersion: string;

  /**
   * @schema ProtonServiceInstance#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonServiceInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceInstance(obj: ProtonServiceInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deploymentStatus': obj.deploymentStatus,
    'deploymentStatusMessage': obj.deploymentStatusMessage,
    'environmentName': obj.environmentName,
    'lastDeploymentAttemptedAt': obj.lastDeploymentAttemptedAt,
    'lastDeploymentSucceededAt': obj.lastDeploymentSucceededAt,
    'name': obj.name,
    'serviceName': obj.serviceName,
    'spec': obj.spec,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServicePipeline
 */
export interface ProtonServicePipeline {
  /**
   * @schema ProtonServicePipeline#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServicePipeline#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServicePipeline#deploymentStatus
   */
  readonly deploymentStatus: string;

  /**
   * @schema ProtonServicePipeline#deploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ProtonServicePipeline#lastDeploymentAttemptedAt
   */
  readonly lastDeploymentAttemptedAt: string;

  /**
   * @schema ProtonServicePipeline#lastDeploymentSucceededAt
   */
  readonly lastDeploymentSucceededAt: string;

  /**
   * @schema ProtonServicePipeline#spec
   */
  readonly spec?: string;

  /**
   * @schema ProtonServicePipeline#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonServicePipeline#templateMinorVersion
   */
  readonly templateMinorVersion: string;

  /**
   * @schema ProtonServicePipeline#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonServicePipeline' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServicePipeline(obj: ProtonServicePipeline | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deploymentStatus': obj.deploymentStatus,
    'deploymentStatusMessage': obj.deploymentStatusMessage,
    'lastDeploymentAttemptedAt': obj.lastDeploymentAttemptedAt,
    'lastDeploymentSucceededAt': obj.lastDeploymentSucceededAt,
    'spec': obj.spec,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonTag
 */
export interface ProtonTag {
  /**
   * @schema ProtonTag#key
   */
  readonly key: string;

  /**
   * @schema ProtonTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'ProtonTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonTag(obj: ProtonTag | undefined): Record<string, any> | undefined {
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
 * @schema ProtonEnvironmentTemplate
 */
export interface ProtonEnvironmentTemplate {
  /**
   * @schema ProtonEnvironmentTemplate#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentTemplate#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonEnvironmentTemplate#description
   */
  readonly description?: string;

  /**
   * @schema ProtonEnvironmentTemplate#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonEnvironmentTemplate#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema ProtonEnvironmentTemplate#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonEnvironmentTemplate#name
   */
  readonly name: string;

  /**
   * @schema ProtonEnvironmentTemplate#provisioning
   */
  readonly provisioning?: string;

  /**
   * @schema ProtonEnvironmentTemplate#recommendedVersion
   */
  readonly recommendedVersion?: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentTemplate(obj: ProtonEnvironmentTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'displayName': obj.displayName,
    'encryptionKey': obj.encryptionKey,
    'lastModifiedAt': obj.lastModifiedAt,
    'name': obj.name,
    'provisioning': obj.provisioning,
    'recommendedVersion': obj.recommendedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonTemplateVersionSourceInput
 */
export interface ProtonTemplateVersionSourceInput {
  /**
   * @schema ProtonTemplateVersionSourceInput#s3
   */
  readonly s3?: ProtonS3ObjectSource;

}

/**
 * Converts an object of type 'ProtonTemplateVersionSourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonTemplateVersionSourceInput(obj: ProtonTemplateVersionSourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_ProtonS3ObjectSource(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentTemplateVersion
 */
export interface ProtonEnvironmentTemplateVersion {
  /**
   * @schema ProtonEnvironmentTemplateVersion#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#description
   */
  readonly description?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#recommendedMinorVersion
   */
  readonly recommendedMinorVersion?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#schema
   */
  readonly schema?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#status
   */
  readonly status: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersion#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentTemplateVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentTemplateVersion(obj: ProtonEnvironmentTemplateVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'lastModifiedAt': obj.lastModifiedAt,
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'recommendedMinorVersion': obj.recommendedMinorVersion,
    'schema': obj.schema,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonService
 */
export interface ProtonService {
  /**
   * @schema ProtonService#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonService#branchName
   */
  readonly branchName?: string;

  /**
   * @schema ProtonService#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonService#description
   */
  readonly description?: string;

  /**
   * @schema ProtonService#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonService#name
   */
  readonly name: string;

  /**
   * @schema ProtonService#pipeline
   */
  readonly pipeline?: ProtonServicePipeline;

  /**
   * @schema ProtonService#repositoryConnectionArn
   */
  readonly repositoryConnectionArn?: string;

  /**
   * @schema ProtonService#repositoryId
   */
  readonly repositoryId?: string;

  /**
   * @schema ProtonService#spec
   */
  readonly spec: string;

  /**
   * @schema ProtonService#status
   */
  readonly status: string;

  /**
   * @schema ProtonService#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProtonService#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonService(obj: ProtonService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'branchName': obj.branchName,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'lastModifiedAt': obj.lastModifiedAt,
    'name': obj.name,
    'pipeline': toJson_ProtonServicePipeline(obj.pipeline),
    'repositoryConnectionArn': obj.repositoryConnectionArn,
    'repositoryId': obj.repositoryId,
    'spec': obj.spec,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceTemplate
 */
export interface ProtonServiceTemplate {
  /**
   * @schema ProtonServiceTemplate#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceTemplate#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceTemplate#description
   */
  readonly description?: string;

  /**
   * @schema ProtonServiceTemplate#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonServiceTemplate#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema ProtonServiceTemplate#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonServiceTemplate#name
   */
  readonly name: string;

  /**
   * @schema ProtonServiceTemplate#pipelineProvisioning
   */
  readonly pipelineProvisioning?: string;

  /**
   * @schema ProtonServiceTemplate#recommendedVersion
   */
  readonly recommendedVersion?: string;

}

/**
 * Converts an object of type 'ProtonServiceTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceTemplate(obj: ProtonServiceTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'displayName': obj.displayName,
    'encryptionKey': obj.encryptionKey,
    'lastModifiedAt': obj.lastModifiedAt,
    'name': obj.name,
    'pipelineProvisioning': obj.pipelineProvisioning,
    'recommendedVersion': obj.recommendedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonCompatibleEnvironmentTemplateInput
 */
export interface ProtonCompatibleEnvironmentTemplateInput {
  /**
   * @schema ProtonCompatibleEnvironmentTemplateInput#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonCompatibleEnvironmentTemplateInput#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonCompatibleEnvironmentTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCompatibleEnvironmentTemplateInput(obj: ProtonCompatibleEnvironmentTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceTemplateVersion
 */
export interface ProtonServiceTemplateVersion {
  /**
   * @schema ProtonServiceTemplateVersion#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceTemplateVersion#compatibleEnvironmentTemplates
   */
  readonly compatibleEnvironmentTemplates: ProtonCompatibleEnvironmentTemplate[];

  /**
   * @schema ProtonServiceTemplateVersion#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceTemplateVersion#description
   */
  readonly description?: string;

  /**
   * @schema ProtonServiceTemplateVersion#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonServiceTemplateVersion#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonServiceTemplateVersion#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonServiceTemplateVersion#recommendedMinorVersion
   */
  readonly recommendedMinorVersion?: string;

  /**
   * @schema ProtonServiceTemplateVersion#schema
   */
  readonly schema?: string;

  /**
   * @schema ProtonServiceTemplateVersion#status
   */
  readonly status: string;

  /**
   * @schema ProtonServiceTemplateVersion#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProtonServiceTemplateVersion#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonServiceTemplateVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceTemplateVersion(obj: ProtonServiceTemplateVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'compatibleEnvironmentTemplates': obj.compatibleEnvironmentTemplates?.map(y => toJson_ProtonCompatibleEnvironmentTemplate(y)),
    'createdAt': obj.createdAt,
    'description': obj.description,
    'lastModifiedAt': obj.lastModifiedAt,
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'recommendedMinorVersion': obj.recommendedMinorVersion,
    'schema': obj.schema,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonAccountSettings
 */
export interface ProtonAccountSettings {
  /**
   * @schema ProtonAccountSettings#pipelineServiceRoleArn
   */
  readonly pipelineServiceRoleArn?: string;

}

/**
 * Converts an object of type 'ProtonAccountSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonAccountSettings(obj: ProtonAccountSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pipelineServiceRoleArn': obj.pipelineServiceRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentAccountConnectionSummary
 */
export interface ProtonEnvironmentAccountConnectionSummary {
  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#environmentAccountId
   */
  readonly environmentAccountId: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#id
   */
  readonly id: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#managementAccountId
   */
  readonly managementAccountId: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#requestedAt
   */
  readonly requestedAt: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema ProtonEnvironmentAccountConnectionSummary#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentAccountConnectionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentAccountConnectionSummary(obj: ProtonEnvironmentAccountConnectionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'environmentAccountId': obj.environmentAccountId,
    'environmentName': obj.environmentName,
    'id': obj.id,
    'lastModifiedAt': obj.lastModifiedAt,
    'managementAccountId': obj.managementAccountId,
    'requestedAt': obj.requestedAt,
    'roleArn': obj.roleArn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentTemplateVersionSummary
 */
export interface ProtonEnvironmentTemplateVersionSummary {
  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#recommendedMinorVersion
   */
  readonly recommendedMinorVersion?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#status
   */
  readonly status: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProtonEnvironmentTemplateVersionSummary#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentTemplateVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentTemplateVersionSummary(obj: ProtonEnvironmentTemplateVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'lastModifiedAt': obj.lastModifiedAt,
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'recommendedMinorVersion': obj.recommendedMinorVersion,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentTemplateSummary
 */
export interface ProtonEnvironmentTemplateSummary {
  /**
   * @schema ProtonEnvironmentTemplateSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#name
   */
  readonly name: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#provisioning
   */
  readonly provisioning?: string;

  /**
   * @schema ProtonEnvironmentTemplateSummary#recommendedVersion
   */
  readonly recommendedVersion?: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentTemplateSummary(obj: ProtonEnvironmentTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'displayName': obj.displayName,
    'lastModifiedAt': obj.lastModifiedAt,
    'name': obj.name,
    'provisioning': obj.provisioning,
    'recommendedVersion': obj.recommendedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentTemplateFilter
 */
export interface ProtonEnvironmentTemplateFilter {
  /**
   * @schema ProtonEnvironmentTemplateFilter#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonEnvironmentTemplateFilter#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentTemplateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentTemplateFilter(obj: ProtonEnvironmentTemplateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonEnvironmentSummary
 */
export interface ProtonEnvironmentSummary {
  /**
   * @schema ProtonEnvironmentSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonEnvironmentSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonEnvironmentSummary#deploymentStatus
   */
  readonly deploymentStatus: string;

  /**
   * @schema ProtonEnvironmentSummary#deploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ProtonEnvironmentSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProtonEnvironmentSummary#environmentAccountConnectionId
   */
  readonly environmentAccountConnectionId?: string;

  /**
   * @schema ProtonEnvironmentSummary#environmentAccountId
   */
  readonly environmentAccountId?: string;

  /**
   * @schema ProtonEnvironmentSummary#lastDeploymentAttemptedAt
   */
  readonly lastDeploymentAttemptedAt: string;

  /**
   * @schema ProtonEnvironmentSummary#lastDeploymentSucceededAt
   */
  readonly lastDeploymentSucceededAt: string;

  /**
   * @schema ProtonEnvironmentSummary#name
   */
  readonly name: string;

  /**
   * @schema ProtonEnvironmentSummary#protonServiceRoleArn
   */
  readonly protonServiceRoleArn?: string;

  /**
   * @schema ProtonEnvironmentSummary#provisioning
   */
  readonly provisioning?: string;

  /**
   * @schema ProtonEnvironmentSummary#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonEnvironmentSummary#templateMinorVersion
   */
  readonly templateMinorVersion: string;

  /**
   * @schema ProtonEnvironmentSummary#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonEnvironmentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonEnvironmentSummary(obj: ProtonEnvironmentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deploymentStatus': obj.deploymentStatus,
    'deploymentStatusMessage': obj.deploymentStatusMessage,
    'description': obj.description,
    'environmentAccountConnectionId': obj.environmentAccountConnectionId,
    'environmentAccountId': obj.environmentAccountId,
    'lastDeploymentAttemptedAt': obj.lastDeploymentAttemptedAt,
    'lastDeploymentSucceededAt': obj.lastDeploymentSucceededAt,
    'name': obj.name,
    'protonServiceRoleArn': obj.protonServiceRoleArn,
    'provisioning': obj.provisioning,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceInstanceSummary
 */
export interface ProtonServiceInstanceSummary {
  /**
   * @schema ProtonServiceInstanceSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceInstanceSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceInstanceSummary#deploymentStatus
   */
  readonly deploymentStatus: string;

  /**
   * @schema ProtonServiceInstanceSummary#deploymentStatusMessage
   */
  readonly deploymentStatusMessage?: string;

  /**
   * @schema ProtonServiceInstanceSummary#environmentName
   */
  readonly environmentName: string;

  /**
   * @schema ProtonServiceInstanceSummary#lastDeploymentAttemptedAt
   */
  readonly lastDeploymentAttemptedAt: string;

  /**
   * @schema ProtonServiceInstanceSummary#lastDeploymentSucceededAt
   */
  readonly lastDeploymentSucceededAt: string;

  /**
   * @schema ProtonServiceInstanceSummary#name
   */
  readonly name: string;

  /**
   * @schema ProtonServiceInstanceSummary#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema ProtonServiceInstanceSummary#templateMajorVersion
   */
  readonly templateMajorVersion: string;

  /**
   * @schema ProtonServiceInstanceSummary#templateMinorVersion
   */
  readonly templateMinorVersion: string;

  /**
   * @schema ProtonServiceInstanceSummary#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonServiceInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceInstanceSummary(obj: ProtonServiceInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'deploymentStatus': obj.deploymentStatus,
    'deploymentStatusMessage': obj.deploymentStatusMessage,
    'environmentName': obj.environmentName,
    'lastDeploymentAttemptedAt': obj.lastDeploymentAttemptedAt,
    'lastDeploymentSucceededAt': obj.lastDeploymentSucceededAt,
    'name': obj.name,
    'serviceName': obj.serviceName,
    'templateMajorVersion': obj.templateMajorVersion,
    'templateMinorVersion': obj.templateMinorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceTemplateVersionSummary
 */
export interface ProtonServiceTemplateVersionSummary {
  /**
   * @schema ProtonServiceTemplateVersionSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#minorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#recommendedMinorVersion
   */
  readonly recommendedMinorVersion?: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#status
   */
  readonly status: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProtonServiceTemplateVersionSummary#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonServiceTemplateVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceTemplateVersionSummary(obj: ProtonServiceTemplateVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'lastModifiedAt': obj.lastModifiedAt,
    'majorVersion': obj.majorVersion,
    'minorVersion': obj.minorVersion,
    'recommendedMinorVersion': obj.recommendedMinorVersion,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceTemplateSummary
 */
export interface ProtonServiceTemplateSummary {
  /**
   * @schema ProtonServiceTemplateSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceTemplateSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceTemplateSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProtonServiceTemplateSummary#displayName
   */
  readonly displayName?: string;

  /**
   * @schema ProtonServiceTemplateSummary#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonServiceTemplateSummary#name
   */
  readonly name: string;

  /**
   * @schema ProtonServiceTemplateSummary#pipelineProvisioning
   */
  readonly pipelineProvisioning?: string;

  /**
   * @schema ProtonServiceTemplateSummary#recommendedVersion
   */
  readonly recommendedVersion?: string;

}

/**
 * Converts an object of type 'ProtonServiceTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceTemplateSummary(obj: ProtonServiceTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'displayName': obj.displayName,
    'lastModifiedAt': obj.lastModifiedAt,
    'name': obj.name,
    'pipelineProvisioning': obj.pipelineProvisioning,
    'recommendedVersion': obj.recommendedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonServiceSummary
 */
export interface ProtonServiceSummary {
  /**
   * @schema ProtonServiceSummary#arn
   */
  readonly arn: string;

  /**
   * @schema ProtonServiceSummary#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ProtonServiceSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProtonServiceSummary#lastModifiedAt
   */
  readonly lastModifiedAt: string;

  /**
   * @schema ProtonServiceSummary#name
   */
  readonly name: string;

  /**
   * @schema ProtonServiceSummary#status
   */
  readonly status: string;

  /**
   * @schema ProtonServiceSummary#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProtonServiceSummary#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonServiceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonServiceSummary(obj: ProtonServiceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'description': obj.description,
    'lastModifiedAt': obj.lastModifiedAt,
    'name': obj.name,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ProtonS3ObjectSource
 */
export interface ProtonS3ObjectSource {
  /**
   * @schema ProtonS3ObjectSource#bucket
   */
  readonly bucket: string;

  /**
   * @schema ProtonS3ObjectSource#key
   */
  readonly key: string;

}

/**
 * Converts an object of type 'ProtonS3ObjectSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonS3ObjectSource(obj: ProtonS3ObjectSource | undefined): Record<string, any> | undefined {
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
 * @schema ProtonCompatibleEnvironmentTemplate
 */
export interface ProtonCompatibleEnvironmentTemplate {
  /**
   * @schema ProtonCompatibleEnvironmentTemplate#majorVersion
   */
  readonly majorVersion: string;

  /**
   * @schema ProtonCompatibleEnvironmentTemplate#templateName
   */
  readonly templateName: string;

}

/**
 * Converts an object of type 'ProtonCompatibleEnvironmentTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ProtonCompatibleEnvironmentTemplate(obj: ProtonCompatibleEnvironmentTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'majorVersion': obj.majorVersion,
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
