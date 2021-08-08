/**
 * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOption
   */
  readonly cloudWatchLoggingOption?: KinesisAnalyticsCloudWatchLoggingOption;

}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest(obj: KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'CloudWatchLoggingOption': toJson_KinesisAnalyticsCloudWatchLoggingOption(obj.cloudWatchLoggingOption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse(obj: KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationInputRequest
 */
export interface KinesisAnalyticsAddApplicationInputRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationInputRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsAddApplicationInputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsAddApplicationInputRequest#Input
   */
  readonly input?: KinesisAnalyticsInput;

}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationInputRequest(obj: KinesisAnalyticsAddApplicationInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'Input': toJson_KinesisAnalyticsInput(obj.input),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationInputResponse
 */
export interface KinesisAnalyticsAddApplicationInputResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationInputResponse(obj: KinesisAnalyticsAddApplicationInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsInputProcessingConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest(obj: KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'InputId': obj.inputId,
    'InputProcessingConfiguration': toJson_KinesisAnalyticsInputProcessingConfiguration(obj.inputProcessingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse(obj: KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationOutputRequest
 */
export interface KinesisAnalyticsAddApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationOutputRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsAddApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsAddApplicationOutputRequest#Output
   */
  readonly output?: KinesisAnalyticsOutput;

}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationOutputRequest(obj: KinesisAnalyticsAddApplicationOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'Output': toJson_KinesisAnalyticsOutput(obj.output),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationOutputResponse
 */
export interface KinesisAnalyticsAddApplicationOutputResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationOutputResponse(obj: KinesisAnalyticsAddApplicationOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsAddApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsAddApplicationReferenceDataSourceRequest#ReferenceDataSource
   */
  readonly referenceDataSource?: KinesisAnalyticsReferenceDataSource;

}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationReferenceDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationReferenceDataSourceRequest(obj: KinesisAnalyticsAddApplicationReferenceDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'ReferenceDataSource': toJson_KinesisAnalyticsReferenceDataSource(obj.referenceDataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsAddApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsAddApplicationReferenceDataSourceResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsAddApplicationReferenceDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsAddApplicationReferenceDataSourceResponse(obj: KinesisAnalyticsAddApplicationReferenceDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsCreateApplicationRequest
 */
export interface KinesisAnalyticsCreateApplicationRequest {
  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#Inputs
   */
  readonly inputs?: KinesisAnalyticsInput[];

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#Outputs
   */
  readonly outputs?: KinesisAnalyticsOutput[];

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: KinesisAnalyticsCloudWatchLoggingOption[];

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#ApplicationCode
   */
  readonly applicationCode?: string;

  /**
   * @schema KinesisAnalyticsCreateApplicationRequest#Tags
   */
  readonly tags?: KinesisAnalyticsTag[];

}

/**
 * Converts an object of type 'KinesisAnalyticsCreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsCreateApplicationRequest(obj: KinesisAnalyticsCreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationDescription': obj.applicationDescription,
    'Inputs': obj.inputs?.map(y => toJson_KinesisAnalyticsInput(y)),
    'Outputs': obj.outputs?.map(y => toJson_KinesisAnalyticsOutput(y)),
    'CloudWatchLoggingOptions': obj.cloudWatchLoggingOptions?.map(y => toJson_KinesisAnalyticsCloudWatchLoggingOption(y)),
    'ApplicationCode': obj.applicationCode,
    'Tags': obj.tags?.map(y => toJson_KinesisAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsCreateApplicationResponse
 */
export interface KinesisAnalyticsCreateApplicationResponse {
  /**
   * @schema KinesisAnalyticsCreateApplicationResponse#ApplicationSummary
   */
  readonly applicationSummary?: KinesisAnalyticsApplicationSummary;

}

/**
 * Converts an object of type 'KinesisAnalyticsCreateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsCreateApplicationResponse(obj: KinesisAnalyticsCreateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationSummary': toJson_KinesisAnalyticsApplicationSummary(obj.applicationSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationRequest
 */
export interface KinesisAnalyticsDeleteApplicationRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationRequest#CreateTimestamp
   */
  readonly createTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationRequest(obj: KinesisAnalyticsDeleteApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CreateTimestamp': obj.createTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationResponse
 */
export interface KinesisAnalyticsDeleteApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationResponse(obj: KinesisAnalyticsDeleteApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest(obj: KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'CloudWatchLoggingOptionId': obj.cloudWatchLoggingOptionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse(obj: KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest(obj: KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'InputId': obj.inputId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse(obj: KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationOutputRequest
 */
export interface KinesisAnalyticsDeleteApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationOutputRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationOutputRequest#OutputId
   */
  readonly outputId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationOutputRequest(obj: KinesisAnalyticsDeleteApplicationOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'OutputId': obj.outputId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationOutputResponse
 */
export interface KinesisAnalyticsDeleteApplicationOutputResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationOutputResponse(obj: KinesisAnalyticsDeleteApplicationOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest#ReferenceId
   */
  readonly referenceId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest(obj: KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'ReferenceId': obj.referenceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse(obj: KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDescribeApplicationRequest
 */
export interface KinesisAnalyticsDescribeApplicationRequest {
  /**
   * @schema KinesisAnalyticsDescribeApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDescribeApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDescribeApplicationRequest(obj: KinesisAnalyticsDescribeApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDescribeApplicationResponse
 */
export interface KinesisAnalyticsDescribeApplicationResponse {
  /**
   * @schema KinesisAnalyticsDescribeApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail?: KinesisAnalyticsApplicationDetail;

}

/**
 * Converts an object of type 'KinesisAnalyticsDescribeApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDescribeApplicationResponse(obj: KinesisAnalyticsDescribeApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationDetail': toJson_KinesisAnalyticsApplicationDetail(obj.applicationDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDiscoverInputSchemaRequest
 */
export interface KinesisAnalyticsDiscoverInputSchemaRequest {
  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsInputStartingPositionConfiguration;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#S3Configuration
   */
  readonly s3Configuration?: KinesisAnalyticsS3Configuration;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsInputProcessingConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsDiscoverInputSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDiscoverInputSchemaRequest(obj: KinesisAnalyticsDiscoverInputSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
    'InputStartingPositionConfiguration': toJson_KinesisAnalyticsInputStartingPositionConfiguration(obj.inputStartingPositionConfiguration),
    'S3Configuration': toJson_KinesisAnalyticsS3Configuration(obj.s3Configuration),
    'InputProcessingConfiguration': toJson_KinesisAnalyticsInputProcessingConfiguration(obj.inputProcessingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDiscoverInputSchemaResponse
 */
export interface KinesisAnalyticsDiscoverInputSchemaResponse {
  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsSourceSchema;

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#ParsedInputRecords
   */
  readonly parsedInputRecords?: string[][];

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#ProcessedInputRecords
   */
  readonly processedInputRecords?: string[];

  /**
   * @schema KinesisAnalyticsDiscoverInputSchemaResponse#RawInputRecords
   */
  readonly rawInputRecords?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsDiscoverInputSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDiscoverInputSchemaResponse(obj: KinesisAnalyticsDiscoverInputSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSchema': toJson_KinesisAnalyticsSourceSchema(obj.inputSchema),
    'ParsedInputRecords': obj.parsedInputRecords?.map(y => y?.map(y => y)),
    'ProcessedInputRecords': obj.processedInputRecords?.map(y => y),
    'RawInputRecords': obj.rawInputRecords?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsListApplicationsRequest
 */
export interface KinesisAnalyticsListApplicationsRequest {
  /**
   * @schema KinesisAnalyticsListApplicationsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsListApplicationsRequest#ExclusiveStartApplicationName
   */
  readonly exclusiveStartApplicationName?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsListApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsListApplicationsRequest(obj: KinesisAnalyticsListApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'ExclusiveStartApplicationName': obj.exclusiveStartApplicationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsListApplicationsResponse
 */
export interface KinesisAnalyticsListApplicationsResponse {
  /**
   * @schema KinesisAnalyticsListApplicationsResponse#ApplicationSummaries
   */
  readonly applicationSummaries?: KinesisAnalyticsApplicationSummary[];

  /**
   * @schema KinesisAnalyticsListApplicationsResponse#HasMoreApplications
   */
  readonly hasMoreApplications?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsListApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsListApplicationsResponse(obj: KinesisAnalyticsListApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationSummaries': obj.applicationSummaries?.map(y => toJson_KinesisAnalyticsApplicationSummary(y)),
    'HasMoreApplications': obj.hasMoreApplications,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsListTagsForResourceRequest
 */
export interface KinesisAnalyticsListTagsForResourceRequest {
  /**
   * @schema KinesisAnalyticsListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsListTagsForResourceRequest(obj: KinesisAnalyticsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsListTagsForResourceResponse
 */
export interface KinesisAnalyticsListTagsForResourceResponse {
  /**
   * @schema KinesisAnalyticsListTagsForResourceResponse#Tags
   */
  readonly tags?: KinesisAnalyticsTag[];

}

/**
 * Converts an object of type 'KinesisAnalyticsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsListTagsForResourceResponse(obj: KinesisAnalyticsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_KinesisAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsStartApplicationRequest
 */
export interface KinesisAnalyticsStartApplicationRequest {
  /**
   * @schema KinesisAnalyticsStartApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsStartApplicationRequest#InputConfigurations
   */
  readonly inputConfigurations?: KinesisAnalyticsInputConfiguration[];

}

/**
 * Converts an object of type 'KinesisAnalyticsStartApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsStartApplicationRequest(obj: KinesisAnalyticsStartApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'InputConfigurations': obj.inputConfigurations?.map(y => toJson_KinesisAnalyticsInputConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsStartApplicationResponse
 */
export interface KinesisAnalyticsStartApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsStartApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsStartApplicationResponse(obj: KinesisAnalyticsStartApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsStopApplicationRequest
 */
export interface KinesisAnalyticsStopApplicationRequest {
  /**
   * @schema KinesisAnalyticsStopApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsStopApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsStopApplicationRequest(obj: KinesisAnalyticsStopApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsStopApplicationResponse
 */
export interface KinesisAnalyticsStopApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsStopApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsStopApplicationResponse(obj: KinesisAnalyticsStopApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsTagResourceRequest
 */
export interface KinesisAnalyticsTagResourceRequest {
  /**
   * @schema KinesisAnalyticsTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsTagResourceRequest#Tags
   */
  readonly tags?: KinesisAnalyticsTag[];

}

/**
 * Converts an object of type 'KinesisAnalyticsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsTagResourceRequest(obj: KinesisAnalyticsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_KinesisAnalyticsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsTagResourceResponse
 */
export interface KinesisAnalyticsTagResourceResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsTagResourceResponse(obj: KinesisAnalyticsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsUntagResourceRequest
 */
export interface KinesisAnalyticsUntagResourceRequest {
  /**
   * @schema KinesisAnalyticsUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsUntagResourceRequest(obj: KinesisAnalyticsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsUntagResourceResponse
 */
export interface KinesisAnalyticsUntagResourceResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsUntagResourceResponse(obj: KinesisAnalyticsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsUpdateApplicationRequest
 */
export interface KinesisAnalyticsUpdateApplicationRequest {
  /**
   * @schema KinesisAnalyticsUpdateApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsUpdateApplicationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsUpdateApplicationRequest#ApplicationUpdate
   */
  readonly applicationUpdate?: KinesisAnalyticsApplicationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsUpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsUpdateApplicationRequest(obj: KinesisAnalyticsUpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'ApplicationUpdate': toJson_KinesisAnalyticsApplicationUpdate(obj.applicationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsUpdateApplicationResponse
 */
export interface KinesisAnalyticsUpdateApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsUpdateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsUpdateApplicationResponse(obj: KinesisAnalyticsUpdateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsCloudWatchLoggingOption
 */
export interface KinesisAnalyticsCloudWatchLoggingOption {
  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOption#LogStreamARN
   */
  readonly logStreamArn?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOption#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsCloudWatchLoggingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsCloudWatchLoggingOption(obj: KinesisAnalyticsCloudWatchLoggingOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogStreamARN': obj.logStreamArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInput
 */
export interface KinesisAnalyticsInput {
  /**
   * @schema KinesisAnalyticsInput#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema KinesisAnalyticsInput#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsInputProcessingConfiguration;

  /**
   * @schema KinesisAnalyticsInput#KinesisStreamsInput
   */
  readonly kinesisStreamsInput?: KinesisAnalyticsKinesisStreamsInput;

  /**
   * @schema KinesisAnalyticsInput#KinesisFirehoseInput
   */
  readonly kinesisFirehoseInput?: KinesisAnalyticsKinesisFirehoseInput;

  /**
   * @schema KinesisAnalyticsInput#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsInputParallelism;

  /**
   * @schema KinesisAnalyticsInput#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsSourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInput(obj: KinesisAnalyticsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'InputProcessingConfiguration': toJson_KinesisAnalyticsInputProcessingConfiguration(obj.inputProcessingConfiguration),
    'KinesisStreamsInput': toJson_KinesisAnalyticsKinesisStreamsInput(obj.kinesisStreamsInput),
    'KinesisFirehoseInput': toJson_KinesisAnalyticsKinesisFirehoseInput(obj.kinesisFirehoseInput),
    'InputParallelism': toJson_KinesisAnalyticsInputParallelism(obj.inputParallelism),
    'InputSchema': toJson_KinesisAnalyticsSourceSchema(obj.inputSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputProcessingConfiguration
 */
export interface KinesisAnalyticsInputProcessingConfiguration {
  /**
   * @schema KinesisAnalyticsInputProcessingConfiguration#InputLambdaProcessor
   */
  readonly inputLambdaProcessor?: KinesisAnalyticsInputLambdaProcessor;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputProcessingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputProcessingConfiguration(obj: KinesisAnalyticsInputProcessingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLambdaProcessor': toJson_KinesisAnalyticsInputLambdaProcessor(obj.inputLambdaProcessor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsOutput
 */
export interface KinesisAnalyticsOutput {
  /**
   * @schema KinesisAnalyticsOutput#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsOutput#KinesisStreamsOutput
   */
  readonly kinesisStreamsOutput?: KinesisAnalyticsKinesisStreamsOutput;

  /**
   * @schema KinesisAnalyticsOutput#KinesisFirehoseOutput
   */
  readonly kinesisFirehoseOutput?: KinesisAnalyticsKinesisFirehoseOutput;

  /**
   * @schema KinesisAnalyticsOutput#LambdaOutput
   */
  readonly lambdaOutput?: KinesisAnalyticsLambdaOutput;

  /**
   * @schema KinesisAnalyticsOutput#DestinationSchema
   */
  readonly destinationSchema?: KinesisAnalyticsDestinationSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsOutput(obj: KinesisAnalyticsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'KinesisStreamsOutput': toJson_KinesisAnalyticsKinesisStreamsOutput(obj.kinesisStreamsOutput),
    'KinesisFirehoseOutput': toJson_KinesisAnalyticsKinesisFirehoseOutput(obj.kinesisFirehoseOutput),
    'LambdaOutput': toJson_KinesisAnalyticsLambdaOutput(obj.lambdaOutput),
    'DestinationSchema': toJson_KinesisAnalyticsDestinationSchema(obj.destinationSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsReferenceDataSource
 */
export interface KinesisAnalyticsReferenceDataSource {
  /**
   * @schema KinesisAnalyticsReferenceDataSource#TableName
   */
  readonly tableName?: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSource#S3ReferenceDataSource
   */
  readonly s3ReferenceDataSource?: KinesisAnalyticsS3ReferenceDataSource;

  /**
   * @schema KinesisAnalyticsReferenceDataSource#ReferenceSchema
   */
  readonly referenceSchema?: KinesisAnalyticsSourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsReferenceDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsReferenceDataSource(obj: KinesisAnalyticsReferenceDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'S3ReferenceDataSource': toJson_KinesisAnalyticsS3ReferenceDataSource(obj.s3ReferenceDataSource),
    'ReferenceSchema': toJson_KinesisAnalyticsSourceSchema(obj.referenceSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsTag
 */
export interface KinesisAnalyticsTag {
  /**
   * @schema KinesisAnalyticsTag#Key
   */
  readonly key?: string;

  /**
   * @schema KinesisAnalyticsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsTag(obj: KinesisAnalyticsTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsApplicationSummary
 */
export interface KinesisAnalyticsApplicationSummary {
  /**
   * @schema KinesisAnalyticsApplicationSummary#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsApplicationSummary#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsApplicationSummary#ApplicationStatus
   */
  readonly applicationStatus?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsApplicationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsApplicationSummary(obj: KinesisAnalyticsApplicationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationARN': obj.applicationArn,
    'ApplicationStatus': obj.applicationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsApplicationDetail
 */
export interface KinesisAnalyticsApplicationDetail {
  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationStatus
   */
  readonly applicationStatus?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#InputDescriptions
   */
  readonly inputDescriptions?: KinesisAnalyticsInputDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#OutputDescriptions
   */
  readonly outputDescriptions?: KinesisAnalyticsOutputDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: KinesisAnalyticsReferenceDataSourceDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsCloudWatchLoggingOptionDescription[];

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationCode
   */
  readonly applicationCode?: string;

  /**
   * @schema KinesisAnalyticsApplicationDetail#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsApplicationDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsApplicationDetail(obj: KinesisAnalyticsApplicationDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationDescription': obj.applicationDescription,
    'ApplicationARN': obj.applicationArn,
    'ApplicationStatus': obj.applicationStatus,
    'CreateTimestamp': obj.createTimestamp,
    'LastUpdateTimestamp': obj.lastUpdateTimestamp,
    'InputDescriptions': obj.inputDescriptions?.map(y => toJson_KinesisAnalyticsInputDescription(y)),
    'OutputDescriptions': obj.outputDescriptions?.map(y => toJson_KinesisAnalyticsOutputDescription(y)),
    'ReferenceDataSourceDescriptions': obj.referenceDataSourceDescriptions?.map(y => toJson_KinesisAnalyticsReferenceDataSourceDescription(y)),
    'CloudWatchLoggingOptionDescriptions': obj.cloudWatchLoggingOptionDescriptions?.map(y => toJson_KinesisAnalyticsCloudWatchLoggingOptionDescription(y)),
    'ApplicationCode': obj.applicationCode,
    'ApplicationVersionId': obj.applicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputStartingPositionConfiguration
 */
export interface KinesisAnalyticsInputStartingPositionConfiguration {
  /**
   * @schema KinesisAnalyticsInputStartingPositionConfiguration#InputStartingPosition
   */
  readonly inputStartingPosition?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputStartingPositionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputStartingPositionConfiguration(obj: KinesisAnalyticsInputStartingPositionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputStartingPosition': obj.inputStartingPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsS3Configuration
 */
export interface KinesisAnalyticsS3Configuration {
  /**
   * @schema KinesisAnalyticsS3Configuration#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema KinesisAnalyticsS3Configuration#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsS3Configuration#FileKey
   */
  readonly fileKey?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsS3Configuration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsS3Configuration(obj: KinesisAnalyticsS3Configuration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleARN': obj.roleArn,
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsSourceSchema
 */
export interface KinesisAnalyticsSourceSchema {
  /**
   * @schema KinesisAnalyticsSourceSchema#RecordFormat
   */
  readonly recordFormat?: KinesisAnalyticsRecordFormat;

  /**
   * @schema KinesisAnalyticsSourceSchema#RecordEncoding
   */
  readonly recordEncoding?: string;

  /**
   * @schema KinesisAnalyticsSourceSchema#RecordColumns
   */
  readonly recordColumns?: KinesisAnalyticsRecordColumn[];

}

/**
 * Converts an object of type 'KinesisAnalyticsSourceSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsSourceSchema(obj: KinesisAnalyticsSourceSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormat': toJson_KinesisAnalyticsRecordFormat(obj.recordFormat),
    'RecordEncoding': obj.recordEncoding,
    'RecordColumns': obj.recordColumns?.map(y => toJson_KinesisAnalyticsRecordColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputConfiguration
 */
export interface KinesisAnalyticsInputConfiguration {
  /**
   * @schema KinesisAnalyticsInputConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema KinesisAnalyticsInputConfiguration#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsInputStartingPositionConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputConfiguration(obj: KinesisAnalyticsInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'InputStartingPositionConfiguration': toJson_KinesisAnalyticsInputStartingPositionConfiguration(obj.inputStartingPositionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsApplicationUpdate
 */
export interface KinesisAnalyticsApplicationUpdate {
  /**
   * @schema KinesisAnalyticsApplicationUpdate#InputUpdates
   */
  readonly inputUpdates?: KinesisAnalyticsInputUpdate[];

  /**
   * @schema KinesisAnalyticsApplicationUpdate#ApplicationCodeUpdate
   */
  readonly applicationCodeUpdate?: string;

  /**
   * @schema KinesisAnalyticsApplicationUpdate#OutputUpdates
   */
  readonly outputUpdates?: KinesisAnalyticsOutputUpdate[];

  /**
   * @schema KinesisAnalyticsApplicationUpdate#ReferenceDataSourceUpdates
   */
  readonly referenceDataSourceUpdates?: KinesisAnalyticsReferenceDataSourceUpdate[];

  /**
   * @schema KinesisAnalyticsApplicationUpdate#CloudWatchLoggingOptionUpdates
   */
  readonly cloudWatchLoggingOptionUpdates?: KinesisAnalyticsCloudWatchLoggingOptionUpdate[];

}

/**
 * Converts an object of type 'KinesisAnalyticsApplicationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsApplicationUpdate(obj: KinesisAnalyticsApplicationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputUpdates': obj.inputUpdates?.map(y => toJson_KinesisAnalyticsInputUpdate(y)),
    'ApplicationCodeUpdate': obj.applicationCodeUpdate,
    'OutputUpdates': obj.outputUpdates?.map(y => toJson_KinesisAnalyticsOutputUpdate(y)),
    'ReferenceDataSourceUpdates': obj.referenceDataSourceUpdates?.map(y => toJson_KinesisAnalyticsReferenceDataSourceUpdate(y)),
    'CloudWatchLoggingOptionUpdates': obj.cloudWatchLoggingOptionUpdates?.map(y => toJson_KinesisAnalyticsCloudWatchLoggingOptionUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisStreamsInput
 */
export interface KinesisAnalyticsKinesisStreamsInput {
  /**
   * @schema KinesisAnalyticsKinesisStreamsInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsInput#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisStreamsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisStreamsInput(obj: KinesisAnalyticsKinesisStreamsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisFirehoseInput
 */
export interface KinesisAnalyticsKinesisFirehoseInput {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseInput#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisFirehoseInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisFirehoseInput(obj: KinesisAnalyticsKinesisFirehoseInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputParallelism
 */
export interface KinesisAnalyticsInputParallelism {
  /**
   * @schema KinesisAnalyticsInputParallelism#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputParallelism' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputParallelism(obj: KinesisAnalyticsInputParallelism | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputLambdaProcessor
 */
export interface KinesisAnalyticsInputLambdaProcessor {
  /**
   * @schema KinesisAnalyticsInputLambdaProcessor#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsInputLambdaProcessor#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputLambdaProcessor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputLambdaProcessor(obj: KinesisAnalyticsInputLambdaProcessor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisStreamsOutput
 */
export interface KinesisAnalyticsKinesisStreamsOutput {
  /**
   * @schema KinesisAnalyticsKinesisStreamsOutput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsOutput#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisStreamsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisStreamsOutput(obj: KinesisAnalyticsKinesisStreamsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisFirehoseOutput
 */
export interface KinesisAnalyticsKinesisFirehoseOutput {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutput#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisFirehoseOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisFirehoseOutput(obj: KinesisAnalyticsKinesisFirehoseOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsLambdaOutput
 */
export interface KinesisAnalyticsLambdaOutput {
  /**
   * @schema KinesisAnalyticsLambdaOutput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsLambdaOutput#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsLambdaOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsLambdaOutput(obj: KinesisAnalyticsLambdaOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsDestinationSchema
 */
export interface KinesisAnalyticsDestinationSchema {
  /**
   * @schema KinesisAnalyticsDestinationSchema#RecordFormatType
   */
  readonly recordFormatType?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsDestinationSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsDestinationSchema(obj: KinesisAnalyticsDestinationSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormatType': obj.recordFormatType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsS3ReferenceDataSource
 */
export interface KinesisAnalyticsS3ReferenceDataSource {
  /**
   * @schema KinesisAnalyticsS3ReferenceDataSource#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSource#FileKey
   */
  readonly fileKey?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSource#ReferenceRoleARN
   */
  readonly referenceRoleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsS3ReferenceDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsS3ReferenceDataSource(obj: KinesisAnalyticsS3ReferenceDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
    'ReferenceRoleARN': obj.referenceRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputDescription
 */
export interface KinesisAnalyticsInputDescription {
  /**
   * @schema KinesisAnalyticsInputDescription#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsInputDescription#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema KinesisAnalyticsInputDescription#InAppStreamNames
   */
  readonly inAppStreamNames?: string[];

  /**
   * @schema KinesisAnalyticsInputDescription#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: KinesisAnalyticsInputProcessingConfigurationDescription;

  /**
   * @schema KinesisAnalyticsInputDescription#KinesisStreamsInputDescription
   */
  readonly kinesisStreamsInputDescription?: KinesisAnalyticsKinesisStreamsInputDescription;

  /**
   * @schema KinesisAnalyticsInputDescription#KinesisFirehoseInputDescription
   */
  readonly kinesisFirehoseInputDescription?: KinesisAnalyticsKinesisFirehoseInputDescription;

  /**
   * @schema KinesisAnalyticsInputDescription#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsSourceSchema;

  /**
   * @schema KinesisAnalyticsInputDescription#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsInputParallelism;

  /**
   * @schema KinesisAnalyticsInputDescription#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsInputStartingPositionConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputDescription(obj: KinesisAnalyticsInputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
    'NamePrefix': obj.namePrefix,
    'InAppStreamNames': obj.inAppStreamNames?.map(y => y),
    'InputProcessingConfigurationDescription': toJson_KinesisAnalyticsInputProcessingConfigurationDescription(obj.inputProcessingConfigurationDescription),
    'KinesisStreamsInputDescription': toJson_KinesisAnalyticsKinesisStreamsInputDescription(obj.kinesisStreamsInputDescription),
    'KinesisFirehoseInputDescription': toJson_KinesisAnalyticsKinesisFirehoseInputDescription(obj.kinesisFirehoseInputDescription),
    'InputSchema': toJson_KinesisAnalyticsSourceSchema(obj.inputSchema),
    'InputParallelism': toJson_KinesisAnalyticsInputParallelism(obj.inputParallelism),
    'InputStartingPositionConfiguration': toJson_KinesisAnalyticsInputStartingPositionConfiguration(obj.inputStartingPositionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsOutputDescription
 */
export interface KinesisAnalyticsOutputDescription {
  /**
   * @schema KinesisAnalyticsOutputDescription#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema KinesisAnalyticsOutputDescription#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsOutputDescription#KinesisStreamsOutputDescription
   */
  readonly kinesisStreamsOutputDescription?: KinesisAnalyticsKinesisStreamsOutputDescription;

  /**
   * @schema KinesisAnalyticsOutputDescription#KinesisFirehoseOutputDescription
   */
  readonly kinesisFirehoseOutputDescription?: KinesisAnalyticsKinesisFirehoseOutputDescription;

  /**
   * @schema KinesisAnalyticsOutputDescription#LambdaOutputDescription
   */
  readonly lambdaOutputDescription?: KinesisAnalyticsLambdaOutputDescription;

  /**
   * @schema KinesisAnalyticsOutputDescription#DestinationSchema
   */
  readonly destinationSchema?: KinesisAnalyticsDestinationSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsOutputDescription(obj: KinesisAnalyticsOutputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputId': obj.outputId,
    'Name': obj.name,
    'KinesisStreamsOutputDescription': toJson_KinesisAnalyticsKinesisStreamsOutputDescription(obj.kinesisStreamsOutputDescription),
    'KinesisFirehoseOutputDescription': toJson_KinesisAnalyticsKinesisFirehoseOutputDescription(obj.kinesisFirehoseOutputDescription),
    'LambdaOutputDescription': toJson_KinesisAnalyticsLambdaOutputDescription(obj.lambdaOutputDescription),
    'DestinationSchema': toJson_KinesisAnalyticsDestinationSchema(obj.destinationSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsReferenceDataSourceDescription
 */
export interface KinesisAnalyticsReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#ReferenceId
   */
  readonly referenceId?: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#TableName
   */
  readonly tableName?: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#S3ReferenceDataSourceDescription
   */
  readonly s3ReferenceDataSourceDescription?: KinesisAnalyticsS3ReferenceDataSourceDescription;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceDescription#ReferenceSchema
   */
  readonly referenceSchema?: KinesisAnalyticsSourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsReferenceDataSourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsReferenceDataSourceDescription(obj: KinesisAnalyticsReferenceDataSourceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'TableName': obj.tableName,
    'S3ReferenceDataSourceDescription': toJson_KinesisAnalyticsS3ReferenceDataSourceDescription(obj.s3ReferenceDataSourceDescription),
    'ReferenceSchema': toJson_KinesisAnalyticsSourceSchema(obj.referenceSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription
 */
export interface KinesisAnalyticsCloudWatchLoggingOptionDescription {
  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription#LogStreamARN
   */
  readonly logStreamArn?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsCloudWatchLoggingOptionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsCloudWatchLoggingOptionDescription(obj: KinesisAnalyticsCloudWatchLoggingOptionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLoggingOptionId': obj.cloudWatchLoggingOptionId,
    'LogStreamARN': obj.logStreamArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsRecordFormat
 */
export interface KinesisAnalyticsRecordFormat {
  /**
   * @schema KinesisAnalyticsRecordFormat#RecordFormatType
   */
  readonly recordFormatType?: string;

  /**
   * @schema KinesisAnalyticsRecordFormat#MappingParameters
   */
  readonly mappingParameters?: KinesisAnalyticsMappingParameters;

}

/**
 * Converts an object of type 'KinesisAnalyticsRecordFormat' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsRecordFormat(obj: KinesisAnalyticsRecordFormat | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormatType': obj.recordFormatType,
    'MappingParameters': toJson_KinesisAnalyticsMappingParameters(obj.mappingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsRecordColumn
 */
export interface KinesisAnalyticsRecordColumn {
  /**
   * @schema KinesisAnalyticsRecordColumn#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsRecordColumn#Mapping
   */
  readonly mapping?: string;

  /**
   * @schema KinesisAnalyticsRecordColumn#SqlType
   */
  readonly sqlType?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsRecordColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsRecordColumn(obj: KinesisAnalyticsRecordColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Mapping': obj.mapping,
    'SqlType': obj.sqlType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputUpdate
 */
export interface KinesisAnalyticsInputUpdate {
  /**
   * @schema KinesisAnalyticsInputUpdate#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsInputUpdate#NamePrefixUpdate
   */
  readonly namePrefixUpdate?: string;

  /**
   * @schema KinesisAnalyticsInputUpdate#InputProcessingConfigurationUpdate
   */
  readonly inputProcessingConfigurationUpdate?: KinesisAnalyticsInputProcessingConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#KinesisStreamsInputUpdate
   */
  readonly kinesisStreamsInputUpdate?: KinesisAnalyticsKinesisStreamsInputUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#KinesisFirehoseInputUpdate
   */
  readonly kinesisFirehoseInputUpdate?: KinesisAnalyticsKinesisFirehoseInputUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#InputSchemaUpdate
   */
  readonly inputSchemaUpdate?: KinesisAnalyticsInputSchemaUpdate;

  /**
   * @schema KinesisAnalyticsInputUpdate#InputParallelismUpdate
   */
  readonly inputParallelismUpdate?: KinesisAnalyticsInputParallelismUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputUpdate(obj: KinesisAnalyticsInputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
    'NamePrefixUpdate': obj.namePrefixUpdate,
    'InputProcessingConfigurationUpdate': toJson_KinesisAnalyticsInputProcessingConfigurationUpdate(obj.inputProcessingConfigurationUpdate),
    'KinesisStreamsInputUpdate': toJson_KinesisAnalyticsKinesisStreamsInputUpdate(obj.kinesisStreamsInputUpdate),
    'KinesisFirehoseInputUpdate': toJson_KinesisAnalyticsKinesisFirehoseInputUpdate(obj.kinesisFirehoseInputUpdate),
    'InputSchemaUpdate': toJson_KinesisAnalyticsInputSchemaUpdate(obj.inputSchemaUpdate),
    'InputParallelismUpdate': toJson_KinesisAnalyticsInputParallelismUpdate(obj.inputParallelismUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsOutputUpdate
 */
export interface KinesisAnalyticsOutputUpdate {
  /**
   * @schema KinesisAnalyticsOutputUpdate#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema KinesisAnalyticsOutputUpdate#NameUpdate
   */
  readonly nameUpdate?: string;

  /**
   * @schema KinesisAnalyticsOutputUpdate#KinesisStreamsOutputUpdate
   */
  readonly kinesisStreamsOutputUpdate?: KinesisAnalyticsKinesisStreamsOutputUpdate;

  /**
   * @schema KinesisAnalyticsOutputUpdate#KinesisFirehoseOutputUpdate
   */
  readonly kinesisFirehoseOutputUpdate?: KinesisAnalyticsKinesisFirehoseOutputUpdate;

  /**
   * @schema KinesisAnalyticsOutputUpdate#LambdaOutputUpdate
   */
  readonly lambdaOutputUpdate?: KinesisAnalyticsLambdaOutputUpdate;

  /**
   * @schema KinesisAnalyticsOutputUpdate#DestinationSchemaUpdate
   */
  readonly destinationSchemaUpdate?: KinesisAnalyticsDestinationSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsOutputUpdate(obj: KinesisAnalyticsOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputId': obj.outputId,
    'NameUpdate': obj.nameUpdate,
    'KinesisStreamsOutputUpdate': toJson_KinesisAnalyticsKinesisStreamsOutputUpdate(obj.kinesisStreamsOutputUpdate),
    'KinesisFirehoseOutputUpdate': toJson_KinesisAnalyticsKinesisFirehoseOutputUpdate(obj.kinesisFirehoseOutputUpdate),
    'LambdaOutputUpdate': toJson_KinesisAnalyticsLambdaOutputUpdate(obj.lambdaOutputUpdate),
    'DestinationSchemaUpdate': toJson_KinesisAnalyticsDestinationSchema(obj.destinationSchemaUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#ReferenceId
   */
  readonly referenceId?: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#TableNameUpdate
   */
  readonly tableNameUpdate?: string;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#S3ReferenceDataSourceUpdate
   */
  readonly s3ReferenceDataSourceUpdate?: KinesisAnalyticsS3ReferenceDataSourceUpdate;

  /**
   * @schema KinesisAnalyticsReferenceDataSourceUpdate#ReferenceSchemaUpdate
   */
  readonly referenceSchemaUpdate?: KinesisAnalyticsSourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsReferenceDataSourceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsReferenceDataSourceUpdate(obj: KinesisAnalyticsReferenceDataSourceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'TableNameUpdate': obj.tableNameUpdate,
    'S3ReferenceDataSourceUpdate': toJson_KinesisAnalyticsS3ReferenceDataSourceUpdate(obj.s3ReferenceDataSourceUpdate),
    'ReferenceSchemaUpdate': toJson_KinesisAnalyticsSourceSchema(obj.referenceSchemaUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate
 */
export interface KinesisAnalyticsCloudWatchLoggingOptionUpdate {
  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate#LogStreamARNUpdate
   */
  readonly logStreamArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsCloudWatchLoggingOptionUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsCloudWatchLoggingOptionUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsCloudWatchLoggingOptionUpdate(obj: KinesisAnalyticsCloudWatchLoggingOptionUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLoggingOptionId': obj.cloudWatchLoggingOptionId,
    'LogStreamARNUpdate': obj.logStreamArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputProcessingConfigurationDescription
 */
export interface KinesisAnalyticsInputProcessingConfigurationDescription {
  /**
   * @schema KinesisAnalyticsInputProcessingConfigurationDescription#InputLambdaProcessorDescription
   */
  readonly inputLambdaProcessorDescription?: KinesisAnalyticsInputLambdaProcessorDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputProcessingConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputProcessingConfigurationDescription(obj: KinesisAnalyticsInputProcessingConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLambdaProcessorDescription': toJson_KinesisAnalyticsInputLambdaProcessorDescription(obj.inputLambdaProcessorDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisStreamsInputDescription
 */
export interface KinesisAnalyticsKinesisStreamsInputDescription {
  /**
   * @schema KinesisAnalyticsKinesisStreamsInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisStreamsInputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisStreamsInputDescription(obj: KinesisAnalyticsKinesisStreamsInputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisFirehoseInputDescription
 */
export interface KinesisAnalyticsKinesisFirehoseInputDescription {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisFirehoseInputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisFirehoseInputDescription(obj: KinesisAnalyticsKinesisFirehoseInputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisStreamsOutputDescription
 */
export interface KinesisAnalyticsKinesisStreamsOutputDescription {
  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisStreamsOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisStreamsOutputDescription(obj: KinesisAnalyticsKinesisStreamsOutputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisFirehoseOutputDescription
 */
export interface KinesisAnalyticsKinesisFirehoseOutputDescription {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisFirehoseOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisFirehoseOutputDescription(obj: KinesisAnalyticsKinesisFirehoseOutputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsLambdaOutputDescription
 */
export interface KinesisAnalyticsLambdaOutputDescription {
  /**
   * @schema KinesisAnalyticsLambdaOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsLambdaOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsLambdaOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsLambdaOutputDescription(obj: KinesisAnalyticsLambdaOutputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsS3ReferenceDataSourceDescription
 */
export interface KinesisAnalyticsS3ReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceDescription#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceDescription#FileKey
   */
  readonly fileKey?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceDescription#ReferenceRoleARN
   */
  readonly referenceRoleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsS3ReferenceDataSourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsS3ReferenceDataSourceDescription(obj: KinesisAnalyticsS3ReferenceDataSourceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
    'ReferenceRoleARN': obj.referenceRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsMappingParameters
 */
export interface KinesisAnalyticsMappingParameters {
  /**
   * @schema KinesisAnalyticsMappingParameters#JSONMappingParameters
   */
  readonly jsonMappingParameters?: KinesisAnalyticsJsonMappingParameters;

  /**
   * @schema KinesisAnalyticsMappingParameters#CSVMappingParameters
   */
  readonly csvMappingParameters?: KinesisAnalyticsCsvMappingParameters;

}

/**
 * Converts an object of type 'KinesisAnalyticsMappingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsMappingParameters(obj: KinesisAnalyticsMappingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JSONMappingParameters': toJson_KinesisAnalyticsJsonMappingParameters(obj.jsonMappingParameters),
    'CSVMappingParameters': toJson_KinesisAnalyticsCsvMappingParameters(obj.csvMappingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputProcessingConfigurationUpdate
 */
export interface KinesisAnalyticsInputProcessingConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsInputProcessingConfigurationUpdate#InputLambdaProcessorUpdate
   */
  readonly inputLambdaProcessorUpdate?: KinesisAnalyticsInputLambdaProcessorUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputProcessingConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputProcessingConfigurationUpdate(obj: KinesisAnalyticsInputProcessingConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLambdaProcessorUpdate': toJson_KinesisAnalyticsInputLambdaProcessorUpdate(obj.inputLambdaProcessorUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisStreamsInputUpdate
 */
export interface KinesisAnalyticsKinesisStreamsInputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisStreamsInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsInputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisStreamsInputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisStreamsInputUpdate(obj: KinesisAnalyticsKinesisStreamsInputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisFirehoseInputUpdate
 */
export interface KinesisAnalyticsKinesisFirehoseInputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseInputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisFirehoseInputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisFirehoseInputUpdate(obj: KinesisAnalyticsKinesisFirehoseInputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputSchemaUpdate
 */
export interface KinesisAnalyticsInputSchemaUpdate {
  /**
   * @schema KinesisAnalyticsInputSchemaUpdate#RecordFormatUpdate
   */
  readonly recordFormatUpdate?: KinesisAnalyticsRecordFormat;

  /**
   * @schema KinesisAnalyticsInputSchemaUpdate#RecordEncodingUpdate
   */
  readonly recordEncodingUpdate?: string;

  /**
   * @schema KinesisAnalyticsInputSchemaUpdate#RecordColumnUpdates
   */
  readonly recordColumnUpdates?: KinesisAnalyticsRecordColumn[];

}

/**
 * Converts an object of type 'KinesisAnalyticsInputSchemaUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputSchemaUpdate(obj: KinesisAnalyticsInputSchemaUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormatUpdate': toJson_KinesisAnalyticsRecordFormat(obj.recordFormatUpdate),
    'RecordEncodingUpdate': obj.recordEncodingUpdate,
    'RecordColumnUpdates': obj.recordColumnUpdates?.map(y => toJson_KinesisAnalyticsRecordColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputParallelismUpdate
 */
export interface KinesisAnalyticsInputParallelismUpdate {
  /**
   * @schema KinesisAnalyticsInputParallelismUpdate#CountUpdate
   */
  readonly countUpdate?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputParallelismUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputParallelismUpdate(obj: KinesisAnalyticsInputParallelismUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountUpdate': obj.countUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisStreamsOutputUpdate
 */
export interface KinesisAnalyticsKinesisStreamsOutputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisStreamsOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisStreamsOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisStreamsOutputUpdate(obj: KinesisAnalyticsKinesisStreamsOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsKinesisFirehoseOutputUpdate
 */
export interface KinesisAnalyticsKinesisFirehoseOutputUpdate {
  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsKinesisFirehoseOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsKinesisFirehoseOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsKinesisFirehoseOutputUpdate(obj: KinesisAnalyticsKinesisFirehoseOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsLambdaOutputUpdate
 */
export interface KinesisAnalyticsLambdaOutputUpdate {
  /**
   * @schema KinesisAnalyticsLambdaOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsLambdaOutputUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsLambdaOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsLambdaOutputUpdate(obj: KinesisAnalyticsLambdaOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsS3ReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

  /**
   * @schema KinesisAnalyticsS3ReferenceDataSourceUpdate#ReferenceRoleARNUpdate
   */
  readonly referenceRoleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsS3ReferenceDataSourceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsS3ReferenceDataSourceUpdate(obj: KinesisAnalyticsS3ReferenceDataSourceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARNUpdate': obj.bucketArnUpdate,
    'FileKeyUpdate': obj.fileKeyUpdate,
    'ReferenceRoleARNUpdate': obj.referenceRoleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputLambdaProcessorDescription
 */
export interface KinesisAnalyticsInputLambdaProcessorDescription {
  /**
   * @schema KinesisAnalyticsInputLambdaProcessorDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsInputLambdaProcessorDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputLambdaProcessorDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputLambdaProcessorDescription(obj: KinesisAnalyticsInputLambdaProcessorDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'RoleARN': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsJsonMappingParameters
 */
export interface KinesisAnalyticsJsonMappingParameters {
  /**
   * @schema KinesisAnalyticsJsonMappingParameters#RecordRowPath
   */
  readonly recordRowPath?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsJsonMappingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsJsonMappingParameters(obj: KinesisAnalyticsJsonMappingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordRowPath': obj.recordRowPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsCsvMappingParameters
 */
export interface KinesisAnalyticsCsvMappingParameters {
  /**
   * @schema KinesisAnalyticsCsvMappingParameters#RecordRowDelimiter
   */
  readonly recordRowDelimiter?: string;

  /**
   * @schema KinesisAnalyticsCsvMappingParameters#RecordColumnDelimiter
   */
  readonly recordColumnDelimiter?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsCsvMappingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsCsvMappingParameters(obj: KinesisAnalyticsCsvMappingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordRowDelimiter': obj.recordRowDelimiter,
    'RecordColumnDelimiter': obj.recordColumnDelimiter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsInputLambdaProcessorUpdate
 */
export interface KinesisAnalyticsInputLambdaProcessorUpdate {
  /**
   * @schema KinesisAnalyticsInputLambdaProcessorUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsInputLambdaProcessorUpdate#RoleARNUpdate
   */
  readonly roleArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsInputLambdaProcessorUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsInputLambdaProcessorUpdate(obj: KinesisAnalyticsInputLambdaProcessorUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
    'RoleARNUpdate': obj.roleArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
