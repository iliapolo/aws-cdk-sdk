/**
 * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOption
   */
  readonly cloudWatchLoggingOption?: KinesisAnalyticsV2CloudWatchLoggingOption;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest#ConditionalToken
   */
  readonly conditionalToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest(obj: KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'CloudWatchLoggingOption': toJson_KinesisAnalyticsV2CloudWatchLoggingOption(obj.cloudWatchLoggingOption),
    'ConditionalToken': obj.conditionalToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse(obj: KinesisAnalyticsV2AddApplicationCloudWatchLoggingOptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'CloudWatchLoggingOptionDescriptions': obj.cloudWatchLoggingOptionDescriptions?.map(y => toJson_KinesisAnalyticsV2CloudWatchLoggingOptionDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationInputRequest
 */
export interface KinesisAnalyticsV2AddApplicationInputRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputRequest#Input
   */
  readonly input?: KinesisAnalyticsV2Input;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationInputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationInputRequest(obj: KinesisAnalyticsV2AddApplicationInputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'Input': toJson_KinesisAnalyticsV2Input(obj.input),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationInputResponse
 */
export interface KinesisAnalyticsV2AddApplicationInputResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputResponse#InputDescriptions
   */
  readonly inputDescriptions?: KinesisAnalyticsV2InputDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationInputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationInputResponse(obj: KinesisAnalyticsV2AddApplicationInputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'InputDescriptions': obj.inputDescriptions?.map(y => toJson_KinesisAnalyticsV2InputDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsV2InputProcessingConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest(obj: KinesisAnalyticsV2AddApplicationInputProcessingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'InputId': obj.inputId,
    'InputProcessingConfiguration': toJson_KinesisAnalyticsV2InputProcessingConfiguration(obj.inputProcessingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: KinesisAnalyticsV2InputProcessingConfigurationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse(obj: KinesisAnalyticsV2AddApplicationInputProcessingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'InputId': obj.inputId,
    'InputProcessingConfigurationDescription': toJson_KinesisAnalyticsV2InputProcessingConfigurationDescription(obj.inputProcessingConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationOutputRequest
 */
export interface KinesisAnalyticsV2AddApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputRequest#Output
   */
  readonly output?: KinesisAnalyticsV2Output;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationOutputRequest(obj: KinesisAnalyticsV2AddApplicationOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'Output': toJson_KinesisAnalyticsV2Output(obj.output),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationOutputResponse
 */
export interface KinesisAnalyticsV2AddApplicationOutputResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationOutputResponse#OutputDescriptions
   */
  readonly outputDescriptions?: KinesisAnalyticsV2OutputDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationOutputResponse(obj: KinesisAnalyticsV2AddApplicationOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'OutputDescriptions': obj.outputDescriptions?.map(y => toJson_KinesisAnalyticsV2OutputDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest#ReferenceDataSource
   */
  readonly referenceDataSource?: KinesisAnalyticsV2ReferenceDataSource;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest(obj: KinesisAnalyticsV2AddApplicationReferenceDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'ReferenceDataSource': toJson_KinesisAnalyticsV2ReferenceDataSource(obj.referenceDataSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: KinesisAnalyticsV2ReferenceDataSourceDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse(obj: KinesisAnalyticsV2AddApplicationReferenceDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'ReferenceDataSourceDescriptions': obj.referenceDataSourceDescriptions?.map(y => toJson_KinesisAnalyticsV2ReferenceDataSourceDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest
 */
export interface KinesisAnalyticsV2AddApplicationVpcConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#VpcConfiguration
   */
  readonly vpcConfiguration?: KinesisAnalyticsV2VpcConfiguration;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationRequest#ConditionalToken
   */
  readonly conditionalToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationVpcConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationVpcConfigurationRequest(obj: KinesisAnalyticsV2AddApplicationVpcConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'VpcConfiguration': toJson_KinesisAnalyticsV2VpcConfiguration(obj.vpcConfiguration),
    'ConditionalToken': obj.conditionalToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse
 */
export interface KinesisAnalyticsV2AddApplicationVpcConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2AddApplicationVpcConfigurationResponse#VpcConfigurationDescription
   */
  readonly vpcConfigurationDescription?: KinesisAnalyticsV2VpcConfigurationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2AddApplicationVpcConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2AddApplicationVpcConfigurationResponse(obj: KinesisAnalyticsV2AddApplicationVpcConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'VpcConfigurationDescription': toJson_KinesisAnalyticsV2VpcConfigurationDescription(obj.vpcConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CreateApplicationRequest
 */
export interface KinesisAnalyticsV2CreateApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#RuntimeEnvironment
   */
  readonly runtimeEnvironment?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ServiceExecutionRole
   */
  readonly serviceExecutionRole?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationConfiguration
   */
  readonly applicationConfiguration?: KinesisAnalyticsV2ApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#CloudWatchLoggingOptions
   */
  readonly cloudWatchLoggingOptions?: KinesisAnalyticsV2CloudWatchLoggingOption[];

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#Tags
   */
  readonly tags?: KinesisAnalyticsV2Tag[];

  /**
   * @schema KinesisAnalyticsV2CreateApplicationRequest#ApplicationMode
   */
  readonly applicationMode?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CreateApplicationRequest(obj: KinesisAnalyticsV2CreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationDescription': obj.applicationDescription,
    'RuntimeEnvironment': obj.runtimeEnvironment,
    'ServiceExecutionRole': obj.serviceExecutionRole,
    'ApplicationConfiguration': toJson_KinesisAnalyticsV2ApplicationConfiguration(obj.applicationConfiguration),
    'CloudWatchLoggingOptions': obj.cloudWatchLoggingOptions?.map(y => toJson_KinesisAnalyticsV2CloudWatchLoggingOption(y)),
    'Tags': obj.tags?.map(y => toJson_KinesisAnalyticsV2Tag(y)),
    'ApplicationMode': obj.applicationMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CreateApplicationResponse
 */
export interface KinesisAnalyticsV2CreateApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail?: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CreateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CreateApplicationResponse(obj: KinesisAnalyticsV2CreateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationDetail': toJson_KinesisAnalyticsV2ApplicationDetail(obj.applicationDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest
 */
export interface KinesisAnalyticsV2CreateApplicationPresignedUrlRequest {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest#UrlType
   */
  readonly urlType?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlRequest#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CreateApplicationPresignedUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CreateApplicationPresignedUrlRequest(obj: KinesisAnalyticsV2CreateApplicationPresignedUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'UrlType': obj.urlType,
    'SessionExpirationDurationInSeconds': obj.sessionExpirationDurationInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlResponse
 */
export interface KinesisAnalyticsV2CreateApplicationPresignedUrlResponse {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationPresignedUrlResponse#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CreateApplicationPresignedUrlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CreateApplicationPresignedUrlResponse(obj: KinesisAnalyticsV2CreateApplicationPresignedUrlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizedUrl': obj.authorizedUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CreateApplicationSnapshotRequest
 */
export interface KinesisAnalyticsV2CreateApplicationSnapshotRequest {
  /**
   * @schema KinesisAnalyticsV2CreateApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2CreateApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CreateApplicationSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CreateApplicationSnapshotRequest(obj: KinesisAnalyticsV2CreateApplicationSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'SnapshotName': obj.snapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CreateApplicationSnapshotResponse
 */
export interface KinesisAnalyticsV2CreateApplicationSnapshotResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2CreateApplicationSnapshotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CreateApplicationSnapshotResponse(obj: KinesisAnalyticsV2CreateApplicationSnapshotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationRequest#CreateTimestamp
   */
  readonly createTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationRequest(obj: KinesisAnalyticsV2DeleteApplicationRequest | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2DeleteApplicationResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationResponse(obj: KinesisAnalyticsV2DeleteApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest#ConditionalToken
   */
  readonly conditionalToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest(obj: KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'CloudWatchLoggingOptionId': obj.cloudWatchLoggingOptionId,
    'ConditionalToken': obj.conditionalToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse(obj: KinesisAnalyticsV2DeleteApplicationCloudWatchLoggingOptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
    'CloudWatchLoggingOptionDescriptions': obj.cloudWatchLoggingOptionDescriptions?.map(y => toJson_KinesisAnalyticsV2CloudWatchLoggingOptionDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest#InputId
   */
  readonly inputId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest(obj: KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationRequest | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse(obj: KinesisAnalyticsV2DeleteApplicationInputProcessingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationOutputRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputRequest#OutputId
   */
  readonly outputId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationOutputRequest(obj: KinesisAnalyticsV2DeleteApplicationOutputRequest | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2DeleteApplicationOutputResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationOutputResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationOutputResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationOutputResponse(obj: KinesisAnalyticsV2DeleteApplicationOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest#ReferenceId
   */
  readonly referenceId?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest(obj: KinesisAnalyticsV2DeleteApplicationReferenceDataSourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse(obj: KinesisAnalyticsV2DeleteApplicationReferenceDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationSnapshotRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationSnapshotRequest#SnapshotCreationTimestamp
   */
  readonly snapshotCreationTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationSnapshotRequest(obj: KinesisAnalyticsV2DeleteApplicationSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'SnapshotName': obj.snapshotName,
    'SnapshotCreationTimestamp': obj.snapshotCreationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationSnapshotResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationSnapshotResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationSnapshotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationSnapshotResponse(obj: KinesisAnalyticsV2DeleteApplicationSnapshotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest
 */
export interface KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#VpcConfigurationId
   */
  readonly vpcConfigurationId?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest#ConditionalToken
   */
  readonly conditionalToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest(obj: KinesisAnalyticsV2DeleteApplicationVpcConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'VpcConfigurationId': obj.vpcConfigurationId,
    'ConditionalToken': obj.conditionalToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse
 */
export interface KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse(obj: KinesisAnalyticsV2DeleteApplicationVpcConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationVersionId': obj.applicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DescribeApplicationRequest
 */
export interface KinesisAnalyticsV2DescribeApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DescribeApplicationRequest#IncludeAdditionalDetails
   */
  readonly includeAdditionalDetails?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DescribeApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DescribeApplicationRequest(obj: KinesisAnalyticsV2DescribeApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'IncludeAdditionalDetails': obj.includeAdditionalDetails,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DescribeApplicationResponse
 */
export interface KinesisAnalyticsV2DescribeApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail?: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DescribeApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DescribeApplicationResponse(obj: KinesisAnalyticsV2DescribeApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationDetail': toJson_KinesisAnalyticsV2ApplicationDetail(obj.applicationDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DescribeApplicationSnapshotRequest
 */
export interface KinesisAnalyticsV2DescribeApplicationSnapshotRequest {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationSnapshotRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DescribeApplicationSnapshotRequest#SnapshotName
   */
  readonly snapshotName?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DescribeApplicationSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DescribeApplicationSnapshotRequest(obj: KinesisAnalyticsV2DescribeApplicationSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'SnapshotName': obj.snapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DescribeApplicationSnapshotResponse
 */
export interface KinesisAnalyticsV2DescribeApplicationSnapshotResponse {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationSnapshotResponse#SnapshotDetails
   */
  readonly snapshotDetails?: KinesisAnalyticsV2SnapshotDetails;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DescribeApplicationSnapshotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DescribeApplicationSnapshotResponse(obj: KinesisAnalyticsV2DescribeApplicationSnapshotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotDetails': toJson_KinesisAnalyticsV2SnapshotDetails(obj.snapshotDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DescribeApplicationVersionRequest
 */
export interface KinesisAnalyticsV2DescribeApplicationVersionRequest {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationVersionRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2DescribeApplicationVersionRequest#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DescribeApplicationVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DescribeApplicationVersionRequest(obj: KinesisAnalyticsV2DescribeApplicationVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationVersionId': obj.applicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DescribeApplicationVersionResponse
 */
export interface KinesisAnalyticsV2DescribeApplicationVersionResponse {
  /**
   * @schema KinesisAnalyticsV2DescribeApplicationVersionResponse#ApplicationVersionDetail
   */
  readonly applicationVersionDetail?: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DescribeApplicationVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DescribeApplicationVersionResponse(obj: KinesisAnalyticsV2DescribeApplicationVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationVersionDetail': toJson_KinesisAnalyticsV2ApplicationDetail(obj.applicationVersionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest
 */
export interface KinesisAnalyticsV2DiscoverInputSchemaRequest {
  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#ServiceExecutionRole
   */
  readonly serviceExecutionRole?: string;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsV2InputStartingPositionConfiguration;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#S3Configuration
   */
  readonly s3Configuration?: KinesisAnalyticsV2S3Configuration;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaRequest#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsV2InputProcessingConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DiscoverInputSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DiscoverInputSchemaRequest(obj: KinesisAnalyticsV2DiscoverInputSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'ServiceExecutionRole': obj.serviceExecutionRole,
    'InputStartingPositionConfiguration': toJson_KinesisAnalyticsV2InputStartingPositionConfiguration(obj.inputStartingPositionConfiguration),
    'S3Configuration': toJson_KinesisAnalyticsV2S3Configuration(obj.s3Configuration),
    'InputProcessingConfiguration': toJson_KinesisAnalyticsV2InputProcessingConfiguration(obj.inputProcessingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse
 */
export interface KinesisAnalyticsV2DiscoverInputSchemaResponse {
  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsV2SourceSchema;

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#ParsedInputRecords
   */
  readonly parsedInputRecords?: string[][];

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#ProcessedInputRecords
   */
  readonly processedInputRecords?: string[];

  /**
   * @schema KinesisAnalyticsV2DiscoverInputSchemaResponse#RawInputRecords
   */
  readonly rawInputRecords?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DiscoverInputSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DiscoverInputSchemaResponse(obj: KinesisAnalyticsV2DiscoverInputSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSchema': toJson_KinesisAnalyticsV2SourceSchema(obj.inputSchema),
    'ParsedInputRecords': obj.parsedInputRecords?.map(y => y?.map(y => y)),
    'ProcessedInputRecords': obj.processedInputRecords?.map(y => y),
    'RawInputRecords': obj.rawInputRecords?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest
 */
export interface KinesisAnalyticsV2ListApplicationSnapshotsRequest {
  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListApplicationSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListApplicationSnapshotsRequest(obj: KinesisAnalyticsV2ListApplicationSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListApplicationSnapshotsResponse
 */
export interface KinesisAnalyticsV2ListApplicationSnapshotsResponse {
  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsResponse#SnapshotSummaries
   */
  readonly snapshotSummaries?: KinesisAnalyticsV2SnapshotDetails[];

  /**
   * @schema KinesisAnalyticsV2ListApplicationSnapshotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListApplicationSnapshotsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListApplicationSnapshotsResponse(obj: KinesisAnalyticsV2ListApplicationSnapshotsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotSummaries': obj.snapshotSummaries?.map(y => toJson_KinesisAnalyticsV2SnapshotDetails(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListApplicationVersionsRequest
 */
export interface KinesisAnalyticsV2ListApplicationVersionsRequest {
  /**
   * @schema KinesisAnalyticsV2ListApplicationVersionsRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2ListApplicationVersionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsV2ListApplicationVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListApplicationVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListApplicationVersionsRequest(obj: KinesisAnalyticsV2ListApplicationVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListApplicationVersionsResponse
 */
export interface KinesisAnalyticsV2ListApplicationVersionsResponse {
  /**
   * @schema KinesisAnalyticsV2ListApplicationVersionsResponse#ApplicationVersionSummaries
   */
  readonly applicationVersionSummaries?: KinesisAnalyticsV2ApplicationVersionSummary[];

  /**
   * @schema KinesisAnalyticsV2ListApplicationVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListApplicationVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListApplicationVersionsResponse(obj: KinesisAnalyticsV2ListApplicationVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationVersionSummaries': obj.applicationVersionSummaries?.map(y => toJson_KinesisAnalyticsV2ApplicationVersionSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListApplicationsRequest
 */
export interface KinesisAnalyticsV2ListApplicationsRequest {
  /**
   * @schema KinesisAnalyticsV2ListApplicationsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KinesisAnalyticsV2ListApplicationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListApplicationsRequest(obj: KinesisAnalyticsV2ListApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListApplicationsResponse
 */
export interface KinesisAnalyticsV2ListApplicationsResponse {
  /**
   * @schema KinesisAnalyticsV2ListApplicationsResponse#ApplicationSummaries
   */
  readonly applicationSummaries?: KinesisAnalyticsV2ApplicationSummary[];

  /**
   * @schema KinesisAnalyticsV2ListApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListApplicationsResponse(obj: KinesisAnalyticsV2ListApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationSummaries': obj.applicationSummaries?.map(y => toJson_KinesisAnalyticsV2ApplicationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListTagsForResourceRequest
 */
export interface KinesisAnalyticsV2ListTagsForResourceRequest {
  /**
   * @schema KinesisAnalyticsV2ListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListTagsForResourceRequest(obj: KinesisAnalyticsV2ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ListTagsForResourceResponse
 */
export interface KinesisAnalyticsV2ListTagsForResourceResponse {
  /**
   * @schema KinesisAnalyticsV2ListTagsForResourceResponse#Tags
   */
  readonly tags?: KinesisAnalyticsV2Tag[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ListTagsForResourceResponse(obj: KinesisAnalyticsV2ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_KinesisAnalyticsV2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RollbackApplicationRequest
 */
export interface KinesisAnalyticsV2RollbackApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2RollbackApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2RollbackApplicationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RollbackApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RollbackApplicationRequest(obj: KinesisAnalyticsV2RollbackApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RollbackApplicationResponse
 */
export interface KinesisAnalyticsV2RollbackApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2RollbackApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail?: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RollbackApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RollbackApplicationResponse(obj: KinesisAnalyticsV2RollbackApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationDetail': toJson_KinesisAnalyticsV2ApplicationDetail(obj.applicationDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2StartApplicationRequest
 */
export interface KinesisAnalyticsV2StartApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2StartApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2StartApplicationRequest#RunConfiguration
   */
  readonly runConfiguration?: KinesisAnalyticsV2RunConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2StartApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2StartApplicationRequest(obj: KinesisAnalyticsV2StartApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'RunConfiguration': toJson_KinesisAnalyticsV2RunConfiguration(obj.runConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2StartApplicationResponse
 */
export interface KinesisAnalyticsV2StartApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2StartApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2StartApplicationResponse(obj: KinesisAnalyticsV2StartApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2StopApplicationRequest
 */
export interface KinesisAnalyticsV2StopApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2StopApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2StopApplicationRequest#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2StopApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2StopApplicationRequest(obj: KinesisAnalyticsV2StopApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2StopApplicationResponse
 */
export interface KinesisAnalyticsV2StopApplicationResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2StopApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2StopApplicationResponse(obj: KinesisAnalyticsV2StopApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2TagResourceRequest
 */
export interface KinesisAnalyticsV2TagResourceRequest {
  /**
   * @schema KinesisAnalyticsV2TagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2TagResourceRequest#Tags
   */
  readonly tags?: KinesisAnalyticsV2Tag[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2TagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2TagResourceRequest(obj: KinesisAnalyticsV2TagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_KinesisAnalyticsV2Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2TagResourceResponse
 */
export interface KinesisAnalyticsV2TagResourceResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2TagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2TagResourceResponse(obj: KinesisAnalyticsV2TagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2UntagResourceRequest
 */
export interface KinesisAnalyticsV2UntagResourceRequest {
  /**
   * @schema KinesisAnalyticsV2UntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2UntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2UntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2UntagResourceRequest(obj: KinesisAnalyticsV2UntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2UntagResourceResponse
 */
export interface KinesisAnalyticsV2UntagResourceResponse {
}

/**
 * Converts an object of type 'KinesisAnalyticsV2UntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2UntagResourceResponse(obj: KinesisAnalyticsV2UntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2UpdateApplicationRequest
 */
export interface KinesisAnalyticsV2UpdateApplicationRequest {
  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#CurrentApplicationVersionId
   */
  readonly currentApplicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ApplicationConfigurationUpdate
   */
  readonly applicationConfigurationUpdate?: KinesisAnalyticsV2ApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ServiceExecutionRoleUpdate
   */
  readonly serviceExecutionRoleUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#RunConfigurationUpdate
   */
  readonly runConfigurationUpdate?: KinesisAnalyticsV2RunConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#CloudWatchLoggingOptionUpdates
   */
  readonly cloudWatchLoggingOptionUpdates?: KinesisAnalyticsV2CloudWatchLoggingOptionUpdate[];

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationRequest#ConditionalToken
   */
  readonly conditionalToken?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2UpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2UpdateApplicationRequest(obj: KinesisAnalyticsV2UpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'CurrentApplicationVersionId': obj.currentApplicationVersionId,
    'ApplicationConfigurationUpdate': toJson_KinesisAnalyticsV2ApplicationConfigurationUpdate(obj.applicationConfigurationUpdate),
    'ServiceExecutionRoleUpdate': obj.serviceExecutionRoleUpdate,
    'RunConfigurationUpdate': toJson_KinesisAnalyticsV2RunConfigurationUpdate(obj.runConfigurationUpdate),
    'CloudWatchLoggingOptionUpdates': obj.cloudWatchLoggingOptionUpdates?.map(y => toJson_KinesisAnalyticsV2CloudWatchLoggingOptionUpdate(y)),
    'ConditionalToken': obj.conditionalToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2UpdateApplicationResponse
 */
export interface KinesisAnalyticsV2UpdateApplicationResponse {
  /**
   * @schema KinesisAnalyticsV2UpdateApplicationResponse#ApplicationDetail
   */
  readonly applicationDetail?: KinesisAnalyticsV2ApplicationDetail;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2UpdateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2UpdateApplicationResponse(obj: KinesisAnalyticsV2UpdateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationDetail': toJson_KinesisAnalyticsV2ApplicationDetail(obj.applicationDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest
 */
export interface KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest {
  /**
   * @schema KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest#ApplicationMaintenanceConfigurationUpdate
   */
  readonly applicationMaintenanceConfigurationUpdate?: KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest(obj: KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationMaintenanceConfigurationUpdate': toJson_KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate(obj.applicationMaintenanceConfigurationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse
 */
export interface KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse {
  /**
   * @schema KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse#ApplicationMaintenanceConfigurationDescription
   */
  readonly applicationMaintenanceConfigurationDescription?: KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse(obj: KinesisAnalyticsV2UpdateApplicationMaintenanceConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationMaintenanceConfigurationDescription': toJson_KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription(obj.applicationMaintenanceConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CloudWatchLoggingOption
 */
export interface KinesisAnalyticsV2CloudWatchLoggingOption {
  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOption#LogStreamARN
   */
  readonly logStreamArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CloudWatchLoggingOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CloudWatchLoggingOption(obj: KinesisAnalyticsV2CloudWatchLoggingOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogStreamARN': obj.logStreamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription
 */
export interface KinesisAnalyticsV2CloudWatchLoggingOptionDescription {
  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription#LogStreamARN
   */
  readonly logStreamArn?: string;

  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CloudWatchLoggingOptionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CloudWatchLoggingOptionDescription(obj: KinesisAnalyticsV2CloudWatchLoggingOptionDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2Input
 */
export interface KinesisAnalyticsV2Input {
  /**
   * @schema KinesisAnalyticsV2Input#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema KinesisAnalyticsV2Input#InputProcessingConfiguration
   */
  readonly inputProcessingConfiguration?: KinesisAnalyticsV2InputProcessingConfiguration;

  /**
   * @schema KinesisAnalyticsV2Input#KinesisStreamsInput
   */
  readonly kinesisStreamsInput?: KinesisAnalyticsV2KinesisStreamsInput;

  /**
   * @schema KinesisAnalyticsV2Input#KinesisFirehoseInput
   */
  readonly kinesisFirehoseInput?: KinesisAnalyticsV2KinesisFirehoseInput;

  /**
   * @schema KinesisAnalyticsV2Input#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsV2InputParallelism;

  /**
   * @schema KinesisAnalyticsV2Input#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsV2SourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2Input' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2Input(obj: KinesisAnalyticsV2Input | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NamePrefix': obj.namePrefix,
    'InputProcessingConfiguration': toJson_KinesisAnalyticsV2InputProcessingConfiguration(obj.inputProcessingConfiguration),
    'KinesisStreamsInput': toJson_KinesisAnalyticsV2KinesisStreamsInput(obj.kinesisStreamsInput),
    'KinesisFirehoseInput': toJson_KinesisAnalyticsV2KinesisFirehoseInput(obj.kinesisFirehoseInput),
    'InputParallelism': toJson_KinesisAnalyticsV2InputParallelism(obj.inputParallelism),
    'InputSchema': toJson_KinesisAnalyticsV2SourceSchema(obj.inputSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputDescription
 */
export interface KinesisAnalyticsV2InputDescription {
  /**
   * @schema KinesisAnalyticsV2InputDescription#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2InputDescription#NamePrefix
   */
  readonly namePrefix?: string;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InAppStreamNames
   */
  readonly inAppStreamNames?: string[];

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputProcessingConfigurationDescription
   */
  readonly inputProcessingConfigurationDescription?: KinesisAnalyticsV2InputProcessingConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2InputDescription#KinesisStreamsInputDescription
   */
  readonly kinesisStreamsInputDescription?: KinesisAnalyticsV2KinesisStreamsInputDescription;

  /**
   * @schema KinesisAnalyticsV2InputDescription#KinesisFirehoseInputDescription
   */
  readonly kinesisFirehoseInputDescription?: KinesisAnalyticsV2KinesisFirehoseInputDescription;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputSchema
   */
  readonly inputSchema?: KinesisAnalyticsV2SourceSchema;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputParallelism
   */
  readonly inputParallelism?: KinesisAnalyticsV2InputParallelism;

  /**
   * @schema KinesisAnalyticsV2InputDescription#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsV2InputStartingPositionConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputDescription(obj: KinesisAnalyticsV2InputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
    'NamePrefix': obj.namePrefix,
    'InAppStreamNames': obj.inAppStreamNames?.map(y => y),
    'InputProcessingConfigurationDescription': toJson_KinesisAnalyticsV2InputProcessingConfigurationDescription(obj.inputProcessingConfigurationDescription),
    'KinesisStreamsInputDescription': toJson_KinesisAnalyticsV2KinesisStreamsInputDescription(obj.kinesisStreamsInputDescription),
    'KinesisFirehoseInputDescription': toJson_KinesisAnalyticsV2KinesisFirehoseInputDescription(obj.kinesisFirehoseInputDescription),
    'InputSchema': toJson_KinesisAnalyticsV2SourceSchema(obj.inputSchema),
    'InputParallelism': toJson_KinesisAnalyticsV2InputParallelism(obj.inputParallelism),
    'InputStartingPositionConfiguration': toJson_KinesisAnalyticsV2InputStartingPositionConfiguration(obj.inputStartingPositionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputProcessingConfiguration
 */
export interface KinesisAnalyticsV2InputProcessingConfiguration {
  /**
   * @schema KinesisAnalyticsV2InputProcessingConfiguration#InputLambdaProcessor
   */
  readonly inputLambdaProcessor?: KinesisAnalyticsV2InputLambdaProcessor;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputProcessingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputProcessingConfiguration(obj: KinesisAnalyticsV2InputProcessingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLambdaProcessor': toJson_KinesisAnalyticsV2InputLambdaProcessor(obj.inputLambdaProcessor),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputProcessingConfigurationDescription
 */
export interface KinesisAnalyticsV2InputProcessingConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2InputProcessingConfigurationDescription#InputLambdaProcessorDescription
   */
  readonly inputLambdaProcessorDescription?: KinesisAnalyticsV2InputLambdaProcessorDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputProcessingConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputProcessingConfigurationDescription(obj: KinesisAnalyticsV2InputProcessingConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLambdaProcessorDescription': toJson_KinesisAnalyticsV2InputLambdaProcessorDescription(obj.inputLambdaProcessorDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2Output
 */
export interface KinesisAnalyticsV2Output {
  /**
   * @schema KinesisAnalyticsV2Output#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsV2Output#KinesisStreamsOutput
   */
  readonly kinesisStreamsOutput?: KinesisAnalyticsV2KinesisStreamsOutput;

  /**
   * @schema KinesisAnalyticsV2Output#KinesisFirehoseOutput
   */
  readonly kinesisFirehoseOutput?: KinesisAnalyticsV2KinesisFirehoseOutput;

  /**
   * @schema KinesisAnalyticsV2Output#LambdaOutput
   */
  readonly lambdaOutput?: KinesisAnalyticsV2LambdaOutput;

  /**
   * @schema KinesisAnalyticsV2Output#DestinationSchema
   */
  readonly destinationSchema?: KinesisAnalyticsV2DestinationSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2Output' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2Output(obj: KinesisAnalyticsV2Output | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'KinesisStreamsOutput': toJson_KinesisAnalyticsV2KinesisStreamsOutput(obj.kinesisStreamsOutput),
    'KinesisFirehoseOutput': toJson_KinesisAnalyticsV2KinesisFirehoseOutput(obj.kinesisFirehoseOutput),
    'LambdaOutput': toJson_KinesisAnalyticsV2LambdaOutput(obj.lambdaOutput),
    'DestinationSchema': toJson_KinesisAnalyticsV2DestinationSchema(obj.destinationSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2OutputDescription
 */
export interface KinesisAnalyticsV2OutputDescription {
  /**
   * @schema KinesisAnalyticsV2OutputDescription#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#KinesisStreamsOutputDescription
   */
  readonly kinesisStreamsOutputDescription?: KinesisAnalyticsV2KinesisStreamsOutputDescription;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#KinesisFirehoseOutputDescription
   */
  readonly kinesisFirehoseOutputDescription?: KinesisAnalyticsV2KinesisFirehoseOutputDescription;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#LambdaOutputDescription
   */
  readonly lambdaOutputDescription?: KinesisAnalyticsV2LambdaOutputDescription;

  /**
   * @schema KinesisAnalyticsV2OutputDescription#DestinationSchema
   */
  readonly destinationSchema?: KinesisAnalyticsV2DestinationSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2OutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2OutputDescription(obj: KinesisAnalyticsV2OutputDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputId': obj.outputId,
    'Name': obj.name,
    'KinesisStreamsOutputDescription': toJson_KinesisAnalyticsV2KinesisStreamsOutputDescription(obj.kinesisStreamsOutputDescription),
    'KinesisFirehoseOutputDescription': toJson_KinesisAnalyticsV2KinesisFirehoseOutputDescription(obj.kinesisFirehoseOutputDescription),
    'LambdaOutputDescription': toJson_KinesisAnalyticsV2LambdaOutputDescription(obj.lambdaOutputDescription),
    'DestinationSchema': toJson_KinesisAnalyticsV2DestinationSchema(obj.destinationSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ReferenceDataSource
 */
export interface KinesisAnalyticsV2ReferenceDataSource {
  /**
   * @schema KinesisAnalyticsV2ReferenceDataSource#TableName
   */
  readonly tableName?: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSource#S3ReferenceDataSource
   */
  readonly s3ReferenceDataSource?: KinesisAnalyticsV2S3ReferenceDataSource;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSource#ReferenceSchema
   */
  readonly referenceSchema?: KinesisAnalyticsV2SourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ReferenceDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ReferenceDataSource(obj: KinesisAnalyticsV2ReferenceDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TableName': obj.tableName,
    'S3ReferenceDataSource': toJson_KinesisAnalyticsV2S3ReferenceDataSource(obj.s3ReferenceDataSource),
    'ReferenceSchema': toJson_KinesisAnalyticsV2SourceSchema(obj.referenceSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ReferenceDataSourceDescription
 */
export interface KinesisAnalyticsV2ReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#ReferenceId
   */
  readonly referenceId?: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#TableName
   */
  readonly tableName?: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#S3ReferenceDataSourceDescription
   */
  readonly s3ReferenceDataSourceDescription?: KinesisAnalyticsV2S3ReferenceDataSourceDescription;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceDescription#ReferenceSchema
   */
  readonly referenceSchema?: KinesisAnalyticsV2SourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ReferenceDataSourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ReferenceDataSourceDescription(obj: KinesisAnalyticsV2ReferenceDataSourceDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'TableName': obj.tableName,
    'S3ReferenceDataSourceDescription': toJson_KinesisAnalyticsV2S3ReferenceDataSourceDescription(obj.s3ReferenceDataSourceDescription),
    'ReferenceSchema': toJson_KinesisAnalyticsV2SourceSchema(obj.referenceSchema),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2VpcConfiguration
 */
export interface KinesisAnalyticsV2VpcConfiguration {
  /**
   * @schema KinesisAnalyticsV2VpcConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema KinesisAnalyticsV2VpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2VpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2VpcConfiguration(obj: KinesisAnalyticsV2VpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2VpcConfigurationDescription
 */
export interface KinesisAnalyticsV2VpcConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#VpcConfigurationId
   */
  readonly vpcConfigurationId?: string;

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationDescription#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2VpcConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2VpcConfigurationDescription(obj: KinesisAnalyticsV2VpcConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcConfigurationId': obj.vpcConfigurationId,
    'VpcId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationConfiguration
 */
export interface KinesisAnalyticsV2ApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#SqlApplicationConfiguration
   */
  readonly sqlApplicationConfiguration?: KinesisAnalyticsV2SqlApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#FlinkApplicationConfiguration
   */
  readonly flinkApplicationConfiguration?: KinesisAnalyticsV2FlinkApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#EnvironmentProperties
   */
  readonly environmentProperties?: KinesisAnalyticsV2EnvironmentProperties;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#ApplicationCodeConfiguration
   */
  readonly applicationCodeConfiguration?: KinesisAnalyticsV2ApplicationCodeConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#ApplicationSnapshotConfiguration
   */
  readonly applicationSnapshotConfiguration?: KinesisAnalyticsV2ApplicationSnapshotConfiguration;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#VpcConfigurations
   */
  readonly vpcConfigurations?: KinesisAnalyticsV2VpcConfiguration[];

  /**
   * @schema KinesisAnalyticsV2ApplicationConfiguration#ZeppelinApplicationConfiguration
   */
  readonly zeppelinApplicationConfiguration?: KinesisAnalyticsV2ZeppelinApplicationConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationConfiguration(obj: KinesisAnalyticsV2ApplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlApplicationConfiguration': toJson_KinesisAnalyticsV2SqlApplicationConfiguration(obj.sqlApplicationConfiguration),
    'FlinkApplicationConfiguration': toJson_KinesisAnalyticsV2FlinkApplicationConfiguration(obj.flinkApplicationConfiguration),
    'EnvironmentProperties': toJson_KinesisAnalyticsV2EnvironmentProperties(obj.environmentProperties),
    'ApplicationCodeConfiguration': toJson_KinesisAnalyticsV2ApplicationCodeConfiguration(obj.applicationCodeConfiguration),
    'ApplicationSnapshotConfiguration': toJson_KinesisAnalyticsV2ApplicationSnapshotConfiguration(obj.applicationSnapshotConfiguration),
    'VpcConfigurations': obj.vpcConfigurations?.map(y => toJson_KinesisAnalyticsV2VpcConfiguration(y)),
    'ZeppelinApplicationConfiguration': toJson_KinesisAnalyticsV2ZeppelinApplicationConfiguration(obj.zeppelinApplicationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2Tag
 */
export interface KinesisAnalyticsV2Tag {
  /**
   * @schema KinesisAnalyticsV2Tag#Key
   */
  readonly key?: string;

  /**
   * @schema KinesisAnalyticsV2Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2Tag(obj: KinesisAnalyticsV2Tag | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2ApplicationDetail
 */
export interface KinesisAnalyticsV2ApplicationDetail {
  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationDescription
   */
  readonly applicationDescription?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#RuntimeEnvironment
   */
  readonly runtimeEnvironment?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ServiceExecutionRole
   */
  readonly serviceExecutionRole?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationStatus
   */
  readonly applicationStatus?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#CreateTimestamp
   */
  readonly createTimestamp?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationConfigurationDescription
   */
  readonly applicationConfigurationDescription?: KinesisAnalyticsV2ApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#CloudWatchLoggingOptionDescriptions
   */
  readonly cloudWatchLoggingOptionDescriptions?: KinesisAnalyticsV2CloudWatchLoggingOptionDescription[];

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationMaintenanceConfigurationDescription
   */
  readonly applicationMaintenanceConfigurationDescription?: KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationVersionUpdatedFrom
   */
  readonly applicationVersionUpdatedFrom?: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationVersionRolledBackFrom
   */
  readonly applicationVersionRolledBackFrom?: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ConditionalToken
   */
  readonly conditionalToken?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationVersionRolledBackTo
   */
  readonly applicationVersionRolledBackTo?: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationDetail#ApplicationMode
   */
  readonly applicationMode?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationDetail(obj: KinesisAnalyticsV2ApplicationDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationARN': obj.applicationArn,
    'ApplicationDescription': obj.applicationDescription,
    'ApplicationName': obj.applicationName,
    'RuntimeEnvironment': obj.runtimeEnvironment,
    'ServiceExecutionRole': obj.serviceExecutionRole,
    'ApplicationStatus': obj.applicationStatus,
    'ApplicationVersionId': obj.applicationVersionId,
    'CreateTimestamp': obj.createTimestamp,
    'LastUpdateTimestamp': obj.lastUpdateTimestamp,
    'ApplicationConfigurationDescription': toJson_KinesisAnalyticsV2ApplicationConfigurationDescription(obj.applicationConfigurationDescription),
    'CloudWatchLoggingOptionDescriptions': obj.cloudWatchLoggingOptionDescriptions?.map(y => toJson_KinesisAnalyticsV2CloudWatchLoggingOptionDescription(y)),
    'ApplicationMaintenanceConfigurationDescription': toJson_KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription(obj.applicationMaintenanceConfigurationDescription),
    'ApplicationVersionUpdatedFrom': obj.applicationVersionUpdatedFrom,
    'ApplicationVersionRolledBackFrom': obj.applicationVersionRolledBackFrom,
    'ConditionalToken': obj.conditionalToken,
    'ApplicationVersionRolledBackTo': obj.applicationVersionRolledBackTo,
    'ApplicationMode': obj.applicationMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2SnapshotDetails
 */
export interface KinesisAnalyticsV2SnapshotDetails {
  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#SnapshotName
   */
  readonly snapshotName?: string;

  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#SnapshotStatus
   */
  readonly snapshotStatus?: string;

  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2SnapshotDetails#SnapshotCreationTimestamp
   */
  readonly snapshotCreationTimestamp?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2SnapshotDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2SnapshotDetails(obj: KinesisAnalyticsV2SnapshotDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotName': obj.snapshotName,
    'SnapshotStatus': obj.snapshotStatus,
    'ApplicationVersionId': obj.applicationVersionId,
    'SnapshotCreationTimestamp': obj.snapshotCreationTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputStartingPositionConfiguration
 */
export interface KinesisAnalyticsV2InputStartingPositionConfiguration {
  /**
   * @schema KinesisAnalyticsV2InputStartingPositionConfiguration#InputStartingPosition
   */
  readonly inputStartingPosition?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputStartingPositionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputStartingPositionConfiguration(obj: KinesisAnalyticsV2InputStartingPositionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputStartingPosition': obj.inputStartingPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3Configuration
 */
export interface KinesisAnalyticsV2S3Configuration {
  /**
   * @schema KinesisAnalyticsV2S3Configuration#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3Configuration#FileKey
   */
  readonly fileKey?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3Configuration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3Configuration(obj: KinesisAnalyticsV2S3Configuration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2SourceSchema
 */
export interface KinesisAnalyticsV2SourceSchema {
  /**
   * @schema KinesisAnalyticsV2SourceSchema#RecordFormat
   */
  readonly recordFormat?: KinesisAnalyticsV2RecordFormat;

  /**
   * @schema KinesisAnalyticsV2SourceSchema#RecordEncoding
   */
  readonly recordEncoding?: string;

  /**
   * @schema KinesisAnalyticsV2SourceSchema#RecordColumns
   */
  readonly recordColumns?: KinesisAnalyticsV2RecordColumn[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2SourceSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2SourceSchema(obj: KinesisAnalyticsV2SourceSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormat': toJson_KinesisAnalyticsV2RecordFormat(obj.recordFormat),
    'RecordEncoding': obj.recordEncoding,
    'RecordColumns': obj.recordColumns?.map(y => toJson_KinesisAnalyticsV2RecordColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationVersionSummary
 */
export interface KinesisAnalyticsV2ApplicationVersionSummary {
  /**
   * @schema KinesisAnalyticsV2ApplicationVersionSummary#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationVersionSummary#ApplicationStatus
   */
  readonly applicationStatus?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationVersionSummary(obj: KinesisAnalyticsV2ApplicationVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationVersionId': obj.applicationVersionId,
    'ApplicationStatus': obj.applicationStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationSummary
 */
export interface KinesisAnalyticsV2ApplicationSummary {
  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationName
   */
  readonly applicationName?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationARN
   */
  readonly applicationArn?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationStatus
   */
  readonly applicationStatus?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationVersionId
   */
  readonly applicationVersionId?: number;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#RuntimeEnvironment
   */
  readonly runtimeEnvironment?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationSummary#ApplicationMode
   */
  readonly applicationMode?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationSummary(obj: KinesisAnalyticsV2ApplicationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationName': obj.applicationName,
    'ApplicationARN': obj.applicationArn,
    'ApplicationStatus': obj.applicationStatus,
    'ApplicationVersionId': obj.applicationVersionId,
    'RuntimeEnvironment': obj.runtimeEnvironment,
    'ApplicationMode': obj.applicationMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RunConfiguration
 */
export interface KinesisAnalyticsV2RunConfiguration {
  /**
   * @schema KinesisAnalyticsV2RunConfiguration#FlinkRunConfiguration
   */
  readonly flinkRunConfiguration?: KinesisAnalyticsV2FlinkRunConfiguration;

  /**
   * @schema KinesisAnalyticsV2RunConfiguration#SqlRunConfigurations
   */
  readonly sqlRunConfigurations?: KinesisAnalyticsV2SqlRunConfiguration[];

  /**
   * @schema KinesisAnalyticsV2RunConfiguration#ApplicationRestoreConfiguration
   */
  readonly applicationRestoreConfiguration?: KinesisAnalyticsV2ApplicationRestoreConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RunConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RunConfiguration(obj: KinesisAnalyticsV2RunConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlinkRunConfiguration': toJson_KinesisAnalyticsV2FlinkRunConfiguration(obj.flinkRunConfiguration),
    'SqlRunConfigurations': obj.sqlRunConfigurations?.map(y => toJson_KinesisAnalyticsV2SqlRunConfiguration(y)),
    'ApplicationRestoreConfiguration': toJson_KinesisAnalyticsV2ApplicationRestoreConfiguration(obj.applicationRestoreConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#SqlApplicationConfigurationUpdate
   */
  readonly sqlApplicationConfigurationUpdate?: KinesisAnalyticsV2SqlApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#ApplicationCodeConfigurationUpdate
   */
  readonly applicationCodeConfigurationUpdate?: KinesisAnalyticsV2ApplicationCodeConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#FlinkApplicationConfigurationUpdate
   */
  readonly flinkApplicationConfigurationUpdate?: KinesisAnalyticsV2FlinkApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#EnvironmentPropertyUpdates
   */
  readonly environmentPropertyUpdates?: KinesisAnalyticsV2EnvironmentPropertyUpdates;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#ApplicationSnapshotConfigurationUpdate
   */
  readonly applicationSnapshotConfigurationUpdate?: KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#VpcConfigurationUpdates
   */
  readonly vpcConfigurationUpdates?: KinesisAnalyticsV2VpcConfigurationUpdate[];

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationUpdate#ZeppelinApplicationConfigurationUpdate
   */
  readonly zeppelinApplicationConfigurationUpdate?: KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationConfigurationUpdate(obj: KinesisAnalyticsV2ApplicationConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlApplicationConfigurationUpdate': toJson_KinesisAnalyticsV2SqlApplicationConfigurationUpdate(obj.sqlApplicationConfigurationUpdate),
    'ApplicationCodeConfigurationUpdate': toJson_KinesisAnalyticsV2ApplicationCodeConfigurationUpdate(obj.applicationCodeConfigurationUpdate),
    'FlinkApplicationConfigurationUpdate': toJson_KinesisAnalyticsV2FlinkApplicationConfigurationUpdate(obj.flinkApplicationConfigurationUpdate),
    'EnvironmentPropertyUpdates': toJson_KinesisAnalyticsV2EnvironmentPropertyUpdates(obj.environmentPropertyUpdates),
    'ApplicationSnapshotConfigurationUpdate': toJson_KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate(obj.applicationSnapshotConfigurationUpdate),
    'VpcConfigurationUpdates': obj.vpcConfigurationUpdates?.map(y => toJson_KinesisAnalyticsV2VpcConfigurationUpdate(y)),
    'ZeppelinApplicationConfigurationUpdate': toJson_KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate(obj.zeppelinApplicationConfigurationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RunConfigurationUpdate
 */
export interface KinesisAnalyticsV2RunConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2RunConfigurationUpdate#FlinkRunConfiguration
   */
  readonly flinkRunConfiguration?: KinesisAnalyticsV2FlinkRunConfiguration;

  /**
   * @schema KinesisAnalyticsV2RunConfigurationUpdate#ApplicationRestoreConfiguration
   */
  readonly applicationRestoreConfiguration?: KinesisAnalyticsV2ApplicationRestoreConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RunConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RunConfigurationUpdate(obj: KinesisAnalyticsV2RunConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlinkRunConfiguration': toJson_KinesisAnalyticsV2FlinkRunConfiguration(obj.flinkRunConfiguration),
    'ApplicationRestoreConfiguration': toJson_KinesisAnalyticsV2ApplicationRestoreConfiguration(obj.applicationRestoreConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CloudWatchLoggingOptionUpdate
 */
export interface KinesisAnalyticsV2CloudWatchLoggingOptionUpdate {
  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionUpdate#CloudWatchLoggingOptionId
   */
  readonly cloudWatchLoggingOptionId?: string;

  /**
   * @schema KinesisAnalyticsV2CloudWatchLoggingOptionUpdate#LogStreamARNUpdate
   */
  readonly logStreamArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CloudWatchLoggingOptionUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CloudWatchLoggingOptionUpdate(obj: KinesisAnalyticsV2CloudWatchLoggingOptionUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLoggingOptionId': obj.cloudWatchLoggingOptionId,
    'LogStreamARNUpdate': obj.logStreamArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate#ApplicationMaintenanceWindowStartTimeUpdate
   */
  readonly applicationMaintenanceWindowStartTimeUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate(obj: KinesisAnalyticsV2ApplicationMaintenanceConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationMaintenanceWindowStartTimeUpdate': obj.applicationMaintenanceWindowStartTimeUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription#ApplicationMaintenanceWindowStartTime
   */
  readonly applicationMaintenanceWindowStartTime?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription#ApplicationMaintenanceWindowEndTime
   */
  readonly applicationMaintenanceWindowEndTime?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription(obj: KinesisAnalyticsV2ApplicationMaintenanceConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationMaintenanceWindowStartTime': obj.applicationMaintenanceWindowStartTime,
    'ApplicationMaintenanceWindowEndTime': obj.applicationMaintenanceWindowEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisStreamsInput
 */
export interface KinesisAnalyticsV2KinesisStreamsInput {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisStreamsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisStreamsInput(obj: KinesisAnalyticsV2KinesisStreamsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseInput
 */
export interface KinesisAnalyticsV2KinesisFirehoseInput {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisFirehoseInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisFirehoseInput(obj: KinesisAnalyticsV2KinesisFirehoseInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputParallelism
 */
export interface KinesisAnalyticsV2InputParallelism {
  /**
   * @schema KinesisAnalyticsV2InputParallelism#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputParallelism' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputParallelism(obj: KinesisAnalyticsV2InputParallelism | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisStreamsInputDescription
 */
export interface KinesisAnalyticsV2KinesisStreamsInputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisStreamsInputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisStreamsInputDescription(obj: KinesisAnalyticsV2KinesisStreamsInputDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2KinesisFirehoseInputDescription
 */
export interface KinesisAnalyticsV2KinesisFirehoseInputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisFirehoseInputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisFirehoseInputDescription(obj: KinesisAnalyticsV2KinesisFirehoseInputDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2InputLambdaProcessor
 */
export interface KinesisAnalyticsV2InputLambdaProcessor {
  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessor#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputLambdaProcessor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputLambdaProcessor(obj: KinesisAnalyticsV2InputLambdaProcessor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputLambdaProcessorDescription
 */
export interface KinesisAnalyticsV2InputLambdaProcessorDescription {
  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessorDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessorDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputLambdaProcessorDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputLambdaProcessorDescription(obj: KinesisAnalyticsV2InputLambdaProcessorDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2KinesisStreamsOutput
 */
export interface KinesisAnalyticsV2KinesisStreamsOutput {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisStreamsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisStreamsOutput(obj: KinesisAnalyticsV2KinesisStreamsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseOutput
 */
export interface KinesisAnalyticsV2KinesisFirehoseOutput {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisFirehoseOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisFirehoseOutput(obj: KinesisAnalyticsV2KinesisFirehoseOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2LambdaOutput
 */
export interface KinesisAnalyticsV2LambdaOutput {
  /**
   * @schema KinesisAnalyticsV2LambdaOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2LambdaOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2LambdaOutput(obj: KinesisAnalyticsV2LambdaOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DestinationSchema
 */
export interface KinesisAnalyticsV2DestinationSchema {
  /**
   * @schema KinesisAnalyticsV2DestinationSchema#RecordFormatType
   */
  readonly recordFormatType?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DestinationSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DestinationSchema(obj: KinesisAnalyticsV2DestinationSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormatType': obj.recordFormatType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisStreamsOutputDescription
 */
export interface KinesisAnalyticsV2KinesisStreamsOutputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisStreamsOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisStreamsOutputDescription(obj: KinesisAnalyticsV2KinesisStreamsOutputDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2KinesisFirehoseOutputDescription
 */
export interface KinesisAnalyticsV2KinesisFirehoseOutputDescription {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisFirehoseOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisFirehoseOutputDescription(obj: KinesisAnalyticsV2KinesisFirehoseOutputDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2LambdaOutputDescription
 */
export interface KinesisAnalyticsV2LambdaOutputDescription {
  /**
   * @schema KinesisAnalyticsV2LambdaOutputDescription#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema KinesisAnalyticsV2LambdaOutputDescription#RoleARN
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2LambdaOutputDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2LambdaOutputDescription(obj: KinesisAnalyticsV2LambdaOutputDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2S3ReferenceDataSource
 */
export interface KinesisAnalyticsV2S3ReferenceDataSource {
  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSource#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSource#FileKey
   */
  readonly fileKey?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ReferenceDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ReferenceDataSource(obj: KinesisAnalyticsV2S3ReferenceDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription
 */
export interface KinesisAnalyticsV2S3ReferenceDataSourceDescription {
  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription#FileKey
   */
  readonly fileKey?: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceDescription#ReferenceRoleARN
   */
  readonly referenceRoleArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ReferenceDataSourceDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ReferenceDataSourceDescription(obj: KinesisAnalyticsV2S3ReferenceDataSourceDescription | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2SqlApplicationConfiguration
 */
export interface KinesisAnalyticsV2SqlApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfiguration#Inputs
   */
  readonly inputs?: KinesisAnalyticsV2Input[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfiguration#Outputs
   */
  readonly outputs?: KinesisAnalyticsV2Output[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfiguration#ReferenceDataSources
   */
  readonly referenceDataSources?: KinesisAnalyticsV2ReferenceDataSource[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2SqlApplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2SqlApplicationConfiguration(obj: KinesisAnalyticsV2SqlApplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Inputs': obj.inputs?.map(y => toJson_KinesisAnalyticsV2Input(y)),
    'Outputs': obj.outputs?.map(y => toJson_KinesisAnalyticsV2Output(y)),
    'ReferenceDataSources': obj.referenceDataSources?.map(y => toJson_KinesisAnalyticsV2ReferenceDataSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2FlinkApplicationConfiguration
 */
export interface KinesisAnalyticsV2FlinkApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfiguration#CheckpointConfiguration
   */
  readonly checkpointConfiguration?: KinesisAnalyticsV2CheckpointConfiguration;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfiguration#MonitoringConfiguration
   */
  readonly monitoringConfiguration?: KinesisAnalyticsV2MonitoringConfiguration;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfiguration#ParallelismConfiguration
   */
  readonly parallelismConfiguration?: KinesisAnalyticsV2ParallelismConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2FlinkApplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2FlinkApplicationConfiguration(obj: KinesisAnalyticsV2FlinkApplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CheckpointConfiguration': toJson_KinesisAnalyticsV2CheckpointConfiguration(obj.checkpointConfiguration),
    'MonitoringConfiguration': toJson_KinesisAnalyticsV2MonitoringConfiguration(obj.monitoringConfiguration),
    'ParallelismConfiguration': toJson_KinesisAnalyticsV2ParallelismConfiguration(obj.parallelismConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2EnvironmentProperties
 */
export interface KinesisAnalyticsV2EnvironmentProperties {
  /**
   * @schema KinesisAnalyticsV2EnvironmentProperties#PropertyGroups
   */
  readonly propertyGroups?: KinesisAnalyticsV2PropertyGroup[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2EnvironmentProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2EnvironmentProperties(obj: KinesisAnalyticsV2EnvironmentProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PropertyGroups': obj.propertyGroups?.map(y => toJson_KinesisAnalyticsV2PropertyGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationCodeConfiguration
 */
export interface KinesisAnalyticsV2ApplicationCodeConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfiguration#CodeContent
   */
  readonly codeContent?: KinesisAnalyticsV2CodeContent;

  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfiguration#CodeContentType
   */
  readonly codeContentType?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationCodeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationCodeConfiguration(obj: KinesisAnalyticsV2ApplicationCodeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeContent': toJson_KinesisAnalyticsV2CodeContent(obj.codeContent),
    'CodeContentType': obj.codeContentType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationSnapshotConfiguration
 */
export interface KinesisAnalyticsV2ApplicationSnapshotConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationSnapshotConfiguration#SnapshotsEnabled
   */
  readonly snapshotsEnabled?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationSnapshotConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationSnapshotConfiguration(obj: KinesisAnalyticsV2ApplicationSnapshotConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotsEnabled': obj.snapshotsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ZeppelinApplicationConfiguration
 */
export interface KinesisAnalyticsV2ZeppelinApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfiguration#MonitoringConfiguration
   */
  readonly monitoringConfiguration?: KinesisAnalyticsV2ZeppelinMonitoringConfiguration;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfiguration#CatalogConfiguration
   */
  readonly catalogConfiguration?: KinesisAnalyticsV2CatalogConfiguration;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfiguration#DeployAsApplicationConfiguration
   */
  readonly deployAsApplicationConfiguration?: KinesisAnalyticsV2DeployAsApplicationConfiguration;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfiguration#CustomArtifactsConfiguration
   */
  readonly customArtifactsConfiguration?: KinesisAnalyticsV2CustomArtifactConfiguration[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ZeppelinApplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ZeppelinApplicationConfiguration(obj: KinesisAnalyticsV2ZeppelinApplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MonitoringConfiguration': toJson_KinesisAnalyticsV2ZeppelinMonitoringConfiguration(obj.monitoringConfiguration),
    'CatalogConfiguration': toJson_KinesisAnalyticsV2CatalogConfiguration(obj.catalogConfiguration),
    'DeployAsApplicationConfiguration': toJson_KinesisAnalyticsV2DeployAsApplicationConfiguration(obj.deployAsApplicationConfiguration),
    'CustomArtifactsConfiguration': obj.customArtifactsConfiguration?.map(y => toJson_KinesisAnalyticsV2CustomArtifactConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#SqlApplicationConfigurationDescription
   */
  readonly sqlApplicationConfigurationDescription?: KinesisAnalyticsV2SqlApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#ApplicationCodeConfigurationDescription
   */
  readonly applicationCodeConfigurationDescription?: KinesisAnalyticsV2ApplicationCodeConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#RunConfigurationDescription
   */
  readonly runConfigurationDescription?: KinesisAnalyticsV2RunConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#FlinkApplicationConfigurationDescription
   */
  readonly flinkApplicationConfigurationDescription?: KinesisAnalyticsV2FlinkApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#EnvironmentPropertyDescriptions
   */
  readonly environmentPropertyDescriptions?: KinesisAnalyticsV2EnvironmentPropertyDescriptions;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#ApplicationSnapshotConfigurationDescription
   */
  readonly applicationSnapshotConfigurationDescription?: KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#VpcConfigurationDescriptions
   */
  readonly vpcConfigurationDescriptions?: KinesisAnalyticsV2VpcConfigurationDescription[];

  /**
   * @schema KinesisAnalyticsV2ApplicationConfigurationDescription#ZeppelinApplicationConfigurationDescription
   */
  readonly zeppelinApplicationConfigurationDescription?: KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationConfigurationDescription(obj: KinesisAnalyticsV2ApplicationConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SqlApplicationConfigurationDescription': toJson_KinesisAnalyticsV2SqlApplicationConfigurationDescription(obj.sqlApplicationConfigurationDescription),
    'ApplicationCodeConfigurationDescription': toJson_KinesisAnalyticsV2ApplicationCodeConfigurationDescription(obj.applicationCodeConfigurationDescription),
    'RunConfigurationDescription': toJson_KinesisAnalyticsV2RunConfigurationDescription(obj.runConfigurationDescription),
    'FlinkApplicationConfigurationDescription': toJson_KinesisAnalyticsV2FlinkApplicationConfigurationDescription(obj.flinkApplicationConfigurationDescription),
    'EnvironmentPropertyDescriptions': toJson_KinesisAnalyticsV2EnvironmentPropertyDescriptions(obj.environmentPropertyDescriptions),
    'ApplicationSnapshotConfigurationDescription': toJson_KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription(obj.applicationSnapshotConfigurationDescription),
    'VpcConfigurationDescriptions': obj.vpcConfigurationDescriptions?.map(y => toJson_KinesisAnalyticsV2VpcConfigurationDescription(y)),
    'ZeppelinApplicationConfigurationDescription': toJson_KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription(obj.zeppelinApplicationConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RecordFormat
 */
export interface KinesisAnalyticsV2RecordFormat {
  /**
   * @schema KinesisAnalyticsV2RecordFormat#RecordFormatType
   */
  readonly recordFormatType?: string;

  /**
   * @schema KinesisAnalyticsV2RecordFormat#MappingParameters
   */
  readonly mappingParameters?: KinesisAnalyticsV2MappingParameters;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RecordFormat' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RecordFormat(obj: KinesisAnalyticsV2RecordFormat | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormatType': obj.recordFormatType,
    'MappingParameters': toJson_KinesisAnalyticsV2MappingParameters(obj.mappingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RecordColumn
 */
export interface KinesisAnalyticsV2RecordColumn {
  /**
   * @schema KinesisAnalyticsV2RecordColumn#Name
   */
  readonly name?: string;

  /**
   * @schema KinesisAnalyticsV2RecordColumn#Mapping
   */
  readonly mapping?: string;

  /**
   * @schema KinesisAnalyticsV2RecordColumn#SqlType
   */
  readonly sqlType?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RecordColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RecordColumn(obj: KinesisAnalyticsV2RecordColumn | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2FlinkRunConfiguration
 */
export interface KinesisAnalyticsV2FlinkRunConfiguration {
  /**
   * @schema KinesisAnalyticsV2FlinkRunConfiguration#AllowNonRestoredState
   */
  readonly allowNonRestoredState?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2FlinkRunConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2FlinkRunConfiguration(obj: KinesisAnalyticsV2FlinkRunConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowNonRestoredState': obj.allowNonRestoredState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2SqlRunConfiguration
 */
export interface KinesisAnalyticsV2SqlRunConfiguration {
  /**
   * @schema KinesisAnalyticsV2SqlRunConfiguration#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2SqlRunConfiguration#InputStartingPositionConfiguration
   */
  readonly inputStartingPositionConfiguration?: KinesisAnalyticsV2InputStartingPositionConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2SqlRunConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2SqlRunConfiguration(obj: KinesisAnalyticsV2SqlRunConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
    'InputStartingPositionConfiguration': toJson_KinesisAnalyticsV2InputStartingPositionConfiguration(obj.inputStartingPositionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationRestoreConfiguration
 */
export interface KinesisAnalyticsV2ApplicationRestoreConfiguration {
  /**
   * @schema KinesisAnalyticsV2ApplicationRestoreConfiguration#ApplicationRestoreType
   */
  readonly applicationRestoreType?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationRestoreConfiguration#SnapshotName
   */
  readonly snapshotName?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationRestoreConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationRestoreConfiguration(obj: KinesisAnalyticsV2ApplicationRestoreConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationRestoreType': obj.applicationRestoreType,
    'SnapshotName': obj.snapshotName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2SqlApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate#InputUpdates
   */
  readonly inputUpdates?: KinesisAnalyticsV2InputUpdate[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate#OutputUpdates
   */
  readonly outputUpdates?: KinesisAnalyticsV2OutputUpdate[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationUpdate#ReferenceDataSourceUpdates
   */
  readonly referenceDataSourceUpdates?: KinesisAnalyticsV2ReferenceDataSourceUpdate[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2SqlApplicationConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2SqlApplicationConfigurationUpdate(obj: KinesisAnalyticsV2SqlApplicationConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputUpdates': obj.inputUpdates?.map(y => toJson_KinesisAnalyticsV2InputUpdate(y)),
    'OutputUpdates': obj.outputUpdates?.map(y => toJson_KinesisAnalyticsV2OutputUpdate(y)),
    'ReferenceDataSourceUpdates': obj.referenceDataSourceUpdates?.map(y => toJson_KinesisAnalyticsV2ReferenceDataSourceUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationCodeConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationCodeConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationUpdate#CodeContentTypeUpdate
   */
  readonly codeContentTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationUpdate#CodeContentUpdate
   */
  readonly codeContentUpdate?: KinesisAnalyticsV2CodeContentUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationCodeConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationCodeConfigurationUpdate(obj: KinesisAnalyticsV2ApplicationCodeConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeContentTypeUpdate': obj.codeContentTypeUpdate,
    'CodeContentUpdate': toJson_KinesisAnalyticsV2CodeContentUpdate(obj.codeContentUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2FlinkApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate#CheckpointConfigurationUpdate
   */
  readonly checkpointConfigurationUpdate?: KinesisAnalyticsV2CheckpointConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate#MonitoringConfigurationUpdate
   */
  readonly monitoringConfigurationUpdate?: KinesisAnalyticsV2MonitoringConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationUpdate#ParallelismConfigurationUpdate
   */
  readonly parallelismConfigurationUpdate?: KinesisAnalyticsV2ParallelismConfigurationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2FlinkApplicationConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2FlinkApplicationConfigurationUpdate(obj: KinesisAnalyticsV2FlinkApplicationConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CheckpointConfigurationUpdate': toJson_KinesisAnalyticsV2CheckpointConfigurationUpdate(obj.checkpointConfigurationUpdate),
    'MonitoringConfigurationUpdate': toJson_KinesisAnalyticsV2MonitoringConfigurationUpdate(obj.monitoringConfigurationUpdate),
    'ParallelismConfigurationUpdate': toJson_KinesisAnalyticsV2ParallelismConfigurationUpdate(obj.parallelismConfigurationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2EnvironmentPropertyUpdates
 */
export interface KinesisAnalyticsV2EnvironmentPropertyUpdates {
  /**
   * @schema KinesisAnalyticsV2EnvironmentPropertyUpdates#PropertyGroups
   */
  readonly propertyGroups?: KinesisAnalyticsV2PropertyGroup[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2EnvironmentPropertyUpdates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2EnvironmentPropertyUpdates(obj: KinesisAnalyticsV2EnvironmentPropertyUpdates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PropertyGroups': obj.propertyGroups?.map(y => toJson_KinesisAnalyticsV2PropertyGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate
 */
export interface KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate#SnapshotsEnabledUpdate
   */
  readonly snapshotsEnabledUpdate?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate(obj: KinesisAnalyticsV2ApplicationSnapshotConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotsEnabledUpdate': obj.snapshotsEnabledUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2VpcConfigurationUpdate
 */
export interface KinesisAnalyticsV2VpcConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2VpcConfigurationUpdate#VpcConfigurationId
   */
  readonly vpcConfigurationId?: string;

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationUpdate#SubnetIdUpdates
   */
  readonly subnetIdUpdates?: string[];

  /**
   * @schema KinesisAnalyticsV2VpcConfigurationUpdate#SecurityGroupIdUpdates
   */
  readonly securityGroupIdUpdates?: string[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2VpcConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2VpcConfigurationUpdate(obj: KinesisAnalyticsV2VpcConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcConfigurationId': obj.vpcConfigurationId,
    'SubnetIdUpdates': obj.subnetIdUpdates?.map(y => y),
    'SecurityGroupIdUpdates': obj.securityGroupIdUpdates?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate#MonitoringConfigurationUpdate
   */
  readonly monitoringConfigurationUpdate?: KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate#CatalogConfigurationUpdate
   */
  readonly catalogConfigurationUpdate?: KinesisAnalyticsV2CatalogConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate#DeployAsApplicationConfigurationUpdate
   */
  readonly deployAsApplicationConfigurationUpdate?: KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate#CustomArtifactsConfigurationUpdate
   */
  readonly customArtifactsConfigurationUpdate?: KinesisAnalyticsV2CustomArtifactConfiguration[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate(obj: KinesisAnalyticsV2ZeppelinApplicationConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MonitoringConfigurationUpdate': toJson_KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate(obj.monitoringConfigurationUpdate),
    'CatalogConfigurationUpdate': toJson_KinesisAnalyticsV2CatalogConfigurationUpdate(obj.catalogConfigurationUpdate),
    'DeployAsApplicationConfigurationUpdate': toJson_KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate(obj.deployAsApplicationConfigurationUpdate),
    'CustomArtifactsConfigurationUpdate': obj.customArtifactsConfigurationUpdate?.map(y => toJson_KinesisAnalyticsV2CustomArtifactConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CheckpointConfiguration
 */
export interface KinesisAnalyticsV2CheckpointConfiguration {
  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#CheckpointingEnabled
   */
  readonly checkpointingEnabled?: boolean;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#CheckpointInterval
   */
  readonly checkpointInterval?: number;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfiguration#MinPauseBetweenCheckpoints
   */
  readonly minPauseBetweenCheckpoints?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CheckpointConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CheckpointConfiguration(obj: KinesisAnalyticsV2CheckpointConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationType': obj.configurationType,
    'CheckpointingEnabled': obj.checkpointingEnabled,
    'CheckpointInterval': obj.checkpointInterval,
    'MinPauseBetweenCheckpoints': obj.minPauseBetweenCheckpoints,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2MonitoringConfiguration
 */
export interface KinesisAnalyticsV2MonitoringConfiguration {
  /**
   * @schema KinesisAnalyticsV2MonitoringConfiguration#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfiguration#MetricsLevel
   */
  readonly metricsLevel?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfiguration#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2MonitoringConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2MonitoringConfiguration(obj: KinesisAnalyticsV2MonitoringConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationType': obj.configurationType,
    'MetricsLevel': obj.metricsLevel,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ParallelismConfiguration
 */
export interface KinesisAnalyticsV2ParallelismConfiguration {
  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#Parallelism
   */
  readonly parallelism?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#ParallelismPerKPU
   */
  readonly parallelismPerKpu?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfiguration#AutoScalingEnabled
   */
  readonly autoScalingEnabled?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ParallelismConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ParallelismConfiguration(obj: KinesisAnalyticsV2ParallelismConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationType': obj.configurationType,
    'Parallelism': obj.parallelism,
    'ParallelismPerKPU': obj.parallelismPerKpu,
    'AutoScalingEnabled': obj.autoScalingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2PropertyGroup
 */
export interface KinesisAnalyticsV2PropertyGroup {
  /**
   * @schema KinesisAnalyticsV2PropertyGroup#PropertyGroupId
   */
  readonly propertyGroupId?: string;

  /**
   * @schema KinesisAnalyticsV2PropertyGroup#PropertyMap
   */
  readonly propertyMap?: { [key: string]: string };

}

/**
 * Converts an object of type 'KinesisAnalyticsV2PropertyGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2PropertyGroup(obj: KinesisAnalyticsV2PropertyGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PropertyGroupId': obj.propertyGroupId,
    'PropertyMap': ((obj.propertyMap) === undefined) ? undefined : (Object.entries(obj.propertyMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CodeContent
 */
export interface KinesisAnalyticsV2CodeContent {
  /**
   * @schema KinesisAnalyticsV2CodeContent#TextContent
   */
  readonly textContent?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContent#ZipFileContent
   */
  readonly zipFileContent?: any;

  /**
   * @schema KinesisAnalyticsV2CodeContent#S3ContentLocation
   */
  readonly s3ContentLocation?: KinesisAnalyticsV2S3ContentLocation;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CodeContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CodeContent(obj: KinesisAnalyticsV2CodeContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextContent': obj.textContent,
    'ZipFileContent': obj.zipFileContent,
    'S3ContentLocation': toJson_KinesisAnalyticsV2S3ContentLocation(obj.s3ContentLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ZeppelinMonitoringConfiguration
 */
export interface KinesisAnalyticsV2ZeppelinMonitoringConfiguration {
  /**
   * @schema KinesisAnalyticsV2ZeppelinMonitoringConfiguration#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ZeppelinMonitoringConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ZeppelinMonitoringConfiguration(obj: KinesisAnalyticsV2ZeppelinMonitoringConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CatalogConfiguration
 */
export interface KinesisAnalyticsV2CatalogConfiguration {
  /**
   * @schema KinesisAnalyticsV2CatalogConfiguration#GlueDataCatalogConfiguration
   */
  readonly glueDataCatalogConfiguration?: KinesisAnalyticsV2GlueDataCatalogConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CatalogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CatalogConfiguration(obj: KinesisAnalyticsV2CatalogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlueDataCatalogConfiguration': toJson_KinesisAnalyticsV2GlueDataCatalogConfiguration(obj.glueDataCatalogConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeployAsApplicationConfiguration
 */
export interface KinesisAnalyticsV2DeployAsApplicationConfiguration {
  /**
   * @schema KinesisAnalyticsV2DeployAsApplicationConfiguration#S3ContentLocation
   */
  readonly s3ContentLocation?: KinesisAnalyticsV2S3ContentBaseLocation;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeployAsApplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeployAsApplicationConfiguration(obj: KinesisAnalyticsV2DeployAsApplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3ContentLocation': toJson_KinesisAnalyticsV2S3ContentBaseLocation(obj.s3ContentLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CustomArtifactConfiguration
 */
export interface KinesisAnalyticsV2CustomArtifactConfiguration {
  /**
   * @schema KinesisAnalyticsV2CustomArtifactConfiguration#ArtifactType
   */
  readonly artifactType?: string;

  /**
   * @schema KinesisAnalyticsV2CustomArtifactConfiguration#S3ContentLocation
   */
  readonly s3ContentLocation?: KinesisAnalyticsV2S3ContentLocation;

  /**
   * @schema KinesisAnalyticsV2CustomArtifactConfiguration#MavenReference
   */
  readonly mavenReference?: KinesisAnalyticsV2MavenReference;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CustomArtifactConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CustomArtifactConfiguration(obj: KinesisAnalyticsV2CustomArtifactConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArtifactType': obj.artifactType,
    'S3ContentLocation': toJson_KinesisAnalyticsV2S3ContentLocation(obj.s3ContentLocation),
    'MavenReference': toJson_KinesisAnalyticsV2MavenReference(obj.mavenReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2SqlApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription#InputDescriptions
   */
  readonly inputDescriptions?: KinesisAnalyticsV2InputDescription[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription#OutputDescriptions
   */
  readonly outputDescriptions?: KinesisAnalyticsV2OutputDescription[];

  /**
   * @schema KinesisAnalyticsV2SqlApplicationConfigurationDescription#ReferenceDataSourceDescriptions
   */
  readonly referenceDataSourceDescriptions?: KinesisAnalyticsV2ReferenceDataSourceDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2SqlApplicationConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2SqlApplicationConfigurationDescription(obj: KinesisAnalyticsV2SqlApplicationConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDescriptions': obj.inputDescriptions?.map(y => toJson_KinesisAnalyticsV2InputDescription(y)),
    'OutputDescriptions': obj.outputDescriptions?.map(y => toJson_KinesisAnalyticsV2OutputDescription(y)),
    'ReferenceDataSourceDescriptions': obj.referenceDataSourceDescriptions?.map(y => toJson_KinesisAnalyticsV2ReferenceDataSourceDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationCodeConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationCodeConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationDescription#CodeContentType
   */
  readonly codeContentType?: string;

  /**
   * @schema KinesisAnalyticsV2ApplicationCodeConfigurationDescription#CodeContentDescription
   */
  readonly codeContentDescription?: KinesisAnalyticsV2CodeContentDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationCodeConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationCodeConfigurationDescription(obj: KinesisAnalyticsV2ApplicationCodeConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CodeContentType': obj.codeContentType,
    'CodeContentDescription': toJson_KinesisAnalyticsV2CodeContentDescription(obj.codeContentDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2RunConfigurationDescription
 */
export interface KinesisAnalyticsV2RunConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2RunConfigurationDescription#ApplicationRestoreConfigurationDescription
   */
  readonly applicationRestoreConfigurationDescription?: KinesisAnalyticsV2ApplicationRestoreConfiguration;

  /**
   * @schema KinesisAnalyticsV2RunConfigurationDescription#FlinkRunConfigurationDescription
   */
  readonly flinkRunConfigurationDescription?: KinesisAnalyticsV2FlinkRunConfiguration;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2RunConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2RunConfigurationDescription(obj: KinesisAnalyticsV2RunConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplicationRestoreConfigurationDescription': toJson_KinesisAnalyticsV2ApplicationRestoreConfiguration(obj.applicationRestoreConfigurationDescription),
    'FlinkRunConfigurationDescription': toJson_KinesisAnalyticsV2FlinkRunConfiguration(obj.flinkRunConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2FlinkApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#CheckpointConfigurationDescription
   */
  readonly checkpointConfigurationDescription?: KinesisAnalyticsV2CheckpointConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#MonitoringConfigurationDescription
   */
  readonly monitoringConfigurationDescription?: KinesisAnalyticsV2MonitoringConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#ParallelismConfigurationDescription
   */
  readonly parallelismConfigurationDescription?: KinesisAnalyticsV2ParallelismConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2FlinkApplicationConfigurationDescription#JobPlanDescription
   */
  readonly jobPlanDescription?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2FlinkApplicationConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2FlinkApplicationConfigurationDescription(obj: KinesisAnalyticsV2FlinkApplicationConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CheckpointConfigurationDescription': toJson_KinesisAnalyticsV2CheckpointConfigurationDescription(obj.checkpointConfigurationDescription),
    'MonitoringConfigurationDescription': toJson_KinesisAnalyticsV2MonitoringConfigurationDescription(obj.monitoringConfigurationDescription),
    'ParallelismConfigurationDescription': toJson_KinesisAnalyticsV2ParallelismConfigurationDescription(obj.parallelismConfigurationDescription),
    'JobPlanDescription': obj.jobPlanDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2EnvironmentPropertyDescriptions
 */
export interface KinesisAnalyticsV2EnvironmentPropertyDescriptions {
  /**
   * @schema KinesisAnalyticsV2EnvironmentPropertyDescriptions#PropertyGroupDescriptions
   */
  readonly propertyGroupDescriptions?: KinesisAnalyticsV2PropertyGroup[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2EnvironmentPropertyDescriptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2EnvironmentPropertyDescriptions(obj: KinesisAnalyticsV2EnvironmentPropertyDescriptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PropertyGroupDescriptions': obj.propertyGroupDescriptions?.map(y => toJson_KinesisAnalyticsV2PropertyGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription
 */
export interface KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription#SnapshotsEnabled
   */
  readonly snapshotsEnabled?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription(obj: KinesisAnalyticsV2ApplicationSnapshotConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotsEnabled': obj.snapshotsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription#MonitoringConfigurationDescription
   */
  readonly monitoringConfigurationDescription?: KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription#CatalogConfigurationDescription
   */
  readonly catalogConfigurationDescription?: KinesisAnalyticsV2CatalogConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription#DeployAsApplicationConfigurationDescription
   */
  readonly deployAsApplicationConfigurationDescription?: KinesisAnalyticsV2DeployAsApplicationConfigurationDescription;

  /**
   * @schema KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription#CustomArtifactsConfigurationDescription
   */
  readonly customArtifactsConfigurationDescription?: KinesisAnalyticsV2CustomArtifactConfigurationDescription[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription(obj: KinesisAnalyticsV2ZeppelinApplicationConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MonitoringConfigurationDescription': toJson_KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription(obj.monitoringConfigurationDescription),
    'CatalogConfigurationDescription': toJson_KinesisAnalyticsV2CatalogConfigurationDescription(obj.catalogConfigurationDescription),
    'DeployAsApplicationConfigurationDescription': toJson_KinesisAnalyticsV2DeployAsApplicationConfigurationDescription(obj.deployAsApplicationConfigurationDescription),
    'CustomArtifactsConfigurationDescription': obj.customArtifactsConfigurationDescription?.map(y => toJson_KinesisAnalyticsV2CustomArtifactConfigurationDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2MappingParameters
 */
export interface KinesisAnalyticsV2MappingParameters {
  /**
   * @schema KinesisAnalyticsV2MappingParameters#JSONMappingParameters
   */
  readonly jsonMappingParameters?: KinesisAnalyticsV2JsonMappingParameters;

  /**
   * @schema KinesisAnalyticsV2MappingParameters#CSVMappingParameters
   */
  readonly csvMappingParameters?: KinesisAnalyticsV2CsvMappingParameters;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2MappingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2MappingParameters(obj: KinesisAnalyticsV2MappingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JSONMappingParameters': toJson_KinesisAnalyticsV2JsonMappingParameters(obj.jsonMappingParameters),
    'CSVMappingParameters': toJson_KinesisAnalyticsV2CsvMappingParameters(obj.csvMappingParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputUpdate
 */
export interface KinesisAnalyticsV2InputUpdate {
  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputId
   */
  readonly inputId?: string;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#NamePrefixUpdate
   */
  readonly namePrefixUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputProcessingConfigurationUpdate
   */
  readonly inputProcessingConfigurationUpdate?: KinesisAnalyticsV2InputProcessingConfigurationUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#KinesisStreamsInputUpdate
   */
  readonly kinesisStreamsInputUpdate?: KinesisAnalyticsV2KinesisStreamsInputUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#KinesisFirehoseInputUpdate
   */
  readonly kinesisFirehoseInputUpdate?: KinesisAnalyticsV2KinesisFirehoseInputUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputSchemaUpdate
   */
  readonly inputSchemaUpdate?: KinesisAnalyticsV2InputSchemaUpdate;

  /**
   * @schema KinesisAnalyticsV2InputUpdate#InputParallelismUpdate
   */
  readonly inputParallelismUpdate?: KinesisAnalyticsV2InputParallelismUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputUpdate(obj: KinesisAnalyticsV2InputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputId': obj.inputId,
    'NamePrefixUpdate': obj.namePrefixUpdate,
    'InputProcessingConfigurationUpdate': toJson_KinesisAnalyticsV2InputProcessingConfigurationUpdate(obj.inputProcessingConfigurationUpdate),
    'KinesisStreamsInputUpdate': toJson_KinesisAnalyticsV2KinesisStreamsInputUpdate(obj.kinesisStreamsInputUpdate),
    'KinesisFirehoseInputUpdate': toJson_KinesisAnalyticsV2KinesisFirehoseInputUpdate(obj.kinesisFirehoseInputUpdate),
    'InputSchemaUpdate': toJson_KinesisAnalyticsV2InputSchemaUpdate(obj.inputSchemaUpdate),
    'InputParallelismUpdate': toJson_KinesisAnalyticsV2InputParallelismUpdate(obj.inputParallelismUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2OutputUpdate
 */
export interface KinesisAnalyticsV2OutputUpdate {
  /**
   * @schema KinesisAnalyticsV2OutputUpdate#OutputId
   */
  readonly outputId?: string;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#NameUpdate
   */
  readonly nameUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#KinesisStreamsOutputUpdate
   */
  readonly kinesisStreamsOutputUpdate?: KinesisAnalyticsV2KinesisStreamsOutputUpdate;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#KinesisFirehoseOutputUpdate
   */
  readonly kinesisFirehoseOutputUpdate?: KinesisAnalyticsV2KinesisFirehoseOutputUpdate;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#LambdaOutputUpdate
   */
  readonly lambdaOutputUpdate?: KinesisAnalyticsV2LambdaOutputUpdate;

  /**
   * @schema KinesisAnalyticsV2OutputUpdate#DestinationSchemaUpdate
   */
  readonly destinationSchemaUpdate?: KinesisAnalyticsV2DestinationSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2OutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2OutputUpdate(obj: KinesisAnalyticsV2OutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputId': obj.outputId,
    'NameUpdate': obj.nameUpdate,
    'KinesisStreamsOutputUpdate': toJson_KinesisAnalyticsV2KinesisStreamsOutputUpdate(obj.kinesisStreamsOutputUpdate),
    'KinesisFirehoseOutputUpdate': toJson_KinesisAnalyticsV2KinesisFirehoseOutputUpdate(obj.kinesisFirehoseOutputUpdate),
    'LambdaOutputUpdate': toJson_KinesisAnalyticsV2LambdaOutputUpdate(obj.lambdaOutputUpdate),
    'DestinationSchemaUpdate': toJson_KinesisAnalyticsV2DestinationSchema(obj.destinationSchemaUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsV2ReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#ReferenceId
   */
  readonly referenceId?: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#TableNameUpdate
   */
  readonly tableNameUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#S3ReferenceDataSourceUpdate
   */
  readonly s3ReferenceDataSourceUpdate?: KinesisAnalyticsV2S3ReferenceDataSourceUpdate;

  /**
   * @schema KinesisAnalyticsV2ReferenceDataSourceUpdate#ReferenceSchemaUpdate
   */
  readonly referenceSchemaUpdate?: KinesisAnalyticsV2SourceSchema;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ReferenceDataSourceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ReferenceDataSourceUpdate(obj: KinesisAnalyticsV2ReferenceDataSourceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReferenceId': obj.referenceId,
    'TableNameUpdate': obj.tableNameUpdate,
    'S3ReferenceDataSourceUpdate': toJson_KinesisAnalyticsV2S3ReferenceDataSourceUpdate(obj.s3ReferenceDataSourceUpdate),
    'ReferenceSchemaUpdate': toJson_KinesisAnalyticsV2SourceSchema(obj.referenceSchemaUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CodeContentUpdate
 */
export interface KinesisAnalyticsV2CodeContentUpdate {
  /**
   * @schema KinesisAnalyticsV2CodeContentUpdate#TextContentUpdate
   */
  readonly textContentUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContentUpdate#ZipFileContentUpdate
   */
  readonly zipFileContentUpdate?: any;

  /**
   * @schema KinesisAnalyticsV2CodeContentUpdate#S3ContentLocationUpdate
   */
  readonly s3ContentLocationUpdate?: KinesisAnalyticsV2S3ContentLocationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CodeContentUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CodeContentUpdate(obj: KinesisAnalyticsV2CodeContentUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextContentUpdate': obj.textContentUpdate,
    'ZipFileContentUpdate': obj.zipFileContentUpdate,
    'S3ContentLocationUpdate': toJson_KinesisAnalyticsV2S3ContentLocationUpdate(obj.s3ContentLocationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate
 */
export interface KinesisAnalyticsV2CheckpointConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#CheckpointingEnabledUpdate
   */
  readonly checkpointingEnabledUpdate?: boolean;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#CheckpointIntervalUpdate
   */
  readonly checkpointIntervalUpdate?: number;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationUpdate#MinPauseBetweenCheckpointsUpdate
   */
  readonly minPauseBetweenCheckpointsUpdate?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CheckpointConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CheckpointConfigurationUpdate(obj: KinesisAnalyticsV2CheckpointConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationTypeUpdate': obj.configurationTypeUpdate,
    'CheckpointingEnabledUpdate': obj.checkpointingEnabledUpdate,
    'CheckpointIntervalUpdate': obj.checkpointIntervalUpdate,
    'MinPauseBetweenCheckpointsUpdate': obj.minPauseBetweenCheckpointsUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate
 */
export interface KinesisAnalyticsV2MonitoringConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate#MetricsLevelUpdate
   */
  readonly metricsLevelUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationUpdate#LogLevelUpdate
   */
  readonly logLevelUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2MonitoringConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2MonitoringConfigurationUpdate(obj: KinesisAnalyticsV2MonitoringConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationTypeUpdate': obj.configurationTypeUpdate,
    'MetricsLevelUpdate': obj.metricsLevelUpdate,
    'LogLevelUpdate': obj.logLevelUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate
 */
export interface KinesisAnalyticsV2ParallelismConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#ConfigurationTypeUpdate
   */
  readonly configurationTypeUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#ParallelismUpdate
   */
  readonly parallelismUpdate?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#ParallelismPerKPUUpdate
   */
  readonly parallelismPerKpuUpdate?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationUpdate#AutoScalingEnabledUpdate
   */
  readonly autoScalingEnabledUpdate?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ParallelismConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ParallelismConfigurationUpdate(obj: KinesisAnalyticsV2ParallelismConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationTypeUpdate': obj.configurationTypeUpdate,
    'ParallelismUpdate': obj.parallelismUpdate,
    'ParallelismPerKPUUpdate': obj.parallelismPerKpuUpdate,
    'AutoScalingEnabledUpdate': obj.autoScalingEnabledUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate
 */
export interface KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate#LogLevelUpdate
   */
  readonly logLevelUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate(obj: KinesisAnalyticsV2ZeppelinMonitoringConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogLevelUpdate': obj.logLevelUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CatalogConfigurationUpdate
 */
export interface KinesisAnalyticsV2CatalogConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2CatalogConfigurationUpdate#GlueDataCatalogConfigurationUpdate
   */
  readonly glueDataCatalogConfigurationUpdate?: KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CatalogConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CatalogConfigurationUpdate(obj: KinesisAnalyticsV2CatalogConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlueDataCatalogConfigurationUpdate': toJson_KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate(obj.glueDataCatalogConfigurationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate
 */
export interface KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate#S3ContentLocationUpdate
   */
  readonly s3ContentLocationUpdate?: KinesisAnalyticsV2S3ContentBaseLocationUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate(obj: KinesisAnalyticsV2DeployAsApplicationConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3ContentLocationUpdate': toJson_KinesisAnalyticsV2S3ContentBaseLocationUpdate(obj.s3ContentLocationUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ContentLocation
 */
export interface KinesisAnalyticsV2S3ContentLocation {
  /**
   * @schema KinesisAnalyticsV2S3ContentLocation#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocation#FileKey
   */
  readonly fileKey?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocation#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ContentLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ContentLocation(obj: KinesisAnalyticsV2S3ContentLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
    'ObjectVersion': obj.objectVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2GlueDataCatalogConfiguration
 */
export interface KinesisAnalyticsV2GlueDataCatalogConfiguration {
  /**
   * @schema KinesisAnalyticsV2GlueDataCatalogConfiguration#DatabaseARN
   */
  readonly databaseArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2GlueDataCatalogConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2GlueDataCatalogConfiguration(obj: KinesisAnalyticsV2GlueDataCatalogConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseARN': obj.databaseArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ContentBaseLocation
 */
export interface KinesisAnalyticsV2S3ContentBaseLocation {
  /**
   * @schema KinesisAnalyticsV2S3ContentBaseLocation#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentBaseLocation#BasePath
   */
  readonly basePath?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ContentBaseLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ContentBaseLocation(obj: KinesisAnalyticsV2S3ContentBaseLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'BasePath': obj.basePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2MavenReference
 */
export interface KinesisAnalyticsV2MavenReference {
  /**
   * @schema KinesisAnalyticsV2MavenReference#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema KinesisAnalyticsV2MavenReference#ArtifactId
   */
  readonly artifactId?: string;

  /**
   * @schema KinesisAnalyticsV2MavenReference#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2MavenReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2MavenReference(obj: KinesisAnalyticsV2MavenReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'ArtifactId': obj.artifactId,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CodeContentDescription
 */
export interface KinesisAnalyticsV2CodeContentDescription {
  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#TextContent
   */
  readonly textContent?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#CodeMD5
   */
  readonly codeMd5?: string;

  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#CodeSize
   */
  readonly codeSize?: number;

  /**
   * @schema KinesisAnalyticsV2CodeContentDescription#S3ApplicationCodeLocationDescription
   */
  readonly s3ApplicationCodeLocationDescription?: KinesisAnalyticsV2S3ApplicationCodeLocationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CodeContentDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CodeContentDescription(obj: KinesisAnalyticsV2CodeContentDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextContent': obj.textContent,
    'CodeMD5': obj.codeMd5,
    'CodeSize': obj.codeSize,
    'S3ApplicationCodeLocationDescription': toJson_KinesisAnalyticsV2S3ApplicationCodeLocationDescription(obj.s3ApplicationCodeLocationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CheckpointConfigurationDescription
 */
export interface KinesisAnalyticsV2CheckpointConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#CheckpointingEnabled
   */
  readonly checkpointingEnabled?: boolean;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#CheckpointInterval
   */
  readonly checkpointInterval?: number;

  /**
   * @schema KinesisAnalyticsV2CheckpointConfigurationDescription#MinPauseBetweenCheckpoints
   */
  readonly minPauseBetweenCheckpoints?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CheckpointConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CheckpointConfigurationDescription(obj: KinesisAnalyticsV2CheckpointConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationType': obj.configurationType,
    'CheckpointingEnabled': obj.checkpointingEnabled,
    'CheckpointInterval': obj.checkpointInterval,
    'MinPauseBetweenCheckpoints': obj.minPauseBetweenCheckpoints,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2MonitoringConfigurationDescription
 */
export interface KinesisAnalyticsV2MonitoringConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationDescription#MetricsLevel
   */
  readonly metricsLevel?: string;

  /**
   * @schema KinesisAnalyticsV2MonitoringConfigurationDescription#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2MonitoringConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2MonitoringConfigurationDescription(obj: KinesisAnalyticsV2MonitoringConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationType': obj.configurationType,
    'MetricsLevel': obj.metricsLevel,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ParallelismConfigurationDescription
 */
export interface KinesisAnalyticsV2ParallelismConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#ConfigurationType
   */
  readonly configurationType?: string;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#Parallelism
   */
  readonly parallelism?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#ParallelismPerKPU
   */
  readonly parallelismPerKpu?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#CurrentParallelism
   */
  readonly currentParallelism?: number;

  /**
   * @schema KinesisAnalyticsV2ParallelismConfigurationDescription#AutoScalingEnabled
   */
  readonly autoScalingEnabled?: boolean;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ParallelismConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ParallelismConfigurationDescription(obj: KinesisAnalyticsV2ParallelismConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationType': obj.configurationType,
    'Parallelism': obj.parallelism,
    'ParallelismPerKPU': obj.parallelismPerKpu,
    'CurrentParallelism': obj.currentParallelism,
    'AutoScalingEnabled': obj.autoScalingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription
 */
export interface KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription(obj: KinesisAnalyticsV2ZeppelinMonitoringConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CatalogConfigurationDescription
 */
export interface KinesisAnalyticsV2CatalogConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2CatalogConfigurationDescription#GlueDataCatalogConfigurationDescription
   */
  readonly glueDataCatalogConfigurationDescription?: KinesisAnalyticsV2GlueDataCatalogConfigurationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CatalogConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CatalogConfigurationDescription(obj: KinesisAnalyticsV2CatalogConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlueDataCatalogConfigurationDescription': toJson_KinesisAnalyticsV2GlueDataCatalogConfigurationDescription(obj.glueDataCatalogConfigurationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2DeployAsApplicationConfigurationDescription
 */
export interface KinesisAnalyticsV2DeployAsApplicationConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2DeployAsApplicationConfigurationDescription#S3ContentLocationDescription
   */
  readonly s3ContentLocationDescription?: KinesisAnalyticsV2S3ContentBaseLocationDescription;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2DeployAsApplicationConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2DeployAsApplicationConfigurationDescription(obj: KinesisAnalyticsV2DeployAsApplicationConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3ContentLocationDescription': toJson_KinesisAnalyticsV2S3ContentBaseLocationDescription(obj.s3ContentLocationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CustomArtifactConfigurationDescription
 */
export interface KinesisAnalyticsV2CustomArtifactConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2CustomArtifactConfigurationDescription#ArtifactType
   */
  readonly artifactType?: string;

  /**
   * @schema KinesisAnalyticsV2CustomArtifactConfigurationDescription#S3ContentLocationDescription
   */
  readonly s3ContentLocationDescription?: KinesisAnalyticsV2S3ContentLocation;

  /**
   * @schema KinesisAnalyticsV2CustomArtifactConfigurationDescription#MavenReferenceDescription
   */
  readonly mavenReferenceDescription?: KinesisAnalyticsV2MavenReference;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CustomArtifactConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CustomArtifactConfigurationDescription(obj: KinesisAnalyticsV2CustomArtifactConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArtifactType': obj.artifactType,
    'S3ContentLocationDescription': toJson_KinesisAnalyticsV2S3ContentLocation(obj.s3ContentLocationDescription),
    'MavenReferenceDescription': toJson_KinesisAnalyticsV2MavenReference(obj.mavenReferenceDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2JsonMappingParameters
 */
export interface KinesisAnalyticsV2JsonMappingParameters {
  /**
   * @schema KinesisAnalyticsV2JsonMappingParameters#RecordRowPath
   */
  readonly recordRowPath?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2JsonMappingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2JsonMappingParameters(obj: KinesisAnalyticsV2JsonMappingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordRowPath': obj.recordRowPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2CsvMappingParameters
 */
export interface KinesisAnalyticsV2CsvMappingParameters {
  /**
   * @schema KinesisAnalyticsV2CsvMappingParameters#RecordRowDelimiter
   */
  readonly recordRowDelimiter?: string;

  /**
   * @schema KinesisAnalyticsV2CsvMappingParameters#RecordColumnDelimiter
   */
  readonly recordColumnDelimiter?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2CsvMappingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2CsvMappingParameters(obj: KinesisAnalyticsV2CsvMappingParameters | undefined): Record<string, any> | undefined {
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
 * @schema KinesisAnalyticsV2InputProcessingConfigurationUpdate
 */
export interface KinesisAnalyticsV2InputProcessingConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2InputProcessingConfigurationUpdate#InputLambdaProcessorUpdate
   */
  readonly inputLambdaProcessorUpdate?: KinesisAnalyticsV2InputLambdaProcessorUpdate;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputProcessingConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputProcessingConfigurationUpdate(obj: KinesisAnalyticsV2InputProcessingConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputLambdaProcessorUpdate': toJson_KinesisAnalyticsV2InputLambdaProcessorUpdate(obj.inputLambdaProcessorUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisStreamsInputUpdate
 */
export interface KinesisAnalyticsV2KinesisStreamsInputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisStreamsInputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisStreamsInputUpdate(obj: KinesisAnalyticsV2KinesisStreamsInputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseInputUpdate
 */
export interface KinesisAnalyticsV2KinesisFirehoseInputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseInputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisFirehoseInputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisFirehoseInputUpdate(obj: KinesisAnalyticsV2KinesisFirehoseInputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputSchemaUpdate
 */
export interface KinesisAnalyticsV2InputSchemaUpdate {
  /**
   * @schema KinesisAnalyticsV2InputSchemaUpdate#RecordFormatUpdate
   */
  readonly recordFormatUpdate?: KinesisAnalyticsV2RecordFormat;

  /**
   * @schema KinesisAnalyticsV2InputSchemaUpdate#RecordEncodingUpdate
   */
  readonly recordEncodingUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2InputSchemaUpdate#RecordColumnUpdates
   */
  readonly recordColumnUpdates?: KinesisAnalyticsV2RecordColumn[];

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputSchemaUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputSchemaUpdate(obj: KinesisAnalyticsV2InputSchemaUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordFormatUpdate': toJson_KinesisAnalyticsV2RecordFormat(obj.recordFormatUpdate),
    'RecordEncodingUpdate': obj.recordEncodingUpdate,
    'RecordColumnUpdates': obj.recordColumnUpdates?.map(y => toJson_KinesisAnalyticsV2RecordColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputParallelismUpdate
 */
export interface KinesisAnalyticsV2InputParallelismUpdate {
  /**
   * @schema KinesisAnalyticsV2InputParallelismUpdate#CountUpdate
   */
  readonly countUpdate?: number;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputParallelismUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputParallelismUpdate(obj: KinesisAnalyticsV2InputParallelismUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CountUpdate': obj.countUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisStreamsOutputUpdate
 */
export interface KinesisAnalyticsV2KinesisStreamsOutputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisStreamsOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisStreamsOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisStreamsOutputUpdate(obj: KinesisAnalyticsV2KinesisStreamsOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2KinesisFirehoseOutputUpdate
 */
export interface KinesisAnalyticsV2KinesisFirehoseOutputUpdate {
  /**
   * @schema KinesisAnalyticsV2KinesisFirehoseOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2KinesisFirehoseOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2KinesisFirehoseOutputUpdate(obj: KinesisAnalyticsV2KinesisFirehoseOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2LambdaOutputUpdate
 */
export interface KinesisAnalyticsV2LambdaOutputUpdate {
  /**
   * @schema KinesisAnalyticsV2LambdaOutputUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2LambdaOutputUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2LambdaOutputUpdate(obj: KinesisAnalyticsV2LambdaOutputUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ReferenceDataSourceUpdate
 */
export interface KinesisAnalyticsV2S3ReferenceDataSourceUpdate {
  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ReferenceDataSourceUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ReferenceDataSourceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ReferenceDataSourceUpdate(obj: KinesisAnalyticsV2S3ReferenceDataSourceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARNUpdate': obj.bucketArnUpdate,
    'FileKeyUpdate': obj.fileKeyUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ContentLocationUpdate
 */
export interface KinesisAnalyticsV2S3ContentLocationUpdate {
  /**
   * @schema KinesisAnalyticsV2S3ContentLocationUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocationUpdate#FileKeyUpdate
   */
  readonly fileKeyUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentLocationUpdate#ObjectVersionUpdate
   */
  readonly objectVersionUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ContentLocationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ContentLocationUpdate(obj: KinesisAnalyticsV2S3ContentLocationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARNUpdate': obj.bucketArnUpdate,
    'FileKeyUpdate': obj.fileKeyUpdate,
    'ObjectVersionUpdate': obj.objectVersionUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate
 */
export interface KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate {
  /**
   * @schema KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate#DatabaseARNUpdate
   */
  readonly databaseArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate(obj: KinesisAnalyticsV2GlueDataCatalogConfigurationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseARNUpdate': obj.databaseArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ContentBaseLocationUpdate
 */
export interface KinesisAnalyticsV2S3ContentBaseLocationUpdate {
  /**
   * @schema KinesisAnalyticsV2S3ContentBaseLocationUpdate#BucketARNUpdate
   */
  readonly bucketArnUpdate?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentBaseLocationUpdate#BasePathUpdate
   */
  readonly basePathUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ContentBaseLocationUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ContentBaseLocationUpdate(obj: KinesisAnalyticsV2S3ContentBaseLocationUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARNUpdate': obj.bucketArnUpdate,
    'BasePathUpdate': obj.basePathUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription
 */
export interface KinesisAnalyticsV2S3ApplicationCodeLocationDescription {
  /**
   * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription#FileKey
   */
  readonly fileKey?: string;

  /**
   * @schema KinesisAnalyticsV2S3ApplicationCodeLocationDescription#ObjectVersion
   */
  readonly objectVersion?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ApplicationCodeLocationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ApplicationCodeLocationDescription(obj: KinesisAnalyticsV2S3ApplicationCodeLocationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'FileKey': obj.fileKey,
    'ObjectVersion': obj.objectVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2GlueDataCatalogConfigurationDescription
 */
export interface KinesisAnalyticsV2GlueDataCatalogConfigurationDescription {
  /**
   * @schema KinesisAnalyticsV2GlueDataCatalogConfigurationDescription#DatabaseARN
   */
  readonly databaseArn?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2GlueDataCatalogConfigurationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2GlueDataCatalogConfigurationDescription(obj: KinesisAnalyticsV2GlueDataCatalogConfigurationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DatabaseARN': obj.databaseArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2S3ContentBaseLocationDescription
 */
export interface KinesisAnalyticsV2S3ContentBaseLocationDescription {
  /**
   * @schema KinesisAnalyticsV2S3ContentBaseLocationDescription#BucketARN
   */
  readonly bucketArn?: string;

  /**
   * @schema KinesisAnalyticsV2S3ContentBaseLocationDescription#BasePath
   */
  readonly basePath?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2S3ContentBaseLocationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2S3ContentBaseLocationDescription(obj: KinesisAnalyticsV2S3ContentBaseLocationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketARN': obj.bucketArn,
    'BasePath': obj.basePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KinesisAnalyticsV2InputLambdaProcessorUpdate
 */
export interface KinesisAnalyticsV2InputLambdaProcessorUpdate {
  /**
   * @schema KinesisAnalyticsV2InputLambdaProcessorUpdate#ResourceARNUpdate
   */
  readonly resourceArnUpdate?: string;

}

/**
 * Converts an object of type 'KinesisAnalyticsV2InputLambdaProcessorUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KinesisAnalyticsV2InputLambdaProcessorUpdate(obj: KinesisAnalyticsV2InputLambdaProcessorUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARNUpdate': obj.resourceArnUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
