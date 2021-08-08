/**
 * @schema MediaConvertAssociateCertificateRequest
 */
export interface MediaConvertAssociateCertificateRequest {
  /**
   * @schema MediaConvertAssociateCertificateRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'MediaConvertAssociateCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAssociateCertificateRequest(obj: MediaConvertAssociateCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAssociateCertificateResponse
 */
export interface MediaConvertAssociateCertificateResponse {
}

/**
 * Converts an object of type 'MediaConvertAssociateCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAssociateCertificateResponse(obj: MediaConvertAssociateCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCancelJobRequest
 */
export interface MediaConvertCancelJobRequest {
  /**
   * @schema MediaConvertCancelJobRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaConvertCancelJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCancelJobRequest(obj: MediaConvertCancelJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCancelJobResponse
 */
export interface MediaConvertCancelJobResponse {
}

/**
 * Converts an object of type 'MediaConvertCancelJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCancelJobResponse(obj: MediaConvertCancelJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreateJobRequest
 */
export interface MediaConvertCreateJobRequest {
  /**
   * @schema MediaConvertCreateJobRequest#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertCreateJobRequest#BillingTagsSource
   */
  readonly billingTagsSource?: string;

  /**
   * @schema MediaConvertCreateJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema MediaConvertCreateJobRequest#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertCreateJobRequest#JobTemplate
   */
  readonly jobTemplate?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertCreateJobRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Role
   */
  readonly role?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Settings
   */
  readonly settings?: MediaConvertJobSettings;

  /**
   * @schema MediaConvertCreateJobRequest#SimulateReservedQueue
   */
  readonly simulateReservedQueue?: string;

  /**
   * @schema MediaConvertCreateJobRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertCreateJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema MediaConvertCreateJobRequest#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreateJobRequest(obj: MediaConvertCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccelerationSettings': toJson_MediaConvertAccelerationSettings(obj.accelerationSettings),
    'BillingTagsSource': obj.billingTagsSource,
    'ClientRequestToken': obj.clientRequestToken,
    'HopDestinations': obj.hopDestinations?.map(y => toJson_MediaConvertHopDestination(y)),
    'JobTemplate': obj.jobTemplate,
    'Priority': obj.priority,
    'Queue': obj.queue,
    'Role': obj.role,
    'Settings': toJson_MediaConvertJobSettings(obj.settings),
    'SimulateReservedQueue': obj.simulateReservedQueue,
    'StatusUpdateInterval': obj.statusUpdateInterval,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UserMetadata': ((obj.userMetadata) === undefined) ? undefined : (Object.entries(obj.userMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreateJobResponse
 */
export interface MediaConvertCreateJobResponse {
  /**
   * @schema MediaConvertCreateJobResponse#Job
   */
  readonly job?: MediaConvertJob;

}

/**
 * Converts an object of type 'MediaConvertCreateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreateJobResponse(obj: MediaConvertCreateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Job': toJson_MediaConvertJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreateJobTemplateRequest
 */
export interface MediaConvertCreateJobTemplateRequest {
  /**
   * @schema MediaConvertCreateJobTemplateRequest#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Settings
   */
  readonly settings?: MediaConvertJobTemplateSettings;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertCreateJobTemplateRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertCreateJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreateJobTemplateRequest(obj: MediaConvertCreateJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccelerationSettings': toJson_MediaConvertAccelerationSettings(obj.accelerationSettings),
    'Category': obj.category,
    'Description': obj.description,
    'HopDestinations': obj.hopDestinations?.map(y => toJson_MediaConvertHopDestination(y)),
    'Name': obj.name,
    'Priority': obj.priority,
    'Queue': obj.queue,
    'Settings': toJson_MediaConvertJobTemplateSettings(obj.settings),
    'StatusUpdateInterval': obj.statusUpdateInterval,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreateJobTemplateResponse
 */
export interface MediaConvertCreateJobTemplateResponse {
  /**
   * @schema MediaConvertCreateJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: MediaConvertJobTemplate;

}

/**
 * Converts an object of type 'MediaConvertCreateJobTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreateJobTemplateResponse(obj: MediaConvertCreateJobTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobTemplate': toJson_MediaConvertJobTemplate(obj.jobTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreatePresetRequest
 */
export interface MediaConvertCreatePresetRequest {
  /**
   * @schema MediaConvertCreatePresetRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertCreatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertCreatePresetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertCreatePresetRequest#Settings
   */
  readonly settings?: MediaConvertPresetSettings;

  /**
   * @schema MediaConvertCreatePresetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertCreatePresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreatePresetRequest(obj: MediaConvertCreatePresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Category': obj.category,
    'Description': obj.description,
    'Name': obj.name,
    'Settings': toJson_MediaConvertPresetSettings(obj.settings),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreatePresetResponse
 */
export interface MediaConvertCreatePresetResponse {
  /**
   * @schema MediaConvertCreatePresetResponse#Preset
   */
  readonly preset?: MediaConvertPreset;

}

/**
 * Converts an object of type 'MediaConvertCreatePresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreatePresetResponse(obj: MediaConvertCreatePresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preset': toJson_MediaConvertPreset(obj.preset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreateQueueRequest
 */
export interface MediaConvertCreateQueueRequest {
  /**
   * @schema MediaConvertCreateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#ReservationPlanSettings
   */
  readonly reservationPlanSettings?: MediaConvertReservationPlanSettings;

  /**
   * @schema MediaConvertCreateQueueRequest#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConvertCreateQueueRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertCreateQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreateQueueRequest(obj: MediaConvertCreateQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Name': obj.name,
    'PricingPlan': obj.pricingPlan,
    'ReservationPlanSettings': toJson_MediaConvertReservationPlanSettings(obj.reservationPlanSettings),
    'Status': obj.status,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCreateQueueResponse
 */
export interface MediaConvertCreateQueueResponse {
  /**
   * @schema MediaConvertCreateQueueResponse#Queue
   */
  readonly queue?: MediaConvertQueue;

}

/**
 * Converts an object of type 'MediaConvertCreateQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCreateQueueResponse(obj: MediaConvertCreateQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Queue': toJson_MediaConvertQueue(obj.queue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeleteJobTemplateRequest
 */
export interface MediaConvertDeleteJobTemplateRequest {
  /**
   * @schema MediaConvertDeleteJobTemplateRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConvertDeleteJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeleteJobTemplateRequest(obj: MediaConvertDeleteJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeleteJobTemplateResponse
 */
export interface MediaConvertDeleteJobTemplateResponse {
}

/**
 * Converts an object of type 'MediaConvertDeleteJobTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeleteJobTemplateResponse(obj: MediaConvertDeleteJobTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeletePresetRequest
 */
export interface MediaConvertDeletePresetRequest {
  /**
   * @schema MediaConvertDeletePresetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConvertDeletePresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeletePresetRequest(obj: MediaConvertDeletePresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeletePresetResponse
 */
export interface MediaConvertDeletePresetResponse {
}

/**
 * Converts an object of type 'MediaConvertDeletePresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeletePresetResponse(obj: MediaConvertDeletePresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeleteQueueRequest
 */
export interface MediaConvertDeleteQueueRequest {
  /**
   * @schema MediaConvertDeleteQueueRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConvertDeleteQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeleteQueueRequest(obj: MediaConvertDeleteQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeleteQueueResponse
 */
export interface MediaConvertDeleteQueueResponse {
}

/**
 * Converts an object of type 'MediaConvertDeleteQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeleteQueueResponse(obj: MediaConvertDeleteQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDescribeEndpointsRequest
 */
export interface MediaConvertDescribeEndpointsRequest {
  /**
   * @schema MediaConvertDescribeEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertDescribeEndpointsRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema MediaConvertDescribeEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConvertDescribeEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDescribeEndpointsRequest(obj: MediaConvertDescribeEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'Mode': obj.mode,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDescribeEndpointsResponse
 */
export interface MediaConvertDescribeEndpointsResponse {
  /**
   * @schema MediaConvertDescribeEndpointsResponse#Endpoints
   */
  readonly endpoints?: MediaConvertEndpoint[];

  /**
   * @schema MediaConvertDescribeEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConvertDescribeEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDescribeEndpointsResponse(obj: MediaConvertDescribeEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoints': obj.endpoints?.map(y => toJson_MediaConvertEndpoint(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDisassociateCertificateRequest
 */
export interface MediaConvertDisassociateCertificateRequest {
  /**
   * @schema MediaConvertDisassociateCertificateRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'MediaConvertDisassociateCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDisassociateCertificateRequest(obj: MediaConvertDisassociateCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDisassociateCertificateResponse
 */
export interface MediaConvertDisassociateCertificateResponse {
}

/**
 * Converts an object of type 'MediaConvertDisassociateCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDisassociateCertificateResponse(obj: MediaConvertDisassociateCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetJobRequest
 */
export interface MediaConvertGetJobRequest {
  /**
   * @schema MediaConvertGetJobRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'MediaConvertGetJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetJobRequest(obj: MediaConvertGetJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetJobResponse
 */
export interface MediaConvertGetJobResponse {
  /**
   * @schema MediaConvertGetJobResponse#Job
   */
  readonly job?: MediaConvertJob;

}

/**
 * Converts an object of type 'MediaConvertGetJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetJobResponse(obj: MediaConvertGetJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Job': toJson_MediaConvertJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetJobTemplateRequest
 */
export interface MediaConvertGetJobTemplateRequest {
  /**
   * @schema MediaConvertGetJobTemplateRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConvertGetJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetJobTemplateRequest(obj: MediaConvertGetJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetJobTemplateResponse
 */
export interface MediaConvertGetJobTemplateResponse {
  /**
   * @schema MediaConvertGetJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: MediaConvertJobTemplate;

}

/**
 * Converts an object of type 'MediaConvertGetJobTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetJobTemplateResponse(obj: MediaConvertGetJobTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobTemplate': toJson_MediaConvertJobTemplate(obj.jobTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetPresetRequest
 */
export interface MediaConvertGetPresetRequest {
  /**
   * @schema MediaConvertGetPresetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConvertGetPresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetPresetRequest(obj: MediaConvertGetPresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetPresetResponse
 */
export interface MediaConvertGetPresetResponse {
  /**
   * @schema MediaConvertGetPresetResponse#Preset
   */
  readonly preset?: MediaConvertPreset;

}

/**
 * Converts an object of type 'MediaConvertGetPresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetPresetResponse(obj: MediaConvertGetPresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preset': toJson_MediaConvertPreset(obj.preset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetQueueRequest
 */
export interface MediaConvertGetQueueRequest {
  /**
   * @schema MediaConvertGetQueueRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConvertGetQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetQueueRequest(obj: MediaConvertGetQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertGetQueueResponse
 */
export interface MediaConvertGetQueueResponse {
  /**
   * @schema MediaConvertGetQueueResponse#Queue
   */
  readonly queue?: MediaConvertQueue;

}

/**
 * Converts an object of type 'MediaConvertGetQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertGetQueueResponse(obj: MediaConvertGetQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Queue': toJson_MediaConvertQueue(obj.queue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListJobTemplatesRequest
 */
export interface MediaConvertListJobTemplatesRequest {
  /**
   * @schema MediaConvertListJobTemplatesRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertListJobTemplatesRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema MediaConvertListJobTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListJobTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListJobTemplatesRequest#Order
   */
  readonly order?: string;

}

/**
 * Converts an object of type 'MediaConvertListJobTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListJobTemplatesRequest(obj: MediaConvertListJobTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Category': obj.category,
    'ListBy': obj.listBy,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListJobTemplatesResponse
 */
export interface MediaConvertListJobTemplatesResponse {
  /**
   * @schema MediaConvertListJobTemplatesResponse#JobTemplates
   */
  readonly jobTemplates?: MediaConvertJobTemplate[];

  /**
   * @schema MediaConvertListJobTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConvertListJobTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListJobTemplatesResponse(obj: MediaConvertListJobTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobTemplates': obj.jobTemplates?.map(y => toJson_MediaConvertJobTemplate(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListJobsRequest
 */
export interface MediaConvertListJobsRequest {
  /**
   * @schema MediaConvertListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListJobsRequest#Order
   */
  readonly order?: string;

  /**
   * @schema MediaConvertListJobsRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertListJobsRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConvertListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListJobsRequest(obj: MediaConvertListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Order': obj.order,
    'Queue': obj.queue,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListJobsResponse
 */
export interface MediaConvertListJobsResponse {
  /**
   * @schema MediaConvertListJobsResponse#Jobs
   */
  readonly jobs?: MediaConvertJob[];

  /**
   * @schema MediaConvertListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConvertListJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListJobsResponse(obj: MediaConvertListJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_MediaConvertJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListPresetsRequest
 */
export interface MediaConvertListPresetsRequest {
  /**
   * @schema MediaConvertListPresetsRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertListPresetsRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema MediaConvertListPresetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListPresetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListPresetsRequest#Order
   */
  readonly order?: string;

}

/**
 * Converts an object of type 'MediaConvertListPresetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListPresetsRequest(obj: MediaConvertListPresetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Category': obj.category,
    'ListBy': obj.listBy,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListPresetsResponse
 */
export interface MediaConvertListPresetsResponse {
  /**
   * @schema MediaConvertListPresetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListPresetsResponse#Presets
   */
  readonly presets?: MediaConvertPreset[];

}

/**
 * Converts an object of type 'MediaConvertListPresetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListPresetsResponse(obj: MediaConvertListPresetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Presets': obj.presets?.map(y => toJson_MediaConvertPreset(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListQueuesRequest
 */
export interface MediaConvertListQueuesRequest {
  /**
   * @schema MediaConvertListQueuesRequest#ListBy
   */
  readonly listBy?: string;

  /**
   * @schema MediaConvertListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConvertListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListQueuesRequest#Order
   */
  readonly order?: string;

}

/**
 * Converts an object of type 'MediaConvertListQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListQueuesRequest(obj: MediaConvertListQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListBy': obj.listBy,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Order': obj.order,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListQueuesResponse
 */
export interface MediaConvertListQueuesResponse {
  /**
   * @schema MediaConvertListQueuesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConvertListQueuesResponse#Queues
   */
  readonly queues?: MediaConvertQueue[];

}

/**
 * Converts an object of type 'MediaConvertListQueuesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListQueuesResponse(obj: MediaConvertListQueuesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Queues': obj.queues?.map(y => toJson_MediaConvertQueue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListTagsForResourceRequest
 */
export interface MediaConvertListTagsForResourceRequest {
  /**
   * @schema MediaConvertListTagsForResourceRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'MediaConvertListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListTagsForResourceRequest(obj: MediaConvertListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertListTagsForResourceResponse
 */
export interface MediaConvertListTagsForResourceResponse {
  /**
   * @schema MediaConvertListTagsForResourceResponse#ResourceTags
   */
  readonly resourceTags?: MediaConvertResourceTags;

}

/**
 * Converts an object of type 'MediaConvertListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertListTagsForResourceResponse(obj: MediaConvertListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTags': toJson_MediaConvertResourceTags(obj.resourceTags),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTagResourceRequest
 */
export interface MediaConvertTagResourceRequest {
  /**
   * @schema MediaConvertTagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTagResourceRequest(obj: MediaConvertTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTagResourceResponse
 */
export interface MediaConvertTagResourceResponse {
}

/**
 * Converts an object of type 'MediaConvertTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTagResourceResponse(obj: MediaConvertTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUntagResourceRequest
 */
export interface MediaConvertUntagResourceRequest {
  /**
   * @schema MediaConvertUntagResourceRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaConvertUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUntagResourceRequest(obj: MediaConvertUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUntagResourceResponse
 */
export interface MediaConvertUntagResourceResponse {
}

/**
 * Converts an object of type 'MediaConvertUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUntagResourceResponse(obj: MediaConvertUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUpdateJobTemplateRequest
 */
export interface MediaConvertUpdateJobTemplateRequest {
  /**
   * @schema MediaConvertUpdateJobTemplateRequest#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#Settings
   */
  readonly settings?: MediaConvertJobTemplateSettings;

  /**
   * @schema MediaConvertUpdateJobTemplateRequest#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

}

/**
 * Converts an object of type 'MediaConvertUpdateJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUpdateJobTemplateRequest(obj: MediaConvertUpdateJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccelerationSettings': toJson_MediaConvertAccelerationSettings(obj.accelerationSettings),
    'Category': obj.category,
    'Description': obj.description,
    'HopDestinations': obj.hopDestinations?.map(y => toJson_MediaConvertHopDestination(y)),
    'Name': obj.name,
    'Priority': obj.priority,
    'Queue': obj.queue,
    'Settings': toJson_MediaConvertJobTemplateSettings(obj.settings),
    'StatusUpdateInterval': obj.statusUpdateInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUpdateJobTemplateResponse
 */
export interface MediaConvertUpdateJobTemplateResponse {
  /**
   * @schema MediaConvertUpdateJobTemplateResponse#JobTemplate
   */
  readonly jobTemplate?: MediaConvertJobTemplate;

}

/**
 * Converts an object of type 'MediaConvertUpdateJobTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUpdateJobTemplateResponse(obj: MediaConvertUpdateJobTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobTemplate': toJson_MediaConvertJobTemplate(obj.jobTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUpdatePresetRequest
 */
export interface MediaConvertUpdatePresetRequest {
  /**
   * @schema MediaConvertUpdatePresetRequest#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertUpdatePresetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertUpdatePresetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertUpdatePresetRequest#Settings
   */
  readonly settings?: MediaConvertPresetSettings;

}

/**
 * Converts an object of type 'MediaConvertUpdatePresetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUpdatePresetRequest(obj: MediaConvertUpdatePresetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Category': obj.category,
    'Description': obj.description,
    'Name': obj.name,
    'Settings': toJson_MediaConvertPresetSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUpdatePresetResponse
 */
export interface MediaConvertUpdatePresetResponse {
  /**
   * @schema MediaConvertUpdatePresetResponse#Preset
   */
  readonly preset?: MediaConvertPreset;

}

/**
 * Converts an object of type 'MediaConvertUpdatePresetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUpdatePresetResponse(obj: MediaConvertUpdatePresetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Preset': toJson_MediaConvertPreset(obj.preset),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUpdateQueueRequest
 */
export interface MediaConvertUpdateQueueRequest {
  /**
   * @schema MediaConvertUpdateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertUpdateQueueRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertUpdateQueueRequest#ReservationPlanSettings
   */
  readonly reservationPlanSettings?: MediaConvertReservationPlanSettings;

  /**
   * @schema MediaConvertUpdateQueueRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConvertUpdateQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUpdateQueueRequest(obj: MediaConvertUpdateQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Name': obj.name,
    'ReservationPlanSettings': toJson_MediaConvertReservationPlanSettings(obj.reservationPlanSettings),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertUpdateQueueResponse
 */
export interface MediaConvertUpdateQueueResponse {
  /**
   * @schema MediaConvertUpdateQueueResponse#Queue
   */
  readonly queue?: MediaConvertQueue;

}

/**
 * Converts an object of type 'MediaConvertUpdateQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertUpdateQueueResponse(obj: MediaConvertUpdateQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Queue': toJson_MediaConvertQueue(obj.queue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAccelerationSettings
 */
export interface MediaConvertAccelerationSettings {
  /**
   * @schema MediaConvertAccelerationSettings#Mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'MediaConvertAccelerationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAccelerationSettings(obj: MediaConvertAccelerationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHopDestination
 */
export interface MediaConvertHopDestination {
  /**
   * @schema MediaConvertHopDestination#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertHopDestination#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertHopDestination#WaitMinutes
   */
  readonly waitMinutes?: number;

}

/**
 * Converts an object of type 'MediaConvertHopDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHopDestination(obj: MediaConvertHopDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Priority': obj.priority,
    'Queue': obj.queue,
    'WaitMinutes': obj.waitMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertJobSettings
 */
export interface MediaConvertJobSettings {
  /**
   * @schema MediaConvertJobSettings#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema MediaConvertJobSettings#AvailBlanking
   */
  readonly availBlanking?: MediaConvertAvailBlanking;

  /**
   * @schema MediaConvertJobSettings#Esam
   */
  readonly esam?: MediaConvertEsamSettings;

  /**
   * @schema MediaConvertJobSettings#ExtendedDataServices
   */
  readonly extendedDataServices?: MediaConvertExtendedDataServices;

  /**
   * @schema MediaConvertJobSettings#Inputs
   */
  readonly inputs?: MediaConvertInput[];

  /**
   * @schema MediaConvertJobSettings#KantarWatermark
   */
  readonly kantarWatermark?: MediaConvertKantarWatermarkSettings;

  /**
   * @schema MediaConvertJobSettings#MotionImageInserter
   */
  readonly motionImageInserter?: MediaConvertMotionImageInserter;

  /**
   * @schema MediaConvertJobSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: MediaConvertNielsenConfiguration;

  /**
   * @schema MediaConvertJobSettings#NielsenNonLinearWatermark
   */
  readonly nielsenNonLinearWatermark?: MediaConvertNielsenNonLinearWatermarkSettings;

  /**
   * @schema MediaConvertJobSettings#OutputGroups
   */
  readonly outputGroups?: MediaConvertOutputGroup[];

  /**
   * @schema MediaConvertJobSettings#TimecodeConfig
   */
  readonly timecodeConfig?: MediaConvertTimecodeConfig;

  /**
   * @schema MediaConvertJobSettings#TimedMetadataInsertion
   */
  readonly timedMetadataInsertion?: MediaConvertTimedMetadataInsertion;

}

/**
 * Converts an object of type 'MediaConvertJobSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertJobSettings(obj: MediaConvertJobSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdAvailOffset': obj.adAvailOffset,
    'AvailBlanking': toJson_MediaConvertAvailBlanking(obj.availBlanking),
    'Esam': toJson_MediaConvertEsamSettings(obj.esam),
    'ExtendedDataServices': toJson_MediaConvertExtendedDataServices(obj.extendedDataServices),
    'Inputs': obj.inputs?.map(y => toJson_MediaConvertInput(y)),
    'KantarWatermark': toJson_MediaConvertKantarWatermarkSettings(obj.kantarWatermark),
    'MotionImageInserter': toJson_MediaConvertMotionImageInserter(obj.motionImageInserter),
    'NielsenConfiguration': toJson_MediaConvertNielsenConfiguration(obj.nielsenConfiguration),
    'NielsenNonLinearWatermark': toJson_MediaConvertNielsenNonLinearWatermarkSettings(obj.nielsenNonLinearWatermark),
    'OutputGroups': obj.outputGroups?.map(y => toJson_MediaConvertOutputGroup(y)),
    'TimecodeConfig': toJson_MediaConvertTimecodeConfig(obj.timecodeConfig),
    'TimedMetadataInsertion': toJson_MediaConvertTimedMetadataInsertion(obj.timedMetadataInsertion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertJob
 */
export interface MediaConvertJob {
  /**
   * @schema MediaConvertJob#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertJob#AccelerationStatus
   */
  readonly accelerationStatus?: string;

  /**
   * @schema MediaConvertJob#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertJob#BillingTagsSource
   */
  readonly billingTagsSource?: string;

  /**
   * @schema MediaConvertJob#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertJob#CurrentPhase
   */
  readonly currentPhase?: string;

  /**
   * @schema MediaConvertJob#ErrorCode
   */
  readonly errorCode?: number;

  /**
   * @schema MediaConvertJob#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema MediaConvertJob#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertJob#Id
   */
  readonly id?: string;

  /**
   * @schema MediaConvertJob#JobPercentComplete
   */
  readonly jobPercentComplete?: number;

  /**
   * @schema MediaConvertJob#JobTemplate
   */
  readonly jobTemplate?: string;

  /**
   * @schema MediaConvertJob#Messages
   */
  readonly messages?: MediaConvertJobMessages;

  /**
   * @schema MediaConvertJob#OutputGroupDetails
   */
  readonly outputGroupDetails?: MediaConvertOutputGroupDetail[];

  /**
   * @schema MediaConvertJob#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertJob#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertJob#QueueTransitions
   */
  readonly queueTransitions?: MediaConvertQueueTransition[];

  /**
   * @schema MediaConvertJob#RetryCount
   */
  readonly retryCount?: number;

  /**
   * @schema MediaConvertJob#Role
   */
  readonly role?: string;

  /**
   * @schema MediaConvertJob#Settings
   */
  readonly settings?: MediaConvertJobSettings;

  /**
   * @schema MediaConvertJob#SimulateReservedQueue
   */
  readonly simulateReservedQueue?: string;

  /**
   * @schema MediaConvertJob#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConvertJob#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertJob#Timing
   */
  readonly timing?: MediaConvertTiming;

  /**
   * @schema MediaConvertJob#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertJob(obj: MediaConvertJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccelerationSettings': toJson_MediaConvertAccelerationSettings(obj.accelerationSettings),
    'AccelerationStatus': obj.accelerationStatus,
    'Arn': obj.arn,
    'BillingTagsSource': obj.billingTagsSource,
    'CreatedAt': obj.createdAt,
    'CurrentPhase': obj.currentPhase,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'HopDestinations': obj.hopDestinations?.map(y => toJson_MediaConvertHopDestination(y)),
    'Id': obj.id,
    'JobPercentComplete': obj.jobPercentComplete,
    'JobTemplate': obj.jobTemplate,
    'Messages': toJson_MediaConvertJobMessages(obj.messages),
    'OutputGroupDetails': obj.outputGroupDetails?.map(y => toJson_MediaConvertOutputGroupDetail(y)),
    'Priority': obj.priority,
    'Queue': obj.queue,
    'QueueTransitions': obj.queueTransitions?.map(y => toJson_MediaConvertQueueTransition(y)),
    'RetryCount': obj.retryCount,
    'Role': obj.role,
    'Settings': toJson_MediaConvertJobSettings(obj.settings),
    'SimulateReservedQueue': obj.simulateReservedQueue,
    'Status': obj.status,
    'StatusUpdateInterval': obj.statusUpdateInterval,
    'Timing': toJson_MediaConvertTiming(obj.timing),
    'UserMetadata': ((obj.userMetadata) === undefined) ? undefined : (Object.entries(obj.userMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertJobTemplateSettings
 */
export interface MediaConvertJobTemplateSettings {
  /**
   * @schema MediaConvertJobTemplateSettings#AdAvailOffset
   */
  readonly adAvailOffset?: number;

  /**
   * @schema MediaConvertJobTemplateSettings#AvailBlanking
   */
  readonly availBlanking?: MediaConvertAvailBlanking;

  /**
   * @schema MediaConvertJobTemplateSettings#Esam
   */
  readonly esam?: MediaConvertEsamSettings;

  /**
   * @schema MediaConvertJobTemplateSettings#ExtendedDataServices
   */
  readonly extendedDataServices?: MediaConvertExtendedDataServices;

  /**
   * @schema MediaConvertJobTemplateSettings#Inputs
   */
  readonly inputs?: MediaConvertInputTemplate[];

  /**
   * @schema MediaConvertJobTemplateSettings#KantarWatermark
   */
  readonly kantarWatermark?: MediaConvertKantarWatermarkSettings;

  /**
   * @schema MediaConvertJobTemplateSettings#MotionImageInserter
   */
  readonly motionImageInserter?: MediaConvertMotionImageInserter;

  /**
   * @schema MediaConvertJobTemplateSettings#NielsenConfiguration
   */
  readonly nielsenConfiguration?: MediaConvertNielsenConfiguration;

  /**
   * @schema MediaConvertJobTemplateSettings#NielsenNonLinearWatermark
   */
  readonly nielsenNonLinearWatermark?: MediaConvertNielsenNonLinearWatermarkSettings;

  /**
   * @schema MediaConvertJobTemplateSettings#OutputGroups
   */
  readonly outputGroups?: MediaConvertOutputGroup[];

  /**
   * @schema MediaConvertJobTemplateSettings#TimecodeConfig
   */
  readonly timecodeConfig?: MediaConvertTimecodeConfig;

  /**
   * @schema MediaConvertJobTemplateSettings#TimedMetadataInsertion
   */
  readonly timedMetadataInsertion?: MediaConvertTimedMetadataInsertion;

}

/**
 * Converts an object of type 'MediaConvertJobTemplateSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertJobTemplateSettings(obj: MediaConvertJobTemplateSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdAvailOffset': obj.adAvailOffset,
    'AvailBlanking': toJson_MediaConvertAvailBlanking(obj.availBlanking),
    'Esam': toJson_MediaConvertEsamSettings(obj.esam),
    'ExtendedDataServices': toJson_MediaConvertExtendedDataServices(obj.extendedDataServices),
    'Inputs': obj.inputs?.map(y => toJson_MediaConvertInputTemplate(y)),
    'KantarWatermark': toJson_MediaConvertKantarWatermarkSettings(obj.kantarWatermark),
    'MotionImageInserter': toJson_MediaConvertMotionImageInserter(obj.motionImageInserter),
    'NielsenConfiguration': toJson_MediaConvertNielsenConfiguration(obj.nielsenConfiguration),
    'NielsenNonLinearWatermark': toJson_MediaConvertNielsenNonLinearWatermarkSettings(obj.nielsenNonLinearWatermark),
    'OutputGroups': obj.outputGroups?.map(y => toJson_MediaConvertOutputGroup(y)),
    'TimecodeConfig': toJson_MediaConvertTimecodeConfig(obj.timecodeConfig),
    'TimedMetadataInsertion': toJson_MediaConvertTimedMetadataInsertion(obj.timedMetadataInsertion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertJobTemplate
 */
export interface MediaConvertJobTemplate {
  /**
   * @schema MediaConvertJobTemplate#AccelerationSettings
   */
  readonly accelerationSettings?: MediaConvertAccelerationSettings;

  /**
   * @schema MediaConvertJobTemplate#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertJobTemplate#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertJobTemplate#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertJobTemplate#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertJobTemplate#HopDestinations
   */
  readonly hopDestinations?: MediaConvertHopDestination[];

  /**
   * @schema MediaConvertJobTemplate#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MediaConvertJobTemplate#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertJobTemplate#Priority
   */
  readonly priority?: number;

  /**
   * @schema MediaConvertJobTemplate#Queue
   */
  readonly queue?: string;

  /**
   * @schema MediaConvertJobTemplate#Settings
   */
  readonly settings?: MediaConvertJobTemplateSettings;

  /**
   * @schema MediaConvertJobTemplate#StatusUpdateInterval
   */
  readonly statusUpdateInterval?: string;

  /**
   * @schema MediaConvertJobTemplate#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaConvertJobTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertJobTemplate(obj: MediaConvertJobTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccelerationSettings': toJson_MediaConvertAccelerationSettings(obj.accelerationSettings),
    'Arn': obj.arn,
    'Category': obj.category,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'HopDestinations': obj.hopDestinations?.map(y => toJson_MediaConvertHopDestination(y)),
    'LastUpdated': obj.lastUpdated,
    'Name': obj.name,
    'Priority': obj.priority,
    'Queue': obj.queue,
    'Settings': toJson_MediaConvertJobTemplateSettings(obj.settings),
    'StatusUpdateInterval': obj.statusUpdateInterval,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertPresetSettings
 */
export interface MediaConvertPresetSettings {
  /**
   * @schema MediaConvertPresetSettings#AudioDescriptions
   */
  readonly audioDescriptions?: MediaConvertAudioDescription[];

  /**
   * @schema MediaConvertPresetSettings#CaptionDescriptions
   */
  readonly captionDescriptions?: MediaConvertCaptionDescriptionPreset[];

  /**
   * @schema MediaConvertPresetSettings#ContainerSettings
   */
  readonly containerSettings?: MediaConvertContainerSettings;

  /**
   * @schema MediaConvertPresetSettings#VideoDescription
   */
  readonly videoDescription?: MediaConvertVideoDescription;

}

/**
 * Converts an object of type 'MediaConvertPresetSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertPresetSettings(obj: MediaConvertPresetSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDescriptions': obj.audioDescriptions?.map(y => toJson_MediaConvertAudioDescription(y)),
    'CaptionDescriptions': obj.captionDescriptions?.map(y => toJson_MediaConvertCaptionDescriptionPreset(y)),
    'ContainerSettings': toJson_MediaConvertContainerSettings(obj.containerSettings),
    'VideoDescription': toJson_MediaConvertVideoDescription(obj.videoDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertPreset
 */
export interface MediaConvertPreset {
  /**
   * @schema MediaConvertPreset#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertPreset#Category
   */
  readonly category?: string;

  /**
   * @schema MediaConvertPreset#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertPreset#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertPreset#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MediaConvertPreset#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertPreset#Settings
   */
  readonly settings?: MediaConvertPresetSettings;

  /**
   * @schema MediaConvertPreset#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaConvertPreset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertPreset(obj: MediaConvertPreset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Category': obj.category,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'LastUpdated': obj.lastUpdated,
    'Name': obj.name,
    'Settings': toJson_MediaConvertPresetSettings(obj.settings),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertReservationPlanSettings
 */
export interface MediaConvertReservationPlanSettings {
  /**
   * @schema MediaConvertReservationPlanSettings#Commitment
   */
  readonly commitment?: string;

  /**
   * @schema MediaConvertReservationPlanSettings#RenewalType
   */
  readonly renewalType?: string;

  /**
   * @schema MediaConvertReservationPlanSettings#ReservedSlots
   */
  readonly reservedSlots?: number;

}

/**
 * Converts an object of type 'MediaConvertReservationPlanSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertReservationPlanSettings(obj: MediaConvertReservationPlanSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Commitment': obj.commitment,
    'RenewalType': obj.renewalType,
    'ReservedSlots': obj.reservedSlots,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertQueue
 */
export interface MediaConvertQueue {
  /**
   * @schema MediaConvertQueue#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertQueue#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MediaConvertQueue#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConvertQueue#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema MediaConvertQueue#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertQueue#PricingPlan
   */
  readonly pricingPlan?: string;

  /**
   * @schema MediaConvertQueue#ProgressingJobsCount
   */
  readonly progressingJobsCount?: number;

  /**
   * @schema MediaConvertQueue#ReservationPlan
   */
  readonly reservationPlan?: MediaConvertReservationPlan;

  /**
   * @schema MediaConvertQueue#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConvertQueue#SubmittedJobsCount
   */
  readonly submittedJobsCount?: number;

  /**
   * @schema MediaConvertQueue#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaConvertQueue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertQueue(obj: MediaConvertQueue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedAt': obj.createdAt,
    'Description': obj.description,
    'LastUpdated': obj.lastUpdated,
    'Name': obj.name,
    'PricingPlan': obj.pricingPlan,
    'ProgressingJobsCount': obj.progressingJobsCount,
    'ReservationPlan': toJson_MediaConvertReservationPlan(obj.reservationPlan),
    'Status': obj.status,
    'SubmittedJobsCount': obj.submittedJobsCount,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEndpoint
 */
export interface MediaConvertEndpoint {
  /**
   * @schema MediaConvertEndpoint#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaConvertEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEndpoint(obj: MediaConvertEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertResourceTags
 */
export interface MediaConvertResourceTags {
  /**
   * @schema MediaConvertResourceTags#Arn
   */
  readonly arn?: string;

  /**
   * @schema MediaConvertResourceTags#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConvertResourceTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertResourceTags(obj: MediaConvertResourceTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAvailBlanking
 */
export interface MediaConvertAvailBlanking {
  /**
   * @schema MediaConvertAvailBlanking#AvailBlankingImage
   */
  readonly availBlankingImage?: string;

}

/**
 * Converts an object of type 'MediaConvertAvailBlanking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAvailBlanking(obj: MediaConvertAvailBlanking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailBlankingImage': obj.availBlankingImage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEsamSettings
 */
export interface MediaConvertEsamSettings {
  /**
   * @schema MediaConvertEsamSettings#ManifestConfirmConditionNotification
   */
  readonly manifestConfirmConditionNotification?: MediaConvertEsamManifestConfirmConditionNotification;

  /**
   * @schema MediaConvertEsamSettings#ResponseSignalPreroll
   */
  readonly responseSignalPreroll?: number;

  /**
   * @schema MediaConvertEsamSettings#SignalProcessingNotification
   */
  readonly signalProcessingNotification?: MediaConvertEsamSignalProcessingNotification;

}

/**
 * Converts an object of type 'MediaConvertEsamSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEsamSettings(obj: MediaConvertEsamSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestConfirmConditionNotification': toJson_MediaConvertEsamManifestConfirmConditionNotification(obj.manifestConfirmConditionNotification),
    'ResponseSignalPreroll': obj.responseSignalPreroll,
    'SignalProcessingNotification': toJson_MediaConvertEsamSignalProcessingNotification(obj.signalProcessingNotification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertExtendedDataServices
 */
export interface MediaConvertExtendedDataServices {
  /**
   * @schema MediaConvertExtendedDataServices#CopyProtectionAction
   */
  readonly copyProtectionAction?: string;

  /**
   * @schema MediaConvertExtendedDataServices#VchipAction
   */
  readonly vchipAction?: string;

}

/**
 * Converts an object of type 'MediaConvertExtendedDataServices' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertExtendedDataServices(obj: MediaConvertExtendedDataServices | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyProtectionAction': obj.copyProtectionAction,
    'VchipAction': obj.vchipAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertInput
 */
export interface MediaConvertInput {
  /**
   * @schema MediaConvertInput#AudioSelectorGroups
   */
  readonly audioSelectorGroups?: { [key: string]: MediaConvertAudioSelectorGroup };

  /**
   * @schema MediaConvertInput#AudioSelectors
   */
  readonly audioSelectors?: { [key: string]: MediaConvertAudioSelector };

  /**
   * @schema MediaConvertInput#CaptionSelectors
   */
  readonly captionSelectors?: { [key: string]: MediaConvertCaptionSelector };

  /**
   * @schema MediaConvertInput#Crop
   */
  readonly crop?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInput#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema MediaConvertInput#DecryptionSettings
   */
  readonly decryptionSettings?: MediaConvertInputDecryptionSettings;

  /**
   * @schema MediaConvertInput#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema MediaConvertInput#FileInput
   */
  readonly fileInput?: string;

  /**
   * @schema MediaConvertInput#FilterEnable
   */
  readonly filterEnable?: string;

  /**
   * @schema MediaConvertInput#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema MediaConvertInput#ImageInserter
   */
  readonly imageInserter?: MediaConvertImageInserter;

  /**
   * @schema MediaConvertInput#InputClippings
   */
  readonly inputClippings?: MediaConvertInputClipping[];

  /**
   * @schema MediaConvertInput#InputScanType
   */
  readonly inputScanType?: string;

  /**
   * @schema MediaConvertInput#Position
   */
  readonly position?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInput#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertInput#PsiControl
   */
  readonly psiControl?: string;

  /**
   * @schema MediaConvertInput#SupplementalImps
   */
  readonly supplementalImps?: string[];

  /**
   * @schema MediaConvertInput#TimecodeSource
   */
  readonly timecodeSource?: string;

  /**
   * @schema MediaConvertInput#TimecodeStart
   */
  readonly timecodeStart?: string;

  /**
   * @schema MediaConvertInput#VideoSelector
   */
  readonly videoSelector?: MediaConvertVideoSelector;

}

/**
 * Converts an object of type 'MediaConvertInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertInput(obj: MediaConvertInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioSelectorGroups': ((obj.audioSelectorGroups) === undefined) ? undefined : (Object.entries(obj.audioSelectorGroups).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MediaConvertAudioSelectorGroup(i[1]) }), {})),
    'AudioSelectors': ((obj.audioSelectors) === undefined) ? undefined : (Object.entries(obj.audioSelectors).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MediaConvertAudioSelector(i[1]) }), {})),
    'CaptionSelectors': ((obj.captionSelectors) === undefined) ? undefined : (Object.entries(obj.captionSelectors).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MediaConvertCaptionSelector(i[1]) }), {})),
    'Crop': toJson_MediaConvertRectangle(obj.crop),
    'DeblockFilter': obj.deblockFilter,
    'DecryptionSettings': toJson_MediaConvertInputDecryptionSettings(obj.decryptionSettings),
    'DenoiseFilter': obj.denoiseFilter,
    'FileInput': obj.fileInput,
    'FilterEnable': obj.filterEnable,
    'FilterStrength': obj.filterStrength,
    'ImageInserter': toJson_MediaConvertImageInserter(obj.imageInserter),
    'InputClippings': obj.inputClippings?.map(y => toJson_MediaConvertInputClipping(y)),
    'InputScanType': obj.inputScanType,
    'Position': toJson_MediaConvertRectangle(obj.position),
    'ProgramNumber': obj.programNumber,
    'PsiControl': obj.psiControl,
    'SupplementalImps': obj.supplementalImps?.map(y => y),
    'TimecodeSource': obj.timecodeSource,
    'TimecodeStart': obj.timecodeStart,
    'VideoSelector': toJson_MediaConvertVideoSelector(obj.videoSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertKantarWatermarkSettings
 */
export interface MediaConvertKantarWatermarkSettings {
  /**
   * @schema MediaConvertKantarWatermarkSettings#ChannelName
   */
  readonly channelName?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#ContentReference
   */
  readonly contentReference?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#CredentialsSecretName
   */
  readonly credentialsSecretName?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#FileOffset
   */
  readonly fileOffset?: number;

  /**
   * @schema MediaConvertKantarWatermarkSettings#KantarLicenseId
   */
  readonly kantarLicenseId?: number;

  /**
   * @schema MediaConvertKantarWatermarkSettings#KantarServerUrl
   */
  readonly kantarServerUrl?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#LogDestination
   */
  readonly logDestination?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#Metadata3
   */
  readonly metadata3?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#Metadata4
   */
  readonly metadata4?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#Metadata5
   */
  readonly metadata5?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#Metadata6
   */
  readonly metadata6?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#Metadata7
   */
  readonly metadata7?: string;

  /**
   * @schema MediaConvertKantarWatermarkSettings#Metadata8
   */
  readonly metadata8?: string;

}

/**
 * Converts an object of type 'MediaConvertKantarWatermarkSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertKantarWatermarkSettings(obj: MediaConvertKantarWatermarkSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelName': obj.channelName,
    'ContentReference': obj.contentReference,
    'CredentialsSecretName': obj.credentialsSecretName,
    'FileOffset': obj.fileOffset,
    'KantarLicenseId': obj.kantarLicenseId,
    'KantarServerUrl': obj.kantarServerUrl,
    'LogDestination': obj.logDestination,
    'Metadata3': obj.metadata3,
    'Metadata4': obj.metadata4,
    'Metadata5': obj.metadata5,
    'Metadata6': obj.metadata6,
    'Metadata7': obj.metadata7,
    'Metadata8': obj.metadata8,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMotionImageInserter
 */
export interface MediaConvertMotionImageInserter {
  /**
   * @schema MediaConvertMotionImageInserter#Framerate
   */
  readonly framerate?: MediaConvertMotionImageInsertionFramerate;

  /**
   * @schema MediaConvertMotionImageInserter#Input
   */
  readonly input?: string;

  /**
   * @schema MediaConvertMotionImageInserter#InsertionMode
   */
  readonly insertionMode?: string;

  /**
   * @schema MediaConvertMotionImageInserter#Offset
   */
  readonly offset?: MediaConvertMotionImageInsertionOffset;

  /**
   * @schema MediaConvertMotionImageInserter#Playback
   */
  readonly playback?: string;

  /**
   * @schema MediaConvertMotionImageInserter#StartTime
   */
  readonly startTime?: string;

}

/**
 * Converts an object of type 'MediaConvertMotionImageInserter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMotionImageInserter(obj: MediaConvertMotionImageInserter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Framerate': toJson_MediaConvertMotionImageInsertionFramerate(obj.framerate),
    'Input': obj.input,
    'InsertionMode': obj.insertionMode,
    'Offset': toJson_MediaConvertMotionImageInsertionOffset(obj.offset),
    'Playback': obj.playback,
    'StartTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNielsenConfiguration
 */
export interface MediaConvertNielsenConfiguration {
  /**
   * @schema MediaConvertNielsenConfiguration#BreakoutCode
   */
  readonly breakoutCode?: number;

  /**
   * @schema MediaConvertNielsenConfiguration#DistributorId
   */
  readonly distributorId?: string;

}

/**
 * Converts an object of type 'MediaConvertNielsenConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNielsenConfiguration(obj: MediaConvertNielsenConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BreakoutCode': obj.breakoutCode,
    'DistributorId': obj.distributorId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNielsenNonLinearWatermarkSettings
 */
export interface MediaConvertNielsenNonLinearWatermarkSettings {
  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#ActiveWatermarkProcess
   */
  readonly activeWatermarkProcess?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#AdiFilename
   */
  readonly adiFilename?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#AssetId
   */
  readonly assetId?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#AssetName
   */
  readonly assetName?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#CbetSourceId
   */
  readonly cbetSourceId?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#EpisodeId
   */
  readonly episodeId?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#MetadataDestination
   */
  readonly metadataDestination?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#SourceId
   */
  readonly sourceId?: number;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#SourceWatermarkStatus
   */
  readonly sourceWatermarkStatus?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#TicServerUrl
   */
  readonly ticServerUrl?: string;

  /**
   * @schema MediaConvertNielsenNonLinearWatermarkSettings#UniqueTicPerAudioTrack
   */
  readonly uniqueTicPerAudioTrack?: string;

}

/**
 * Converts an object of type 'MediaConvertNielsenNonLinearWatermarkSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNielsenNonLinearWatermarkSettings(obj: MediaConvertNielsenNonLinearWatermarkSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveWatermarkProcess': obj.activeWatermarkProcess,
    'AdiFilename': obj.adiFilename,
    'AssetId': obj.assetId,
    'AssetName': obj.assetName,
    'CbetSourceId': obj.cbetSourceId,
    'EpisodeId': obj.episodeId,
    'MetadataDestination': obj.metadataDestination,
    'SourceId': obj.sourceId,
    'SourceWatermarkStatus': obj.sourceWatermarkStatus,
    'TicServerUrl': obj.ticServerUrl,
    'UniqueTicPerAudioTrack': obj.uniqueTicPerAudioTrack,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutputGroup
 */
export interface MediaConvertOutputGroup {
  /**
   * @schema MediaConvertOutputGroup#AutomatedEncodingSettings
   */
  readonly automatedEncodingSettings?: MediaConvertAutomatedEncodingSettings;

  /**
   * @schema MediaConvertOutputGroup#CustomName
   */
  readonly customName?: string;

  /**
   * @schema MediaConvertOutputGroup#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConvertOutputGroup#OutputGroupSettings
   */
  readonly outputGroupSettings?: MediaConvertOutputGroupSettings;

  /**
   * @schema MediaConvertOutputGroup#Outputs
   */
  readonly outputs?: MediaConvertOutput[];

}

/**
 * Converts an object of type 'MediaConvertOutputGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutputGroup(obj: MediaConvertOutputGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomatedEncodingSettings': toJson_MediaConvertAutomatedEncodingSettings(obj.automatedEncodingSettings),
    'CustomName': obj.customName,
    'Name': obj.name,
    'OutputGroupSettings': toJson_MediaConvertOutputGroupSettings(obj.outputGroupSettings),
    'Outputs': obj.outputs?.map(y => toJson_MediaConvertOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTimecodeConfig
 */
export interface MediaConvertTimecodeConfig {
  /**
   * @schema MediaConvertTimecodeConfig#Anchor
   */
  readonly anchor?: string;

  /**
   * @schema MediaConvertTimecodeConfig#Source
   */
  readonly source?: string;

  /**
   * @schema MediaConvertTimecodeConfig#Start
   */
  readonly start?: string;

  /**
   * @schema MediaConvertTimecodeConfig#TimestampOffset
   */
  readonly timestampOffset?: string;

}

/**
 * Converts an object of type 'MediaConvertTimecodeConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTimecodeConfig(obj: MediaConvertTimecodeConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Anchor': obj.anchor,
    'Source': obj.source,
    'Start': obj.start,
    'TimestampOffset': obj.timestampOffset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTimedMetadataInsertion
 */
export interface MediaConvertTimedMetadataInsertion {
  /**
   * @schema MediaConvertTimedMetadataInsertion#Id3Insertions
   */
  readonly id3Insertions?: MediaConvertId3Insertion[];

}

/**
 * Converts an object of type 'MediaConvertTimedMetadataInsertion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTimedMetadataInsertion(obj: MediaConvertTimedMetadataInsertion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id3Insertions': obj.id3Insertions?.map(y => toJson_MediaConvertId3Insertion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertJobMessages
 */
export interface MediaConvertJobMessages {
  /**
   * @schema MediaConvertJobMessages#Info
   */
  readonly info?: string[];

  /**
   * @schema MediaConvertJobMessages#Warning
   */
  readonly warning?: string[];

}

/**
 * Converts an object of type 'MediaConvertJobMessages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertJobMessages(obj: MediaConvertJobMessages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Info': obj.info?.map(y => y),
    'Warning': obj.warning?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutputGroupDetail
 */
export interface MediaConvertOutputGroupDetail {
  /**
   * @schema MediaConvertOutputGroupDetail#OutputDetails
   */
  readonly outputDetails?: MediaConvertOutputDetail[];

}

/**
 * Converts an object of type 'MediaConvertOutputGroupDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutputGroupDetail(obj: MediaConvertOutputGroupDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputDetails': obj.outputDetails?.map(y => toJson_MediaConvertOutputDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertQueueTransition
 */
export interface MediaConvertQueueTransition {
  /**
   * @schema MediaConvertQueueTransition#DestinationQueue
   */
  readonly destinationQueue?: string;

  /**
   * @schema MediaConvertQueueTransition#SourceQueue
   */
  readonly sourceQueue?: string;

  /**
   * @schema MediaConvertQueueTransition#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * Converts an object of type 'MediaConvertQueueTransition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertQueueTransition(obj: MediaConvertQueueTransition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationQueue': obj.destinationQueue,
    'SourceQueue': obj.sourceQueue,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTiming
 */
export interface MediaConvertTiming {
  /**
   * @schema MediaConvertTiming#FinishTime
   */
  readonly finishTime?: string;

  /**
   * @schema MediaConvertTiming#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaConvertTiming#SubmitTime
   */
  readonly submitTime?: string;

}

/**
 * Converts an object of type 'MediaConvertTiming' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTiming(obj: MediaConvertTiming | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FinishTime': obj.finishTime,
    'StartTime': obj.startTime,
    'SubmitTime': obj.submitTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertInputTemplate
 */
export interface MediaConvertInputTemplate {
  /**
   * @schema MediaConvertInputTemplate#AudioSelectorGroups
   */
  readonly audioSelectorGroups?: { [key: string]: MediaConvertAudioSelectorGroup };

  /**
   * @schema MediaConvertInputTemplate#AudioSelectors
   */
  readonly audioSelectors?: { [key: string]: MediaConvertAudioSelector };

  /**
   * @schema MediaConvertInputTemplate#CaptionSelectors
   */
  readonly captionSelectors?: { [key: string]: MediaConvertCaptionSelector };

  /**
   * @schema MediaConvertInputTemplate#Crop
   */
  readonly crop?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInputTemplate#DeblockFilter
   */
  readonly deblockFilter?: string;

  /**
   * @schema MediaConvertInputTemplate#DenoiseFilter
   */
  readonly denoiseFilter?: string;

  /**
   * @schema MediaConvertInputTemplate#FilterEnable
   */
  readonly filterEnable?: string;

  /**
   * @schema MediaConvertInputTemplate#FilterStrength
   */
  readonly filterStrength?: number;

  /**
   * @schema MediaConvertInputTemplate#ImageInserter
   */
  readonly imageInserter?: MediaConvertImageInserter;

  /**
   * @schema MediaConvertInputTemplate#InputClippings
   */
  readonly inputClippings?: MediaConvertInputClipping[];

  /**
   * @schema MediaConvertInputTemplate#InputScanType
   */
  readonly inputScanType?: string;

  /**
   * @schema MediaConvertInputTemplate#Position
   */
  readonly position?: MediaConvertRectangle;

  /**
   * @schema MediaConvertInputTemplate#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertInputTemplate#PsiControl
   */
  readonly psiControl?: string;

  /**
   * @schema MediaConvertInputTemplate#TimecodeSource
   */
  readonly timecodeSource?: string;

  /**
   * @schema MediaConvertInputTemplate#TimecodeStart
   */
  readonly timecodeStart?: string;

  /**
   * @schema MediaConvertInputTemplate#VideoSelector
   */
  readonly videoSelector?: MediaConvertVideoSelector;

}

/**
 * Converts an object of type 'MediaConvertInputTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertInputTemplate(obj: MediaConvertInputTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioSelectorGroups': ((obj.audioSelectorGroups) === undefined) ? undefined : (Object.entries(obj.audioSelectorGroups).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MediaConvertAudioSelectorGroup(i[1]) }), {})),
    'AudioSelectors': ((obj.audioSelectors) === undefined) ? undefined : (Object.entries(obj.audioSelectors).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MediaConvertAudioSelector(i[1]) }), {})),
    'CaptionSelectors': ((obj.captionSelectors) === undefined) ? undefined : (Object.entries(obj.captionSelectors).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_MediaConvertCaptionSelector(i[1]) }), {})),
    'Crop': toJson_MediaConvertRectangle(obj.crop),
    'DeblockFilter': obj.deblockFilter,
    'DenoiseFilter': obj.denoiseFilter,
    'FilterEnable': obj.filterEnable,
    'FilterStrength': obj.filterStrength,
    'ImageInserter': toJson_MediaConvertImageInserter(obj.imageInserter),
    'InputClippings': obj.inputClippings?.map(y => toJson_MediaConvertInputClipping(y)),
    'InputScanType': obj.inputScanType,
    'Position': toJson_MediaConvertRectangle(obj.position),
    'ProgramNumber': obj.programNumber,
    'PsiControl': obj.psiControl,
    'TimecodeSource': obj.timecodeSource,
    'TimecodeStart': obj.timecodeStart,
    'VideoSelector': toJson_MediaConvertVideoSelector(obj.videoSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAudioDescription
 */
export interface MediaConvertAudioDescription {
  /**
   * @schema MediaConvertAudioDescription#AudioChannelTaggingSettings
   */
  readonly audioChannelTaggingSettings?: MediaConvertAudioChannelTaggingSettings;

  /**
   * @schema MediaConvertAudioDescription#AudioNormalizationSettings
   */
  readonly audioNormalizationSettings?: MediaConvertAudioNormalizationSettings;

  /**
   * @schema MediaConvertAudioDescription#AudioSourceName
   */
  readonly audioSourceName?: string;

  /**
   * @schema MediaConvertAudioDescription#AudioType
   */
  readonly audioType?: number;

  /**
   * @schema MediaConvertAudioDescription#AudioTypeControl
   */
  readonly audioTypeControl?: string;

  /**
   * @schema MediaConvertAudioDescription#CodecSettings
   */
  readonly codecSettings?: MediaConvertAudioCodecSettings;

  /**
   * @schema MediaConvertAudioDescription#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertAudioDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertAudioDescription#LanguageCodeControl
   */
  readonly languageCodeControl?: string;

  /**
   * @schema MediaConvertAudioDescription#RemixSettings
   */
  readonly remixSettings?: MediaConvertRemixSettings;

  /**
   * @schema MediaConvertAudioDescription#StreamName
   */
  readonly streamName?: string;

}

/**
 * Converts an object of type 'MediaConvertAudioDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAudioDescription(obj: MediaConvertAudioDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioChannelTaggingSettings': toJson_MediaConvertAudioChannelTaggingSettings(obj.audioChannelTaggingSettings),
    'AudioNormalizationSettings': toJson_MediaConvertAudioNormalizationSettings(obj.audioNormalizationSettings),
    'AudioSourceName': obj.audioSourceName,
    'AudioType': obj.audioType,
    'AudioTypeControl': obj.audioTypeControl,
    'CodecSettings': toJson_MediaConvertAudioCodecSettings(obj.codecSettings),
    'CustomLanguageCode': obj.customLanguageCode,
    'LanguageCode': obj.languageCode,
    'LanguageCodeControl': obj.languageCodeControl,
    'RemixSettings': toJson_MediaConvertRemixSettings(obj.remixSettings),
    'StreamName': obj.streamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCaptionDescriptionPreset
 */
export interface MediaConvertCaptionDescriptionPreset {
  /**
   * @schema MediaConvertCaptionDescriptionPreset#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertCaptionDescriptionPreset#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertCaptionDestinationSettings;

  /**
   * @schema MediaConvertCaptionDescriptionPreset#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertCaptionDescriptionPreset#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * Converts an object of type 'MediaConvertCaptionDescriptionPreset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCaptionDescriptionPreset(obj: MediaConvertCaptionDescriptionPreset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomLanguageCode': obj.customLanguageCode,
    'DestinationSettings': toJson_MediaConvertCaptionDestinationSettings(obj.destinationSettings),
    'LanguageCode': obj.languageCode,
    'LanguageDescription': obj.languageDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertContainerSettings
 */
export interface MediaConvertContainerSettings {
  /**
   * @schema MediaConvertContainerSettings#CmfcSettings
   */
  readonly cmfcSettings?: MediaConvertCmfcSettings;

  /**
   * @schema MediaConvertContainerSettings#Container
   */
  readonly container?: string;

  /**
   * @schema MediaConvertContainerSettings#F4vSettings
   */
  readonly f4VSettings?: MediaConvertF4vSettings;

  /**
   * @schema MediaConvertContainerSettings#M2tsSettings
   */
  readonly m2TsSettings?: MediaConvertM2tsSettings;

  /**
   * @schema MediaConvertContainerSettings#M3u8Settings
   */
  readonly m3U8Settings?: MediaConvertM3u8Settings;

  /**
   * @schema MediaConvertContainerSettings#MovSettings
   */
  readonly movSettings?: MediaConvertMovSettings;

  /**
   * @schema MediaConvertContainerSettings#Mp4Settings
   */
  readonly mp4Settings?: MediaConvertMp4Settings;

  /**
   * @schema MediaConvertContainerSettings#MpdSettings
   */
  readonly mpdSettings?: MediaConvertMpdSettings;

  /**
   * @schema MediaConvertContainerSettings#MxfSettings
   */
  readonly mxfSettings?: MediaConvertMxfSettings;

}

/**
 * Converts an object of type 'MediaConvertContainerSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertContainerSettings(obj: MediaConvertContainerSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CmfcSettings': toJson_MediaConvertCmfcSettings(obj.cmfcSettings),
    'Container': obj.container,
    'F4vSettings': toJson_MediaConvertF4vSettings(obj.f4VSettings),
    'M2tsSettings': toJson_MediaConvertM2tsSettings(obj.m2TsSettings),
    'M3u8Settings': toJson_MediaConvertM3u8Settings(obj.m3U8Settings),
    'MovSettings': toJson_MediaConvertMovSettings(obj.movSettings),
    'Mp4Settings': toJson_MediaConvertMp4Settings(obj.mp4Settings),
    'MpdSettings': toJson_MediaConvertMpdSettings(obj.mpdSettings),
    'MxfSettings': toJson_MediaConvertMxfSettings(obj.mxfSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVideoDescription
 */
export interface MediaConvertVideoDescription {
  /**
   * @schema MediaConvertVideoDescription#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaConvertVideoDescription#AntiAlias
   */
  readonly antiAlias?: string;

  /**
   * @schema MediaConvertVideoDescription#CodecSettings
   */
  readonly codecSettings?: MediaConvertVideoCodecSettings;

  /**
   * @schema MediaConvertVideoDescription#ColorMetadata
   */
  readonly colorMetadata?: string;

  /**
   * @schema MediaConvertVideoDescription#Crop
   */
  readonly crop?: MediaConvertRectangle;

  /**
   * @schema MediaConvertVideoDescription#DropFrameTimecode
   */
  readonly dropFrameTimecode?: string;

  /**
   * @schema MediaConvertVideoDescription#FixedAfd
   */
  readonly fixedAfd?: number;

  /**
   * @schema MediaConvertVideoDescription#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertVideoDescription#Position
   */
  readonly position?: MediaConvertRectangle;

  /**
   * @schema MediaConvertVideoDescription#RespondToAfd
   */
  readonly respondToAfd?: string;

  /**
   * @schema MediaConvertVideoDescription#ScalingBehavior
   */
  readonly scalingBehavior?: string;

  /**
   * @schema MediaConvertVideoDescription#Sharpness
   */
  readonly sharpness?: number;

  /**
   * @schema MediaConvertVideoDescription#TimecodeInsertion
   */
  readonly timecodeInsertion?: string;

  /**
   * @schema MediaConvertVideoDescription#VideoPreprocessors
   */
  readonly videoPreprocessors?: MediaConvertVideoPreprocessor;

  /**
   * @schema MediaConvertVideoDescription#Width
   */
  readonly width?: number;

}

/**
 * Converts an object of type 'MediaConvertVideoDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVideoDescription(obj: MediaConvertVideoDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AfdSignaling': obj.afdSignaling,
    'AntiAlias': obj.antiAlias,
    'CodecSettings': toJson_MediaConvertVideoCodecSettings(obj.codecSettings),
    'ColorMetadata': obj.colorMetadata,
    'Crop': toJson_MediaConvertRectangle(obj.crop),
    'DropFrameTimecode': obj.dropFrameTimecode,
    'FixedAfd': obj.fixedAfd,
    'Height': obj.height,
    'Position': toJson_MediaConvertRectangle(obj.position),
    'RespondToAfd': obj.respondToAfd,
    'ScalingBehavior': obj.scalingBehavior,
    'Sharpness': obj.sharpness,
    'TimecodeInsertion': obj.timecodeInsertion,
    'VideoPreprocessors': toJson_MediaConvertVideoPreprocessor(obj.videoPreprocessors),
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertReservationPlan
 */
export interface MediaConvertReservationPlan {
  /**
   * @schema MediaConvertReservationPlan#Commitment
   */
  readonly commitment?: string;

  /**
   * @schema MediaConvertReservationPlan#ExpiresAt
   */
  readonly expiresAt?: string;

  /**
   * @schema MediaConvertReservationPlan#PurchasedAt
   */
  readonly purchasedAt?: string;

  /**
   * @schema MediaConvertReservationPlan#RenewalType
   */
  readonly renewalType?: string;

  /**
   * @schema MediaConvertReservationPlan#ReservedSlots
   */
  readonly reservedSlots?: number;

  /**
   * @schema MediaConvertReservationPlan#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConvertReservationPlan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertReservationPlan(obj: MediaConvertReservationPlan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Commitment': obj.commitment,
    'ExpiresAt': obj.expiresAt,
    'PurchasedAt': obj.purchasedAt,
    'RenewalType': obj.renewalType,
    'ReservedSlots': obj.reservedSlots,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEsamManifestConfirmConditionNotification
 */
export interface MediaConvertEsamManifestConfirmConditionNotification {
  /**
   * @schema MediaConvertEsamManifestConfirmConditionNotification#MccXml
   */
  readonly mccXml?: string;

}

/**
 * Converts an object of type 'MediaConvertEsamManifestConfirmConditionNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEsamManifestConfirmConditionNotification(obj: MediaConvertEsamManifestConfirmConditionNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MccXml': obj.mccXml,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEsamSignalProcessingNotification
 */
export interface MediaConvertEsamSignalProcessingNotification {
  /**
   * @schema MediaConvertEsamSignalProcessingNotification#SccXml
   */
  readonly sccXml?: string;

}

/**
 * Converts an object of type 'MediaConvertEsamSignalProcessingNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEsamSignalProcessingNotification(obj: MediaConvertEsamSignalProcessingNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SccXml': obj.sccXml,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAudioSelectorGroup
 */
export interface MediaConvertAudioSelectorGroup {
  /**
   * @schema MediaConvertAudioSelectorGroup#AudioSelectorNames
   */
  readonly audioSelectorNames?: string[];

}

/**
 * Converts an object of type 'MediaConvertAudioSelectorGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAudioSelectorGroup(obj: MediaConvertAudioSelectorGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioSelectorNames': obj.audioSelectorNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAudioSelector
 */
export interface MediaConvertAudioSelector {
  /**
   * @schema MediaConvertAudioSelector#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertAudioSelector#DefaultSelection
   */
  readonly defaultSelection?: string;

  /**
   * @schema MediaConvertAudioSelector#ExternalAudioFileInput
   */
  readonly externalAudioFileInput?: string;

  /**
   * @schema MediaConvertAudioSelector#HlsRenditionGroupSettings
   */
  readonly hlsRenditionGroupSettings?: MediaConvertHlsRenditionGroupSettings;

  /**
   * @schema MediaConvertAudioSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertAudioSelector#Offset
   */
  readonly offset?: number;

  /**
   * @schema MediaConvertAudioSelector#Pids
   */
  readonly pids?: number[];

  /**
   * @schema MediaConvertAudioSelector#ProgramSelection
   */
  readonly programSelection?: number;

  /**
   * @schema MediaConvertAudioSelector#RemixSettings
   */
  readonly remixSettings?: MediaConvertRemixSettings;

  /**
   * @schema MediaConvertAudioSelector#SelectorType
   */
  readonly selectorType?: string;

  /**
   * @schema MediaConvertAudioSelector#Tracks
   */
  readonly tracks?: number[];

}

/**
 * Converts an object of type 'MediaConvertAudioSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAudioSelector(obj: MediaConvertAudioSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomLanguageCode': obj.customLanguageCode,
    'DefaultSelection': obj.defaultSelection,
    'ExternalAudioFileInput': obj.externalAudioFileInput,
    'HlsRenditionGroupSettings': toJson_MediaConvertHlsRenditionGroupSettings(obj.hlsRenditionGroupSettings),
    'LanguageCode': obj.languageCode,
    'Offset': obj.offset,
    'Pids': obj.pids?.map(y => y),
    'ProgramSelection': obj.programSelection,
    'RemixSettings': toJson_MediaConvertRemixSettings(obj.remixSettings),
    'SelectorType': obj.selectorType,
    'Tracks': obj.tracks?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCaptionSelector
 */
export interface MediaConvertCaptionSelector {
  /**
   * @schema MediaConvertCaptionSelector#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertCaptionSelector#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertCaptionSelector#SourceSettings
   */
  readonly sourceSettings?: MediaConvertCaptionSourceSettings;

}

/**
 * Converts an object of type 'MediaConvertCaptionSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCaptionSelector(obj: MediaConvertCaptionSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomLanguageCode': obj.customLanguageCode,
    'LanguageCode': obj.languageCode,
    'SourceSettings': toJson_MediaConvertCaptionSourceSettings(obj.sourceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertRectangle
 */
export interface MediaConvertRectangle {
  /**
   * @schema MediaConvertRectangle#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertRectangle#Width
   */
  readonly width?: number;

  /**
   * @schema MediaConvertRectangle#X
   */
  readonly x?: number;

  /**
   * @schema MediaConvertRectangle#Y
   */
  readonly y?: number;

}

/**
 * Converts an object of type 'MediaConvertRectangle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertRectangle(obj: MediaConvertRectangle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Height': obj.height,
    'Width': obj.width,
    'X': obj.x,
    'Y': obj.y,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertInputDecryptionSettings
 */
export interface MediaConvertInputDecryptionSettings {
  /**
   * @schema MediaConvertInputDecryptionSettings#DecryptionMode
   */
  readonly decryptionMode?: string;

  /**
   * @schema MediaConvertInputDecryptionSettings#EncryptedDecryptionKey
   */
  readonly encryptedDecryptionKey?: string;

  /**
   * @schema MediaConvertInputDecryptionSettings#InitializationVector
   */
  readonly initializationVector?: string;

  /**
   * @schema MediaConvertInputDecryptionSettings#KmsKeyRegion
   */
  readonly kmsKeyRegion?: string;

}

/**
 * Converts an object of type 'MediaConvertInputDecryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertInputDecryptionSettings(obj: MediaConvertInputDecryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DecryptionMode': obj.decryptionMode,
    'EncryptedDecryptionKey': obj.encryptedDecryptionKey,
    'InitializationVector': obj.initializationVector,
    'KmsKeyRegion': obj.kmsKeyRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertImageInserter
 */
export interface MediaConvertImageInserter {
  /**
   * @schema MediaConvertImageInserter#InsertableImages
   */
  readonly insertableImages?: MediaConvertInsertableImage[];

}

/**
 * Converts an object of type 'MediaConvertImageInserter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertImageInserter(obj: MediaConvertImageInserter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsertableImages': obj.insertableImages?.map(y => toJson_MediaConvertInsertableImage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertInputClipping
 */
export interface MediaConvertInputClipping {
  /**
   * @schema MediaConvertInputClipping#EndTimecode
   */
  readonly endTimecode?: string;

  /**
   * @schema MediaConvertInputClipping#StartTimecode
   */
  readonly startTimecode?: string;

}

/**
 * Converts an object of type 'MediaConvertInputClipping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertInputClipping(obj: MediaConvertInputClipping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndTimecode': obj.endTimecode,
    'StartTimecode': obj.startTimecode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVideoSelector
 */
export interface MediaConvertVideoSelector {
  /**
   * @schema MediaConvertVideoSelector#AlphaBehavior
   */
  readonly alphaBehavior?: string;

  /**
   * @schema MediaConvertVideoSelector#ColorSpace
   */
  readonly colorSpace?: string;

  /**
   * @schema MediaConvertVideoSelector#ColorSpaceUsage
   */
  readonly colorSpaceUsage?: string;

  /**
   * @schema MediaConvertVideoSelector#Hdr10Metadata
   */
  readonly hdr10Metadata?: MediaConvertHdr10Metadata;

  /**
   * @schema MediaConvertVideoSelector#Pid
   */
  readonly pid?: number;

  /**
   * @schema MediaConvertVideoSelector#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertVideoSelector#Rotate
   */
  readonly rotate?: string;

  /**
   * @schema MediaConvertVideoSelector#SampleRange
   */
  readonly sampleRange?: string;

}

/**
 * Converts an object of type 'MediaConvertVideoSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVideoSelector(obj: MediaConvertVideoSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AlphaBehavior': obj.alphaBehavior,
    'ColorSpace': obj.colorSpace,
    'ColorSpaceUsage': obj.colorSpaceUsage,
    'Hdr10Metadata': toJson_MediaConvertHdr10Metadata(obj.hdr10Metadata),
    'Pid': obj.pid,
    'ProgramNumber': obj.programNumber,
    'Rotate': obj.rotate,
    'SampleRange': obj.sampleRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMotionImageInsertionFramerate
 */
export interface MediaConvertMotionImageInsertionFramerate {
  /**
   * @schema MediaConvertMotionImageInsertionFramerate#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertMotionImageInsertionFramerate#FramerateNumerator
   */
  readonly framerateNumerator?: number;

}

/**
 * Converts an object of type 'MediaConvertMotionImageInsertionFramerate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMotionImageInsertionFramerate(obj: MediaConvertMotionImageInsertionFramerate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMotionImageInsertionOffset
 */
export interface MediaConvertMotionImageInsertionOffset {
  /**
   * @schema MediaConvertMotionImageInsertionOffset#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema MediaConvertMotionImageInsertionOffset#ImageY
   */
  readonly imageY?: number;

}

/**
 * Converts an object of type 'MediaConvertMotionImageInsertionOffset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMotionImageInsertionOffset(obj: MediaConvertMotionImageInsertionOffset | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageX': obj.imageX,
    'ImageY': obj.imageY,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAutomatedEncodingSettings
 */
export interface MediaConvertAutomatedEncodingSettings {
  /**
   * @schema MediaConvertAutomatedEncodingSettings#AbrSettings
   */
  readonly abrSettings?: MediaConvertAutomatedAbrSettings;

}

/**
 * Converts an object of type 'MediaConvertAutomatedEncodingSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAutomatedEncodingSettings(obj: MediaConvertAutomatedEncodingSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AbrSettings': toJson_MediaConvertAutomatedAbrSettings(obj.abrSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutputGroupSettings
 */
export interface MediaConvertOutputGroupSettings {
  /**
   * @schema MediaConvertOutputGroupSettings#CmafGroupSettings
   */
  readonly cmafGroupSettings?: MediaConvertCmafGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#DashIsoGroupSettings
   */
  readonly dashIsoGroupSettings?: MediaConvertDashIsoGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#FileGroupSettings
   */
  readonly fileGroupSettings?: MediaConvertFileGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#HlsGroupSettings
   */
  readonly hlsGroupSettings?: MediaConvertHlsGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#MsSmoothGroupSettings
   */
  readonly msSmoothGroupSettings?: MediaConvertMsSmoothGroupSettings;

  /**
   * @schema MediaConvertOutputGroupSettings#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaConvertOutputGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutputGroupSettings(obj: MediaConvertOutputGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CmafGroupSettings': toJson_MediaConvertCmafGroupSettings(obj.cmafGroupSettings),
    'DashIsoGroupSettings': toJson_MediaConvertDashIsoGroupSettings(obj.dashIsoGroupSettings),
    'FileGroupSettings': toJson_MediaConvertFileGroupSettings(obj.fileGroupSettings),
    'HlsGroupSettings': toJson_MediaConvertHlsGroupSettings(obj.hlsGroupSettings),
    'MsSmoothGroupSettings': toJson_MediaConvertMsSmoothGroupSettings(obj.msSmoothGroupSettings),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutput
 */
export interface MediaConvertOutput {
  /**
   * @schema MediaConvertOutput#AudioDescriptions
   */
  readonly audioDescriptions?: MediaConvertAudioDescription[];

  /**
   * @schema MediaConvertOutput#CaptionDescriptions
   */
  readonly captionDescriptions?: MediaConvertCaptionDescription[];

  /**
   * @schema MediaConvertOutput#ContainerSettings
   */
  readonly containerSettings?: MediaConvertContainerSettings;

  /**
   * @schema MediaConvertOutput#Extension
   */
  readonly extension?: string;

  /**
   * @schema MediaConvertOutput#NameModifier
   */
  readonly nameModifier?: string;

  /**
   * @schema MediaConvertOutput#OutputSettings
   */
  readonly outputSettings?: MediaConvertOutputSettings;

  /**
   * @schema MediaConvertOutput#Preset
   */
  readonly preset?: string;

  /**
   * @schema MediaConvertOutput#VideoDescription
   */
  readonly videoDescription?: MediaConvertVideoDescription;

}

/**
 * Converts an object of type 'MediaConvertOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutput(obj: MediaConvertOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDescriptions': obj.audioDescriptions?.map(y => toJson_MediaConvertAudioDescription(y)),
    'CaptionDescriptions': obj.captionDescriptions?.map(y => toJson_MediaConvertCaptionDescription(y)),
    'ContainerSettings': toJson_MediaConvertContainerSettings(obj.containerSettings),
    'Extension': obj.extension,
    'NameModifier': obj.nameModifier,
    'OutputSettings': toJson_MediaConvertOutputSettings(obj.outputSettings),
    'Preset': obj.preset,
    'VideoDescription': toJson_MediaConvertVideoDescription(obj.videoDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertId3Insertion
 */
export interface MediaConvertId3Insertion {
  /**
   * @schema MediaConvertId3Insertion#Id3
   */
  readonly id3?: string;

  /**
   * @schema MediaConvertId3Insertion#Timecode
   */
  readonly timecode?: string;

}

/**
 * Converts an object of type 'MediaConvertId3Insertion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertId3Insertion(obj: MediaConvertId3Insertion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id3': obj.id3,
    'Timecode': obj.timecode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutputDetail
 */
export interface MediaConvertOutputDetail {
  /**
   * @schema MediaConvertOutputDetail#DurationInMs
   */
  readonly durationInMs?: number;

  /**
   * @schema MediaConvertOutputDetail#VideoDetails
   */
  readonly videoDetails?: MediaConvertVideoDetail;

}

/**
 * Converts an object of type 'MediaConvertOutputDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutputDetail(obj: MediaConvertOutputDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationInMs': obj.durationInMs,
    'VideoDetails': toJson_MediaConvertVideoDetail(obj.videoDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAudioChannelTaggingSettings
 */
export interface MediaConvertAudioChannelTaggingSettings {
  /**
   * @schema MediaConvertAudioChannelTaggingSettings#ChannelTag
   */
  readonly channelTag?: string;

}

/**
 * Converts an object of type 'MediaConvertAudioChannelTaggingSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAudioChannelTaggingSettings(obj: MediaConvertAudioChannelTaggingSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelTag': obj.channelTag,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAudioNormalizationSettings
 */
export interface MediaConvertAudioNormalizationSettings {
  /**
   * @schema MediaConvertAudioNormalizationSettings#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#AlgorithmControl
   */
  readonly algorithmControl?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#CorrectionGateLevel
   */
  readonly correctionGateLevel?: number;

  /**
   * @schema MediaConvertAudioNormalizationSettings#LoudnessLogging
   */
  readonly loudnessLogging?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#PeakCalculation
   */
  readonly peakCalculation?: string;

  /**
   * @schema MediaConvertAudioNormalizationSettings#TargetLkfs
   */
  readonly targetLkfs?: number;

}

/**
 * Converts an object of type 'MediaConvertAudioNormalizationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAudioNormalizationSettings(obj: MediaConvertAudioNormalizationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Algorithm': obj.algorithm,
    'AlgorithmControl': obj.algorithmControl,
    'CorrectionGateLevel': obj.correctionGateLevel,
    'LoudnessLogging': obj.loudnessLogging,
    'PeakCalculation': obj.peakCalculation,
    'TargetLkfs': obj.targetLkfs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAudioCodecSettings
 */
export interface MediaConvertAudioCodecSettings {
  /**
   * @schema MediaConvertAudioCodecSettings#AacSettings
   */
  readonly aacSettings?: MediaConvertAacSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#Ac3Settings
   */
  readonly ac3Settings?: MediaConvertAc3Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#AiffSettings
   */
  readonly aiffSettings?: MediaConvertAiffSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaConvertAudioCodecSettings#Eac3AtmosSettings
   */
  readonly eac3AtmosSettings?: MediaConvertEac3AtmosSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#Eac3Settings
   */
  readonly eac3Settings?: MediaConvertEac3Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#Mp2Settings
   */
  readonly mp2Settings?: MediaConvertMp2Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#Mp3Settings
   */
  readonly mp3Settings?: MediaConvertMp3Settings;

  /**
   * @schema MediaConvertAudioCodecSettings#OpusSettings
   */
  readonly opusSettings?: MediaConvertOpusSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#VorbisSettings
   */
  readonly vorbisSettings?: MediaConvertVorbisSettings;

  /**
   * @schema MediaConvertAudioCodecSettings#WavSettings
   */
  readonly wavSettings?: MediaConvertWavSettings;

}

/**
 * Converts an object of type 'MediaConvertAudioCodecSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAudioCodecSettings(obj: MediaConvertAudioCodecSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AacSettings': toJson_MediaConvertAacSettings(obj.aacSettings),
    'Ac3Settings': toJson_MediaConvertAc3Settings(obj.ac3Settings),
    'AiffSettings': toJson_MediaConvertAiffSettings(obj.aiffSettings),
    'Codec': obj.codec,
    'Eac3AtmosSettings': toJson_MediaConvertEac3AtmosSettings(obj.eac3AtmosSettings),
    'Eac3Settings': toJson_MediaConvertEac3Settings(obj.eac3Settings),
    'Mp2Settings': toJson_MediaConvertMp2Settings(obj.mp2Settings),
    'Mp3Settings': toJson_MediaConvertMp3Settings(obj.mp3Settings),
    'OpusSettings': toJson_MediaConvertOpusSettings(obj.opusSettings),
    'VorbisSettings': toJson_MediaConvertVorbisSettings(obj.vorbisSettings),
    'WavSettings': toJson_MediaConvertWavSettings(obj.wavSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertRemixSettings
 */
export interface MediaConvertRemixSettings {
  /**
   * @schema MediaConvertRemixSettings#ChannelMapping
   */
  readonly channelMapping?: MediaConvertChannelMapping;

  /**
   * @schema MediaConvertRemixSettings#ChannelsIn
   */
  readonly channelsIn?: number;

  /**
   * @schema MediaConvertRemixSettings#ChannelsOut
   */
  readonly channelsOut?: number;

}

/**
 * Converts an object of type 'MediaConvertRemixSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertRemixSettings(obj: MediaConvertRemixSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelMapping': toJson_MediaConvertChannelMapping(obj.channelMapping),
    'ChannelsIn': obj.channelsIn,
    'ChannelsOut': obj.channelsOut,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCaptionDestinationSettings
 */
export interface MediaConvertCaptionDestinationSettings {
  /**
   * @schema MediaConvertCaptionDestinationSettings#BurninDestinationSettings
   */
  readonly burninDestinationSettings?: MediaConvertBurninDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#DestinationType
   */
  readonly destinationType?: string;

  /**
   * @schema MediaConvertCaptionDestinationSettings#DvbSubDestinationSettings
   */
  readonly dvbSubDestinationSettings?: MediaConvertDvbSubDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#EmbeddedDestinationSettings
   */
  readonly embeddedDestinationSettings?: MediaConvertEmbeddedDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#ImscDestinationSettings
   */
  readonly imscDestinationSettings?: MediaConvertImscDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#SccDestinationSettings
   */
  readonly sccDestinationSettings?: MediaConvertSccDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#SrtDestinationSettings
   */
  readonly srtDestinationSettings?: MediaConvertSrtDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#TeletextDestinationSettings
   */
  readonly teletextDestinationSettings?: MediaConvertTeletextDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#TtmlDestinationSettings
   */
  readonly ttmlDestinationSettings?: MediaConvertTtmlDestinationSettings;

  /**
   * @schema MediaConvertCaptionDestinationSettings#WebvttDestinationSettings
   */
  readonly webvttDestinationSettings?: MediaConvertWebvttDestinationSettings;

}

/**
 * Converts an object of type 'MediaConvertCaptionDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCaptionDestinationSettings(obj: MediaConvertCaptionDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BurninDestinationSettings': toJson_MediaConvertBurninDestinationSettings(obj.burninDestinationSettings),
    'DestinationType': obj.destinationType,
    'DvbSubDestinationSettings': toJson_MediaConvertDvbSubDestinationSettings(obj.dvbSubDestinationSettings),
    'EmbeddedDestinationSettings': toJson_MediaConvertEmbeddedDestinationSettings(obj.embeddedDestinationSettings),
    'ImscDestinationSettings': toJson_MediaConvertImscDestinationSettings(obj.imscDestinationSettings),
    'SccDestinationSettings': toJson_MediaConvertSccDestinationSettings(obj.sccDestinationSettings),
    'SrtDestinationSettings': toJson_MediaConvertSrtDestinationSettings(obj.srtDestinationSettings),
    'TeletextDestinationSettings': toJson_MediaConvertTeletextDestinationSettings(obj.teletextDestinationSettings),
    'TtmlDestinationSettings': toJson_MediaConvertTtmlDestinationSettings(obj.ttmlDestinationSettings),
    'WebvttDestinationSettings': toJson_MediaConvertWebvttDestinationSettings(obj.webvttDestinationSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCmfcSettings
 */
export interface MediaConvertCmfcSettings {
  /**
   * @schema MediaConvertCmfcSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertCmfcSettings#AudioGroupId
   */
  readonly audioGroupId?: string;

  /**
   * @schema MediaConvertCmfcSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema MediaConvertCmfcSettings#AudioTrackType
   */
  readonly audioTrackType?: string;

  /**
   * @schema MediaConvertCmfcSettings#DescriptiveVideoServiceFlag
   */
  readonly descriptiveVideoServiceFlag?: string;

  /**
   * @schema MediaConvertCmfcSettings#IFrameOnlyManifest
   */
  readonly iFrameOnlyManifest?: string;

  /**
   * @schema MediaConvertCmfcSettings#Scte35Esam
   */
  readonly scte35Esam?: string;

  /**
   * @schema MediaConvertCmfcSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * Converts an object of type 'MediaConvertCmfcSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCmfcSettings(obj: MediaConvertCmfcSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDuration': obj.audioDuration,
    'AudioGroupId': obj.audioGroupId,
    'AudioRenditionSets': obj.audioRenditionSets,
    'AudioTrackType': obj.audioTrackType,
    'DescriptiveVideoServiceFlag': obj.descriptiveVideoServiceFlag,
    'IFrameOnlyManifest': obj.iFrameOnlyManifest,
    'Scte35Esam': obj.scte35Esam,
    'Scte35Source': obj.scte35Source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertF4vSettings
 */
export interface MediaConvertF4vSettings {
  /**
   * @schema MediaConvertF4vSettings#MoovPlacement
   */
  readonly moovPlacement?: string;

}

/**
 * Converts an object of type 'MediaConvertF4vSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertF4vSettings(obj: MediaConvertF4vSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MoovPlacement': obj.moovPlacement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertM2tsSettings
 */
export interface MediaConvertM2tsSettings {
  /**
   * @schema MediaConvertM2tsSettings#AudioBufferModel
   */
  readonly audioBufferModel?: string;

  /**
   * @schema MediaConvertM2tsSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertM2tsSettings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema MediaConvertM2tsSettings#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema MediaConvertM2tsSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertM2tsSettings#BufferModel
   */
  readonly bufferModel?: string;

  /**
   * @schema MediaConvertM2tsSettings#DvbNitSettings
   */
  readonly dvbNitSettings?: MediaConvertDvbNitSettings;

  /**
   * @schema MediaConvertM2tsSettings#DvbSdtSettings
   */
  readonly dvbSdtSettings?: MediaConvertDvbSdtSettings;

  /**
   * @schema MediaConvertM2tsSettings#DvbSubPids
   */
  readonly dvbSubPids?: number[];

  /**
   * @schema MediaConvertM2tsSettings#DvbTdtSettings
   */
  readonly dvbTdtSettings?: MediaConvertDvbTdtSettings;

  /**
   * @schema MediaConvertM2tsSettings#DvbTeletextPid
   */
  readonly dvbTeletextPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#EbpAudioInterval
   */
  readonly ebpAudioInterval?: string;

  /**
   * @schema MediaConvertM2tsSettings#EbpPlacement
   */
  readonly ebpPlacement?: string;

  /**
   * @schema MediaConvertM2tsSettings#EsRateInPes
   */
  readonly esRateInPes?: string;

  /**
   * @schema MediaConvertM2tsSettings#ForceTsVideoEbpOrder
   */
  readonly forceTsVideoEbpOrder?: string;

  /**
   * @schema MediaConvertM2tsSettings#FragmentTime
   */
  readonly fragmentTime?: number;

  /**
   * @schema MediaConvertM2tsSettings#MaxPcrInterval
   */
  readonly maxPcrInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#MinEbpInterval
   */
  readonly minEbpInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#NielsenId3
   */
  readonly nielsenId3?: string;

  /**
   * @schema MediaConvertM2tsSettings#NullPacketBitrate
   */
  readonly nullPacketBitrate?: number;

  /**
   * @schema MediaConvertM2tsSettings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema MediaConvertM2tsSettings#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema MediaConvertM2tsSettings#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertM2tsSettings#RateMode
   */
  readonly rateMode?: string;

  /**
   * @schema MediaConvertM2tsSettings#Scte35Esam
   */
  readonly scte35Esam?: MediaConvertM2tsScte35Esam;

  /**
   * @schema MediaConvertM2tsSettings#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema MediaConvertM2tsSettings#Scte35Source
   */
  readonly scte35Source?: string;

  /**
   * @schema MediaConvertM2tsSettings#SegmentationMarkers
   */
  readonly segmentationMarkers?: string;

  /**
   * @schema MediaConvertM2tsSettings#SegmentationStyle
   */
  readonly segmentationStyle?: string;

  /**
   * @schema MediaConvertM2tsSettings#SegmentationTime
   */
  readonly segmentationTime?: number;

  /**
   * @schema MediaConvertM2tsSettings#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema MediaConvertM2tsSettings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaConvertM2tsSettings#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * Converts an object of type 'MediaConvertM2tsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertM2tsSettings(obj: MediaConvertM2tsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioBufferModel': obj.audioBufferModel,
    'AudioDuration': obj.audioDuration,
    'AudioFramesPerPes': obj.audioFramesPerPes,
    'AudioPids': obj.audioPids?.map(y => y),
    'Bitrate': obj.bitrate,
    'BufferModel': obj.bufferModel,
    'DvbNitSettings': toJson_MediaConvertDvbNitSettings(obj.dvbNitSettings),
    'DvbSdtSettings': toJson_MediaConvertDvbSdtSettings(obj.dvbSdtSettings),
    'DvbSubPids': obj.dvbSubPids?.map(y => y),
    'DvbTdtSettings': toJson_MediaConvertDvbTdtSettings(obj.dvbTdtSettings),
    'DvbTeletextPid': obj.dvbTeletextPid,
    'EbpAudioInterval': obj.ebpAudioInterval,
    'EbpPlacement': obj.ebpPlacement,
    'EsRateInPes': obj.esRateInPes,
    'ForceTsVideoEbpOrder': obj.forceTsVideoEbpOrder,
    'FragmentTime': obj.fragmentTime,
    'MaxPcrInterval': obj.maxPcrInterval,
    'MinEbpInterval': obj.minEbpInterval,
    'NielsenId3': obj.nielsenId3,
    'NullPacketBitrate': obj.nullPacketBitrate,
    'PatInterval': obj.patInterval,
    'PcrControl': obj.pcrControl,
    'PcrPid': obj.pcrPid,
    'PmtInterval': obj.pmtInterval,
    'PmtPid': obj.pmtPid,
    'PrivateMetadataPid': obj.privateMetadataPid,
    'ProgramNumber': obj.programNumber,
    'RateMode': obj.rateMode,
    'Scte35Esam': toJson_MediaConvertM2tsScte35Esam(obj.scte35Esam),
    'Scte35Pid': obj.scte35Pid,
    'Scte35Source': obj.scte35Source,
    'SegmentationMarkers': obj.segmentationMarkers,
    'SegmentationStyle': obj.segmentationStyle,
    'SegmentationTime': obj.segmentationTime,
    'TimedMetadataPid': obj.timedMetadataPid,
    'TransportStreamId': obj.transportStreamId,
    'VideoPid': obj.videoPid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertM3u8Settings
 */
export interface MediaConvertM3u8Settings {
  /**
   * @schema MediaConvertM3u8Settings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertM3u8Settings#AudioFramesPerPes
   */
  readonly audioFramesPerPes?: number;

  /**
   * @schema MediaConvertM3u8Settings#AudioPids
   */
  readonly audioPids?: number[];

  /**
   * @schema MediaConvertM3u8Settings#MaxPcrInterval
   */
  readonly maxPcrInterval?: number;

  /**
   * @schema MediaConvertM3u8Settings#NielsenId3
   */
  readonly nielsenId3?: string;

  /**
   * @schema MediaConvertM3u8Settings#PatInterval
   */
  readonly patInterval?: number;

  /**
   * @schema MediaConvertM3u8Settings#PcrControl
   */
  readonly pcrControl?: string;

  /**
   * @schema MediaConvertM3u8Settings#PcrPid
   */
  readonly pcrPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#PmtInterval
   */
  readonly pmtInterval?: number;

  /**
   * @schema MediaConvertM3u8Settings#PmtPid
   */
  readonly pmtPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#PrivateMetadataPid
   */
  readonly privateMetadataPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#ProgramNumber
   */
  readonly programNumber?: number;

  /**
   * @schema MediaConvertM3u8Settings#Scte35Pid
   */
  readonly scte35Pid?: number;

  /**
   * @schema MediaConvertM3u8Settings#Scte35Source
   */
  readonly scte35Source?: string;

  /**
   * @schema MediaConvertM3u8Settings#TimedMetadata
   */
  readonly timedMetadata?: string;

  /**
   * @schema MediaConvertM3u8Settings#TimedMetadataPid
   */
  readonly timedMetadataPid?: number;

  /**
   * @schema MediaConvertM3u8Settings#TransportStreamId
   */
  readonly transportStreamId?: number;

  /**
   * @schema MediaConvertM3u8Settings#VideoPid
   */
  readonly videoPid?: number;

}

/**
 * Converts an object of type 'MediaConvertM3u8Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertM3u8Settings(obj: MediaConvertM3u8Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDuration': obj.audioDuration,
    'AudioFramesPerPes': obj.audioFramesPerPes,
    'AudioPids': obj.audioPids?.map(y => y),
    'MaxPcrInterval': obj.maxPcrInterval,
    'NielsenId3': obj.nielsenId3,
    'PatInterval': obj.patInterval,
    'PcrControl': obj.pcrControl,
    'PcrPid': obj.pcrPid,
    'PmtInterval': obj.pmtInterval,
    'PmtPid': obj.pmtPid,
    'PrivateMetadataPid': obj.privateMetadataPid,
    'ProgramNumber': obj.programNumber,
    'Scte35Pid': obj.scte35Pid,
    'Scte35Source': obj.scte35Source,
    'TimedMetadata': obj.timedMetadata,
    'TimedMetadataPid': obj.timedMetadataPid,
    'TransportStreamId': obj.transportStreamId,
    'VideoPid': obj.videoPid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMovSettings
 */
export interface MediaConvertMovSettings {
  /**
   * @schema MediaConvertMovSettings#ClapAtom
   */
  readonly clapAtom?: string;

  /**
   * @schema MediaConvertMovSettings#CslgAtom
   */
  readonly cslgAtom?: string;

  /**
   * @schema MediaConvertMovSettings#Mpeg2FourCCControl
   */
  readonly mpeg2FourCcControl?: string;

  /**
   * @schema MediaConvertMovSettings#PaddingControl
   */
  readonly paddingControl?: string;

  /**
   * @schema MediaConvertMovSettings#Reference
   */
  readonly reference?: string;

}

/**
 * Converts an object of type 'MediaConvertMovSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMovSettings(obj: MediaConvertMovSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClapAtom': obj.clapAtom,
    'CslgAtom': obj.cslgAtom,
    'Mpeg2FourCCControl': obj.mpeg2FourCcControl,
    'PaddingControl': obj.paddingControl,
    'Reference': obj.reference,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMp4Settings
 */
export interface MediaConvertMp4Settings {
  /**
   * @schema MediaConvertMp4Settings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertMp4Settings#CslgAtom
   */
  readonly cslgAtom?: string;

  /**
   * @schema MediaConvertMp4Settings#CttsVersion
   */
  readonly cttsVersion?: number;

  /**
   * @schema MediaConvertMp4Settings#FreeSpaceBox
   */
  readonly freeSpaceBox?: string;

  /**
   * @schema MediaConvertMp4Settings#MoovPlacement
   */
  readonly moovPlacement?: string;

  /**
   * @schema MediaConvertMp4Settings#Mp4MajorBrand
   */
  readonly mp4MajorBrand?: string;

}

/**
 * Converts an object of type 'MediaConvertMp4Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMp4Settings(obj: MediaConvertMp4Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDuration': obj.audioDuration,
    'CslgAtom': obj.cslgAtom,
    'CttsVersion': obj.cttsVersion,
    'FreeSpaceBox': obj.freeSpaceBox,
    'MoovPlacement': obj.moovPlacement,
    'Mp4MajorBrand': obj.mp4MajorBrand,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMpdSettings
 */
export interface MediaConvertMpdSettings {
  /**
   * @schema MediaConvertMpdSettings#AccessibilityCaptionHints
   */
  readonly accessibilityCaptionHints?: string;

  /**
   * @schema MediaConvertMpdSettings#AudioDuration
   */
  readonly audioDuration?: string;

  /**
   * @schema MediaConvertMpdSettings#CaptionContainerType
   */
  readonly captionContainerType?: string;

  /**
   * @schema MediaConvertMpdSettings#Scte35Esam
   */
  readonly scte35Esam?: string;

  /**
   * @schema MediaConvertMpdSettings#Scte35Source
   */
  readonly scte35Source?: string;

}

/**
 * Converts an object of type 'MediaConvertMpdSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMpdSettings(obj: MediaConvertMpdSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessibilityCaptionHints': obj.accessibilityCaptionHints,
    'AudioDuration': obj.audioDuration,
    'CaptionContainerType': obj.captionContainerType,
    'Scte35Esam': obj.scte35Esam,
    'Scte35Source': obj.scte35Source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMxfSettings
 */
export interface MediaConvertMxfSettings {
  /**
   * @schema MediaConvertMxfSettings#AfdSignaling
   */
  readonly afdSignaling?: string;

  /**
   * @schema MediaConvertMxfSettings#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaConvertMxfSettings#XavcProfileSettings
   */
  readonly xavcProfileSettings?: MediaConvertMxfXavcProfileSettings;

}

/**
 * Converts an object of type 'MediaConvertMxfSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMxfSettings(obj: MediaConvertMxfSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AfdSignaling': obj.afdSignaling,
    'Profile': obj.profile,
    'XavcProfileSettings': toJson_MediaConvertMxfXavcProfileSettings(obj.xavcProfileSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVideoCodecSettings
 */
export interface MediaConvertVideoCodecSettings {
  /**
   * @schema MediaConvertVideoCodecSettings#Av1Settings
   */
  readonly av1Settings?: MediaConvertAv1Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#AvcIntraSettings
   */
  readonly avcIntraSettings?: MediaConvertAvcIntraSettings;

  /**
   * @schema MediaConvertVideoCodecSettings#Codec
   */
  readonly codec?: string;

  /**
   * @schema MediaConvertVideoCodecSettings#FrameCaptureSettings
   */
  readonly frameCaptureSettings?: MediaConvertFrameCaptureSettings;

  /**
   * @schema MediaConvertVideoCodecSettings#H264Settings
   */
  readonly h264Settings?: MediaConvertH264Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#H265Settings
   */
  readonly h265Settings?: MediaConvertH265Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#Mpeg2Settings
   */
  readonly mpeg2Settings?: MediaConvertMpeg2Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#ProresSettings
   */
  readonly proresSettings?: MediaConvertProresSettings;

  /**
   * @schema MediaConvertVideoCodecSettings#Vc3Settings
   */
  readonly vc3Settings?: MediaConvertVc3Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#Vp8Settings
   */
  readonly vp8Settings?: MediaConvertVp8Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#Vp9Settings
   */
  readonly vp9Settings?: MediaConvertVp9Settings;

  /**
   * @schema MediaConvertVideoCodecSettings#XavcSettings
   */
  readonly xavcSettings?: MediaConvertXavcSettings;

}

/**
 * Converts an object of type 'MediaConvertVideoCodecSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVideoCodecSettings(obj: MediaConvertVideoCodecSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Av1Settings': toJson_MediaConvertAv1Settings(obj.av1Settings),
    'AvcIntraSettings': toJson_MediaConvertAvcIntraSettings(obj.avcIntraSettings),
    'Codec': obj.codec,
    'FrameCaptureSettings': toJson_MediaConvertFrameCaptureSettings(obj.frameCaptureSettings),
    'H264Settings': toJson_MediaConvertH264Settings(obj.h264Settings),
    'H265Settings': toJson_MediaConvertH265Settings(obj.h265Settings),
    'Mpeg2Settings': toJson_MediaConvertMpeg2Settings(obj.mpeg2Settings),
    'ProresSettings': toJson_MediaConvertProresSettings(obj.proresSettings),
    'Vc3Settings': toJson_MediaConvertVc3Settings(obj.vc3Settings),
    'Vp8Settings': toJson_MediaConvertVp8Settings(obj.vp8Settings),
    'Vp9Settings': toJson_MediaConvertVp9Settings(obj.vp9Settings),
    'XavcSettings': toJson_MediaConvertXavcSettings(obj.xavcSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVideoPreprocessor
 */
export interface MediaConvertVideoPreprocessor {
  /**
   * @schema MediaConvertVideoPreprocessor#ColorCorrector
   */
  readonly colorCorrector?: MediaConvertColorCorrector;

  /**
   * @schema MediaConvertVideoPreprocessor#Deinterlacer
   */
  readonly deinterlacer?: MediaConvertDeinterlacer;

  /**
   * @schema MediaConvertVideoPreprocessor#DolbyVision
   */
  readonly dolbyVision?: MediaConvertDolbyVision;

  /**
   * @schema MediaConvertVideoPreprocessor#Hdr10Plus
   */
  readonly hdr10Plus?: MediaConvertHdr10Plus;

  /**
   * @schema MediaConvertVideoPreprocessor#ImageInserter
   */
  readonly imageInserter?: MediaConvertImageInserter;

  /**
   * @schema MediaConvertVideoPreprocessor#NoiseReducer
   */
  readonly noiseReducer?: MediaConvertNoiseReducer;

  /**
   * @schema MediaConvertVideoPreprocessor#PartnerWatermarking
   */
  readonly partnerWatermarking?: MediaConvertPartnerWatermarking;

  /**
   * @schema MediaConvertVideoPreprocessor#TimecodeBurnin
   */
  readonly timecodeBurnin?: MediaConvertTimecodeBurnin;

}

/**
 * Converts an object of type 'MediaConvertVideoPreprocessor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVideoPreprocessor(obj: MediaConvertVideoPreprocessor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColorCorrector': toJson_MediaConvertColorCorrector(obj.colorCorrector),
    'Deinterlacer': toJson_MediaConvertDeinterlacer(obj.deinterlacer),
    'DolbyVision': toJson_MediaConvertDolbyVision(obj.dolbyVision),
    'Hdr10Plus': toJson_MediaConvertHdr10Plus(obj.hdr10Plus),
    'ImageInserter': toJson_MediaConvertImageInserter(obj.imageInserter),
    'NoiseReducer': toJson_MediaConvertNoiseReducer(obj.noiseReducer),
    'PartnerWatermarking': toJson_MediaConvertPartnerWatermarking(obj.partnerWatermarking),
    'TimecodeBurnin': toJson_MediaConvertTimecodeBurnin(obj.timecodeBurnin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHlsRenditionGroupSettings
 */
export interface MediaConvertHlsRenditionGroupSettings {
  /**
   * @schema MediaConvertHlsRenditionGroupSettings#RenditionGroupId
   */
  readonly renditionGroupId?: string;

  /**
   * @schema MediaConvertHlsRenditionGroupSettings#RenditionLanguageCode
   */
  readonly renditionLanguageCode?: string;

  /**
   * @schema MediaConvertHlsRenditionGroupSettings#RenditionName
   */
  readonly renditionName?: string;

}

/**
 * Converts an object of type 'MediaConvertHlsRenditionGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHlsRenditionGroupSettings(obj: MediaConvertHlsRenditionGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RenditionGroupId': obj.renditionGroupId,
    'RenditionLanguageCode': obj.renditionLanguageCode,
    'RenditionName': obj.renditionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCaptionSourceSettings
 */
export interface MediaConvertCaptionSourceSettings {
  /**
   * @schema MediaConvertCaptionSourceSettings#AncillarySourceSettings
   */
  readonly ancillarySourceSettings?: MediaConvertAncillarySourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#DvbSubSourceSettings
   */
  readonly dvbSubSourceSettings?: MediaConvertDvbSubSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#EmbeddedSourceSettings
   */
  readonly embeddedSourceSettings?: MediaConvertEmbeddedSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#FileSourceSettings
   */
  readonly fileSourceSettings?: MediaConvertFileSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema MediaConvertCaptionSourceSettings#TeletextSourceSettings
   */
  readonly teletextSourceSettings?: MediaConvertTeletextSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#TrackSourceSettings
   */
  readonly trackSourceSettings?: MediaConvertTrackSourceSettings;

  /**
   * @schema MediaConvertCaptionSourceSettings#WebvttHlsSourceSettings
   */
  readonly webvttHlsSourceSettings?: MediaConvertWebvttHlsSourceSettings;

}

/**
 * Converts an object of type 'MediaConvertCaptionSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCaptionSourceSettings(obj: MediaConvertCaptionSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AncillarySourceSettings': toJson_MediaConvertAncillarySourceSettings(obj.ancillarySourceSettings),
    'DvbSubSourceSettings': toJson_MediaConvertDvbSubSourceSettings(obj.dvbSubSourceSettings),
    'EmbeddedSourceSettings': toJson_MediaConvertEmbeddedSourceSettings(obj.embeddedSourceSettings),
    'FileSourceSettings': toJson_MediaConvertFileSourceSettings(obj.fileSourceSettings),
    'SourceType': obj.sourceType,
    'TeletextSourceSettings': toJson_MediaConvertTeletextSourceSettings(obj.teletextSourceSettings),
    'TrackSourceSettings': toJson_MediaConvertTrackSourceSettings(obj.trackSourceSettings),
    'WebvttHlsSourceSettings': toJson_MediaConvertWebvttHlsSourceSettings(obj.webvttHlsSourceSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertInsertableImage
 */
export interface MediaConvertInsertableImage {
  /**
   * @schema MediaConvertInsertableImage#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaConvertInsertableImage#FadeIn
   */
  readonly fadeIn?: number;

  /**
   * @schema MediaConvertInsertableImage#FadeOut
   */
  readonly fadeOut?: number;

  /**
   * @schema MediaConvertInsertableImage#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertInsertableImage#ImageInserterInput
   */
  readonly imageInserterInput?: string;

  /**
   * @schema MediaConvertInsertableImage#ImageX
   */
  readonly imageX?: number;

  /**
   * @schema MediaConvertInsertableImage#ImageY
   */
  readonly imageY?: number;

  /**
   * @schema MediaConvertInsertableImage#Layer
   */
  readonly layer?: number;

  /**
   * @schema MediaConvertInsertableImage#Opacity
   */
  readonly opacity?: number;

  /**
   * @schema MediaConvertInsertableImage#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MediaConvertInsertableImage#Width
   */
  readonly width?: number;

}

/**
 * Converts an object of type 'MediaConvertInsertableImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertInsertableImage(obj: MediaConvertInsertableImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Duration': obj.duration,
    'FadeIn': obj.fadeIn,
    'FadeOut': obj.fadeOut,
    'Height': obj.height,
    'ImageInserterInput': obj.imageInserterInput,
    'ImageX': obj.imageX,
    'ImageY': obj.imageY,
    'Layer': obj.layer,
    'Opacity': obj.opacity,
    'StartTime': obj.startTime,
    'Width': obj.width,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHdr10Metadata
 */
export interface MediaConvertHdr10Metadata {
  /**
   * @schema MediaConvertHdr10Metadata#BluePrimaryX
   */
  readonly bluePrimaryX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#BluePrimaryY
   */
  readonly bluePrimaryY?: number;

  /**
   * @schema MediaConvertHdr10Metadata#GreenPrimaryX
   */
  readonly greenPrimaryX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#GreenPrimaryY
   */
  readonly greenPrimaryY?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MaxContentLightLevel
   */
  readonly maxContentLightLevel?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MaxFrameAverageLightLevel
   */
  readonly maxFrameAverageLightLevel?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MaxLuminance
   */
  readonly maxLuminance?: number;

  /**
   * @schema MediaConvertHdr10Metadata#MinLuminance
   */
  readonly minLuminance?: number;

  /**
   * @schema MediaConvertHdr10Metadata#RedPrimaryX
   */
  readonly redPrimaryX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#RedPrimaryY
   */
  readonly redPrimaryY?: number;

  /**
   * @schema MediaConvertHdr10Metadata#WhitePointX
   */
  readonly whitePointX?: number;

  /**
   * @schema MediaConvertHdr10Metadata#WhitePointY
   */
  readonly whitePointY?: number;

}

/**
 * Converts an object of type 'MediaConvertHdr10Metadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHdr10Metadata(obj: MediaConvertHdr10Metadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BluePrimaryX': obj.bluePrimaryX,
    'BluePrimaryY': obj.bluePrimaryY,
    'GreenPrimaryX': obj.greenPrimaryX,
    'GreenPrimaryY': obj.greenPrimaryY,
    'MaxContentLightLevel': obj.maxContentLightLevel,
    'MaxFrameAverageLightLevel': obj.maxFrameAverageLightLevel,
    'MaxLuminance': obj.maxLuminance,
    'MinLuminance': obj.minLuminance,
    'RedPrimaryX': obj.redPrimaryX,
    'RedPrimaryY': obj.redPrimaryY,
    'WhitePointX': obj.whitePointX,
    'WhitePointY': obj.whitePointY,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAutomatedAbrSettings
 */
export interface MediaConvertAutomatedAbrSettings {
  /**
   * @schema MediaConvertAutomatedAbrSettings#MaxAbrBitrate
   */
  readonly maxAbrBitrate?: number;

  /**
   * @schema MediaConvertAutomatedAbrSettings#MaxRenditions
   */
  readonly maxRenditions?: number;

  /**
   * @schema MediaConvertAutomatedAbrSettings#MinAbrBitrate
   */
  readonly minAbrBitrate?: number;

}

/**
 * Converts an object of type 'MediaConvertAutomatedAbrSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAutomatedAbrSettings(obj: MediaConvertAutomatedAbrSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxAbrBitrate': obj.maxAbrBitrate,
    'MaxRenditions': obj.maxRenditions,
    'MinAbrBitrate': obj.minAbrBitrate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCmafGroupSettings
 */
export interface MediaConvertCmafGroupSettings {
  /**
   * @schema MediaConvertCmafGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertCmafAdditionalManifest[];

  /**
   * @schema MediaConvertCmafGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertCmafGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertCmafEncryptionSettings;

  /**
   * @schema MediaConvertCmafGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#ImageBasedTrickPlay
   */
  readonly imageBasedTrickPlay?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#MinBufferTime
   */
  readonly minBufferTime?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#MpdProfile
   */
  readonly mpdProfile?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#PtsOffsetHandlingForBFrames
   */
  readonly ptsOffsetHandlingForBFrames?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaConvertCmafGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#TargetDurationCompatibilityMode
   */
  readonly targetDurationCompatibilityMode?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#WriteDashManifest
   */
  readonly writeDashManifest?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#WriteHlsManifest
   */
  readonly writeHlsManifest?: string;

  /**
   * @schema MediaConvertCmafGroupSettings#WriteSegmentTimelineInRepresentation
   */
  readonly writeSegmentTimelineInRepresentation?: string;

}

/**
 * Converts an object of type 'MediaConvertCmafGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCmafGroupSettings(obj: MediaConvertCmafGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalManifests': obj.additionalManifests?.map(y => toJson_MediaConvertCmafAdditionalManifest(y)),
    'BaseUrl': obj.baseUrl,
    'ClientCache': obj.clientCache,
    'CodecSpecification': obj.codecSpecification,
    'Destination': obj.destination,
    'DestinationSettings': toJson_MediaConvertDestinationSettings(obj.destinationSettings),
    'Encryption': toJson_MediaConvertCmafEncryptionSettings(obj.encryption),
    'FragmentLength': obj.fragmentLength,
    'ImageBasedTrickPlay': obj.imageBasedTrickPlay,
    'ManifestCompression': obj.manifestCompression,
    'ManifestDurationFormat': obj.manifestDurationFormat,
    'MinBufferTime': obj.minBufferTime,
    'MinFinalSegmentLength': obj.minFinalSegmentLength,
    'MpdProfile': obj.mpdProfile,
    'PtsOffsetHandlingForBFrames': obj.ptsOffsetHandlingForBFrames,
    'SegmentControl': obj.segmentControl,
    'SegmentLength': obj.segmentLength,
    'StreamInfResolution': obj.streamInfResolution,
    'TargetDurationCompatibilityMode': obj.targetDurationCompatibilityMode,
    'WriteDashManifest': obj.writeDashManifest,
    'WriteHlsManifest': obj.writeHlsManifest,
    'WriteSegmentTimelineInRepresentation': obj.writeSegmentTimelineInRepresentation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDashIsoGroupSettings
 */
export interface MediaConvertDashIsoGroupSettings {
  /**
   * @schema MediaConvertDashIsoGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertDashAdditionalManifest[];

  /**
   * @schema MediaConvertDashIsoGroupSettings#AudioChannelConfigSchemeIdUri
   */
  readonly audioChannelConfigSchemeIdUri?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertDashIsoGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertDashIsoEncryptionSettings;

  /**
   * @schema MediaConvertDashIsoGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#HbbtvCompliance
   */
  readonly hbbtvCompliance?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#ImageBasedTrickPlay
   */
  readonly imageBasedTrickPlay?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#MinBufferTime
   */
  readonly minBufferTime?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#MpdProfile
   */
  readonly mpdProfile?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#PtsOffsetHandlingForBFrames
   */
  readonly ptsOffsetHandlingForBFrames?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema MediaConvertDashIsoGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaConvertDashIsoGroupSettings#WriteSegmentTimelineInRepresentation
   */
  readonly writeSegmentTimelineInRepresentation?: string;

}

/**
 * Converts an object of type 'MediaConvertDashIsoGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDashIsoGroupSettings(obj: MediaConvertDashIsoGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalManifests': obj.additionalManifests?.map(y => toJson_MediaConvertDashAdditionalManifest(y)),
    'AudioChannelConfigSchemeIdUri': obj.audioChannelConfigSchemeIdUri,
    'BaseUrl': obj.baseUrl,
    'Destination': obj.destination,
    'DestinationSettings': toJson_MediaConvertDestinationSettings(obj.destinationSettings),
    'Encryption': toJson_MediaConvertDashIsoEncryptionSettings(obj.encryption),
    'FragmentLength': obj.fragmentLength,
    'HbbtvCompliance': obj.hbbtvCompliance,
    'ImageBasedTrickPlay': obj.imageBasedTrickPlay,
    'MinBufferTime': obj.minBufferTime,
    'MinFinalSegmentLength': obj.minFinalSegmentLength,
    'MpdProfile': obj.mpdProfile,
    'PtsOffsetHandlingForBFrames': obj.ptsOffsetHandlingForBFrames,
    'SegmentControl': obj.segmentControl,
    'SegmentLength': obj.segmentLength,
    'WriteSegmentTimelineInRepresentation': obj.writeSegmentTimelineInRepresentation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertFileGroupSettings
 */
export interface MediaConvertFileGroupSettings {
  /**
   * @schema MediaConvertFileGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertFileGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

}

/**
 * Converts an object of type 'MediaConvertFileGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertFileGroupSettings(obj: MediaConvertFileGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': obj.destination,
    'DestinationSettings': toJson_MediaConvertDestinationSettings(obj.destinationSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHlsGroupSettings
 */
export interface MediaConvertHlsGroupSettings {
  /**
   * @schema MediaConvertHlsGroupSettings#AdMarkers
   */
  readonly adMarkers?: string[];

  /**
   * @schema MediaConvertHlsGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertHlsAdditionalManifest[];

  /**
   * @schema MediaConvertHlsGroupSettings#AudioOnlyHeader
   */
  readonly audioOnlyHeader?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#BaseUrl
   */
  readonly baseUrl?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#CaptionLanguageMappings
   */
  readonly captionLanguageMappings?: MediaConvertHlsCaptionLanguageMapping[];

  /**
   * @schema MediaConvertHlsGroupSettings#CaptionLanguageSetting
   */
  readonly captionLanguageSetting?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ClientCache
   */
  readonly clientCache?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#CodecSpecification
   */
  readonly codecSpecification?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertHlsGroupSettings#DirectoryStructure
   */
  readonly directoryStructure?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertHlsEncryptionSettings;

  /**
   * @schema MediaConvertHlsGroupSettings#ImageBasedTrickPlay
   */
  readonly imageBasedTrickPlay?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ManifestCompression
   */
  readonly manifestCompression?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ManifestDurationFormat
   */
  readonly manifestDurationFormat?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#MinFinalSegmentLength
   */
  readonly minFinalSegmentLength?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#MinSegmentLength
   */
  readonly minSegmentLength?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#OutputSelection
   */
  readonly outputSelection?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ProgramDateTime
   */
  readonly programDateTime?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#ProgramDateTimePeriod
   */
  readonly programDateTimePeriod?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#SegmentControl
   */
  readonly segmentControl?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#SegmentLength
   */
  readonly segmentLength?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#SegmentsPerSubdirectory
   */
  readonly segmentsPerSubdirectory?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#StreamInfResolution
   */
  readonly streamInfResolution?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#TargetDurationCompatibilityMode
   */
  readonly targetDurationCompatibilityMode?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#TimedMetadataId3Frame
   */
  readonly timedMetadataId3Frame?: string;

  /**
   * @schema MediaConvertHlsGroupSettings#TimedMetadataId3Period
   */
  readonly timedMetadataId3Period?: number;

  /**
   * @schema MediaConvertHlsGroupSettings#TimestampDeltaMilliseconds
   */
  readonly timestampDeltaMilliseconds?: number;

}

/**
 * Converts an object of type 'MediaConvertHlsGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHlsGroupSettings(obj: MediaConvertHlsGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdMarkers': obj.adMarkers?.map(y => y),
    'AdditionalManifests': obj.additionalManifests?.map(y => toJson_MediaConvertHlsAdditionalManifest(y)),
    'AudioOnlyHeader': obj.audioOnlyHeader,
    'BaseUrl': obj.baseUrl,
    'CaptionLanguageMappings': obj.captionLanguageMappings?.map(y => toJson_MediaConvertHlsCaptionLanguageMapping(y)),
    'CaptionLanguageSetting': obj.captionLanguageSetting,
    'ClientCache': obj.clientCache,
    'CodecSpecification': obj.codecSpecification,
    'Destination': obj.destination,
    'DestinationSettings': toJson_MediaConvertDestinationSettings(obj.destinationSettings),
    'DirectoryStructure': obj.directoryStructure,
    'Encryption': toJson_MediaConvertHlsEncryptionSettings(obj.encryption),
    'ImageBasedTrickPlay': obj.imageBasedTrickPlay,
    'ManifestCompression': obj.manifestCompression,
    'ManifestDurationFormat': obj.manifestDurationFormat,
    'MinFinalSegmentLength': obj.minFinalSegmentLength,
    'MinSegmentLength': obj.minSegmentLength,
    'OutputSelection': obj.outputSelection,
    'ProgramDateTime': obj.programDateTime,
    'ProgramDateTimePeriod': obj.programDateTimePeriod,
    'SegmentControl': obj.segmentControl,
    'SegmentLength': obj.segmentLength,
    'SegmentsPerSubdirectory': obj.segmentsPerSubdirectory,
    'StreamInfResolution': obj.streamInfResolution,
    'TargetDurationCompatibilityMode': obj.targetDurationCompatibilityMode,
    'TimedMetadataId3Frame': obj.timedMetadataId3Frame,
    'TimedMetadataId3Period': obj.timedMetadataId3Period,
    'TimestampDeltaMilliseconds': obj.timestampDeltaMilliseconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMsSmoothGroupSettings
 */
export interface MediaConvertMsSmoothGroupSettings {
  /**
   * @schema MediaConvertMsSmoothGroupSettings#AdditionalManifests
   */
  readonly additionalManifests?: MediaConvertMsSmoothAdditionalManifest[];

  /**
   * @schema MediaConvertMsSmoothGroupSettings#AudioDeduplication
   */
  readonly audioDeduplication?: string;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertDestinationSettings;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#Encryption
   */
  readonly encryption?: MediaConvertMsSmoothEncryptionSettings;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#FragmentLength
   */
  readonly fragmentLength?: number;

  /**
   * @schema MediaConvertMsSmoothGroupSettings#ManifestEncoding
   */
  readonly manifestEncoding?: string;

}

/**
 * Converts an object of type 'MediaConvertMsSmoothGroupSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMsSmoothGroupSettings(obj: MediaConvertMsSmoothGroupSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalManifests': obj.additionalManifests?.map(y => toJson_MediaConvertMsSmoothAdditionalManifest(y)),
    'AudioDeduplication': obj.audioDeduplication,
    'Destination': obj.destination,
    'DestinationSettings': toJson_MediaConvertDestinationSettings(obj.destinationSettings),
    'Encryption': toJson_MediaConvertMsSmoothEncryptionSettings(obj.encryption),
    'FragmentLength': obj.fragmentLength,
    'ManifestEncoding': obj.manifestEncoding,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCaptionDescription
 */
export interface MediaConvertCaptionDescription {
  /**
   * @schema MediaConvertCaptionDescription#CaptionSelectorName
   */
  readonly captionSelectorName?: string;

  /**
   * @schema MediaConvertCaptionDescription#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertCaptionDescription#DestinationSettings
   */
  readonly destinationSettings?: MediaConvertCaptionDestinationSettings;

  /**
   * @schema MediaConvertCaptionDescription#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertCaptionDescription#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * Converts an object of type 'MediaConvertCaptionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCaptionDescription(obj: MediaConvertCaptionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaptionSelectorName': obj.captionSelectorName,
    'CustomLanguageCode': obj.customLanguageCode,
    'DestinationSettings': toJson_MediaConvertCaptionDestinationSettings(obj.destinationSettings),
    'LanguageCode': obj.languageCode,
    'LanguageDescription': obj.languageDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutputSettings
 */
export interface MediaConvertOutputSettings {
  /**
   * @schema MediaConvertOutputSettings#HlsSettings
   */
  readonly hlsSettings?: MediaConvertHlsSettings;

}

/**
 * Converts an object of type 'MediaConvertOutputSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutputSettings(obj: MediaConvertOutputSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HlsSettings': toJson_MediaConvertHlsSettings(obj.hlsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVideoDetail
 */
export interface MediaConvertVideoDetail {
  /**
   * @schema MediaConvertVideoDetail#HeightInPx
   */
  readonly heightInPx?: number;

  /**
   * @schema MediaConvertVideoDetail#WidthInPx
   */
  readonly widthInPx?: number;

}

/**
 * Converts an object of type 'MediaConvertVideoDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVideoDetail(obj: MediaConvertVideoDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HeightInPx': obj.heightInPx,
    'WidthInPx': obj.widthInPx,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAacSettings
 */
export interface MediaConvertAacSettings {
  /**
   * @schema MediaConvertAacSettings#AudioDescriptionBroadcasterMix
   */
  readonly audioDescriptionBroadcasterMix?: string;

  /**
   * @schema MediaConvertAacSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertAacSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertAacSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertAacSettings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertAacSettings#RawFormat
   */
  readonly rawFormat?: string;

  /**
   * @schema MediaConvertAacSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertAacSettings#Specification
   */
  readonly specification?: string;

  /**
   * @schema MediaConvertAacSettings#VbrQuality
   */
  readonly vbrQuality?: string;

}

/**
 * Converts an object of type 'MediaConvertAacSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAacSettings(obj: MediaConvertAacSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioDescriptionBroadcasterMix': obj.audioDescriptionBroadcasterMix,
    'Bitrate': obj.bitrate,
    'CodecProfile': obj.codecProfile,
    'CodingMode': obj.codingMode,
    'RateControlMode': obj.rateControlMode,
    'RawFormat': obj.rawFormat,
    'SampleRate': obj.sampleRate,
    'Specification': obj.specification,
    'VbrQuality': obj.vbrQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAc3Settings
 */
export interface MediaConvertAc3Settings {
  /**
   * @schema MediaConvertAc3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertAc3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaConvertAc3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertAc3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema MediaConvertAc3Settings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema MediaConvertAc3Settings#DynamicRangeCompressionProfile
   */
  readonly dynamicRangeCompressionProfile?: string;

  /**
   * @schema MediaConvertAc3Settings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema MediaConvertAc3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema MediaConvertAc3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema MediaConvertAc3Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * Converts an object of type 'MediaConvertAc3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAc3Settings(obj: MediaConvertAc3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'BitstreamMode': obj.bitstreamMode,
    'CodingMode': obj.codingMode,
    'Dialnorm': obj.dialnorm,
    'DynamicRangeCompressionLine': obj.dynamicRangeCompressionLine,
    'DynamicRangeCompressionProfile': obj.dynamicRangeCompressionProfile,
    'DynamicRangeCompressionRf': obj.dynamicRangeCompressionRf,
    'LfeFilter': obj.lfeFilter,
    'MetadataControl': obj.metadataControl,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAiffSettings
 */
export interface MediaConvertAiffSettings {
  /**
   * @schema MediaConvertAiffSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema MediaConvertAiffSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertAiffSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * Converts an object of type 'MediaConvertAiffSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAiffSettings(obj: MediaConvertAiffSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BitDepth': obj.bitDepth,
    'Channels': obj.channels,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEac3AtmosSettings
 */
export interface MediaConvertEac3AtmosSettings {
  /**
   * @schema MediaConvertEac3AtmosSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DialogueIntelligence
   */
  readonly dialogueIntelligence?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DownmixControl
   */
  readonly downmixControl?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#DynamicRangeControl
   */
  readonly dynamicRangeControl?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#MeteringMode
   */
  readonly meteringMode?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#SpeechThreshold
   */
  readonly speechThreshold?: number;

  /**
   * @schema MediaConvertEac3AtmosSettings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema MediaConvertEac3AtmosSettings#SurroundExMode
   */
  readonly surroundExMode?: string;

}

/**
 * Converts an object of type 'MediaConvertEac3AtmosSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEac3AtmosSettings(obj: MediaConvertEac3AtmosSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'BitstreamMode': obj.bitstreamMode,
    'CodingMode': obj.codingMode,
    'DialogueIntelligence': obj.dialogueIntelligence,
    'DownmixControl': obj.downmixControl,
    'DynamicRangeCompressionLine': obj.dynamicRangeCompressionLine,
    'DynamicRangeCompressionRf': obj.dynamicRangeCompressionRf,
    'DynamicRangeControl': obj.dynamicRangeControl,
    'LoRoCenterMixLevel': obj.loRoCenterMixLevel,
    'LoRoSurroundMixLevel': obj.loRoSurroundMixLevel,
    'LtRtCenterMixLevel': obj.ltRtCenterMixLevel,
    'LtRtSurroundMixLevel': obj.ltRtSurroundMixLevel,
    'MeteringMode': obj.meteringMode,
    'SampleRate': obj.sampleRate,
    'SpeechThreshold': obj.speechThreshold,
    'StereoDownmix': obj.stereoDownmix,
    'SurroundExMode': obj.surroundExMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEac3Settings
 */
export interface MediaConvertEac3Settings {
  /**
   * @schema MediaConvertEac3Settings#AttenuationControl
   */
  readonly attenuationControl?: string;

  /**
   * @schema MediaConvertEac3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertEac3Settings#BitstreamMode
   */
  readonly bitstreamMode?: string;

  /**
   * @schema MediaConvertEac3Settings#CodingMode
   */
  readonly codingMode?: string;

  /**
   * @schema MediaConvertEac3Settings#DcFilter
   */
  readonly dcFilter?: string;

  /**
   * @schema MediaConvertEac3Settings#Dialnorm
   */
  readonly dialnorm?: number;

  /**
   * @schema MediaConvertEac3Settings#DynamicRangeCompressionLine
   */
  readonly dynamicRangeCompressionLine?: string;

  /**
   * @schema MediaConvertEac3Settings#DynamicRangeCompressionRf
   */
  readonly dynamicRangeCompressionRf?: string;

  /**
   * @schema MediaConvertEac3Settings#LfeControl
   */
  readonly lfeControl?: string;

  /**
   * @schema MediaConvertEac3Settings#LfeFilter
   */
  readonly lfeFilter?: string;

  /**
   * @schema MediaConvertEac3Settings#LoRoCenterMixLevel
   */
  readonly loRoCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#LoRoSurroundMixLevel
   */
  readonly loRoSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#LtRtCenterMixLevel
   */
  readonly ltRtCenterMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#LtRtSurroundMixLevel
   */
  readonly ltRtSurroundMixLevel?: number;

  /**
   * @schema MediaConvertEac3Settings#MetadataControl
   */
  readonly metadataControl?: string;

  /**
   * @schema MediaConvertEac3Settings#PassthroughControl
   */
  readonly passthroughControl?: string;

  /**
   * @schema MediaConvertEac3Settings#PhaseControl
   */
  readonly phaseControl?: string;

  /**
   * @schema MediaConvertEac3Settings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertEac3Settings#StereoDownmix
   */
  readonly stereoDownmix?: string;

  /**
   * @schema MediaConvertEac3Settings#SurroundExMode
   */
  readonly surroundExMode?: string;

  /**
   * @schema MediaConvertEac3Settings#SurroundMode
   */
  readonly surroundMode?: string;

}

/**
 * Converts an object of type 'MediaConvertEac3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEac3Settings(obj: MediaConvertEac3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttenuationControl': obj.attenuationControl,
    'Bitrate': obj.bitrate,
    'BitstreamMode': obj.bitstreamMode,
    'CodingMode': obj.codingMode,
    'DcFilter': obj.dcFilter,
    'Dialnorm': obj.dialnorm,
    'DynamicRangeCompressionLine': obj.dynamicRangeCompressionLine,
    'DynamicRangeCompressionRf': obj.dynamicRangeCompressionRf,
    'LfeControl': obj.lfeControl,
    'LfeFilter': obj.lfeFilter,
    'LoRoCenterMixLevel': obj.loRoCenterMixLevel,
    'LoRoSurroundMixLevel': obj.loRoSurroundMixLevel,
    'LtRtCenterMixLevel': obj.ltRtCenterMixLevel,
    'LtRtSurroundMixLevel': obj.ltRtSurroundMixLevel,
    'MetadataControl': obj.metadataControl,
    'PassthroughControl': obj.passthroughControl,
    'PhaseControl': obj.phaseControl,
    'SampleRate': obj.sampleRate,
    'StereoDownmix': obj.stereoDownmix,
    'SurroundExMode': obj.surroundExMode,
    'SurroundMode': obj.surroundMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMp2Settings
 */
export interface MediaConvertMp2Settings {
  /**
   * @schema MediaConvertMp2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertMp2Settings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertMp2Settings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * Converts an object of type 'MediaConvertMp2Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMp2Settings(obj: MediaConvertMp2Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'Channels': obj.channels,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMp3Settings
 */
export interface MediaConvertMp3Settings {
  /**
   * @schema MediaConvertMp3Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertMp3Settings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertMp3Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertMp3Settings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertMp3Settings#VbrQuality
   */
  readonly vbrQuality?: number;

}

/**
 * Converts an object of type 'MediaConvertMp3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMp3Settings(obj: MediaConvertMp3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'Channels': obj.channels,
    'RateControlMode': obj.rateControlMode,
    'SampleRate': obj.sampleRate,
    'VbrQuality': obj.vbrQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOpusSettings
 */
export interface MediaConvertOpusSettings {
  /**
   * @schema MediaConvertOpusSettings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertOpusSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertOpusSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * Converts an object of type 'MediaConvertOpusSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOpusSettings(obj: MediaConvertOpusSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'Channels': obj.channels,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVorbisSettings
 */
export interface MediaConvertVorbisSettings {
  /**
   * @schema MediaConvertVorbisSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertVorbisSettings#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema MediaConvertVorbisSettings#VbrQuality
   */
  readonly vbrQuality?: number;

}

/**
 * Converts an object of type 'MediaConvertVorbisSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVorbisSettings(obj: MediaConvertVorbisSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channels': obj.channels,
    'SampleRate': obj.sampleRate,
    'VbrQuality': obj.vbrQuality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertWavSettings
 */
export interface MediaConvertWavSettings {
  /**
   * @schema MediaConvertWavSettings#BitDepth
   */
  readonly bitDepth?: number;

  /**
   * @schema MediaConvertWavSettings#Channels
   */
  readonly channels?: number;

  /**
   * @schema MediaConvertWavSettings#Format
   */
  readonly format?: string;

  /**
   * @schema MediaConvertWavSettings#SampleRate
   */
  readonly sampleRate?: number;

}

/**
 * Converts an object of type 'MediaConvertWavSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertWavSettings(obj: MediaConvertWavSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BitDepth': obj.bitDepth,
    'Channels': obj.channels,
    'Format': obj.format,
    'SampleRate': obj.sampleRate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertChannelMapping
 */
export interface MediaConvertChannelMapping {
  /**
   * @schema MediaConvertChannelMapping#OutputChannels
   */
  readonly outputChannels?: MediaConvertOutputChannelMapping[];

}

/**
 * Converts an object of type 'MediaConvertChannelMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertChannelMapping(obj: MediaConvertChannelMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputChannels': obj.outputChannels?.map(y => toJson_MediaConvertOutputChannelMapping(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertBurninDestinationSettings
 */
export interface MediaConvertBurninDestinationSettings {
  /**
   * @schema MediaConvertBurninDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontScript
   */
  readonly fontScript?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#TeletextSpacing
   */
  readonly teletextSpacing?: string;

  /**
   * @schema MediaConvertBurninDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema MediaConvertBurninDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * Converts an object of type 'MediaConvertBurninDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertBurninDestinationSettings(obj: MediaConvertBurninDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alignment': obj.alignment,
    'BackgroundColor': obj.backgroundColor,
    'BackgroundOpacity': obj.backgroundOpacity,
    'FontColor': obj.fontColor,
    'FontOpacity': obj.fontOpacity,
    'FontResolution': obj.fontResolution,
    'FontScript': obj.fontScript,
    'FontSize': obj.fontSize,
    'OutlineColor': obj.outlineColor,
    'OutlineSize': obj.outlineSize,
    'ShadowColor': obj.shadowColor,
    'ShadowOpacity': obj.shadowOpacity,
    'ShadowXOffset': obj.shadowXOffset,
    'ShadowYOffset': obj.shadowYOffset,
    'TeletextSpacing': obj.teletextSpacing,
    'XPosition': obj.xPosition,
    'YPosition': obj.yPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDvbSubDestinationSettings
 */
export interface MediaConvertDvbSubDestinationSettings {
  /**
   * @schema MediaConvertDvbSubDestinationSettings#Alignment
   */
  readonly alignment?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#BackgroundColor
   */
  readonly backgroundColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#BackgroundOpacity
   */
  readonly backgroundOpacity?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#DdsHandling
   */
  readonly ddsHandling?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#DdsXCoordinate
   */
  readonly ddsXCoordinate?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#DdsYCoordinate
   */
  readonly ddsYCoordinate?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontColor
   */
  readonly fontColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontOpacity
   */
  readonly fontOpacity?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontResolution
   */
  readonly fontResolution?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontScript
   */
  readonly fontScript?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#Height
   */
  readonly height?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#OutlineColor
   */
  readonly outlineColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#OutlineSize
   */
  readonly outlineSize?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowColor
   */
  readonly shadowColor?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowOpacity
   */
  readonly shadowOpacity?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowXOffset
   */
  readonly shadowXOffset?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#ShadowYOffset
   */
  readonly shadowYOffset?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#SubtitlingType
   */
  readonly subtitlingType?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#TeletextSpacing
   */
  readonly teletextSpacing?: string;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#Width
   */
  readonly width?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#XPosition
   */
  readonly xPosition?: number;

  /**
   * @schema MediaConvertDvbSubDestinationSettings#YPosition
   */
  readonly yPosition?: number;

}

/**
 * Converts an object of type 'MediaConvertDvbSubDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDvbSubDestinationSettings(obj: MediaConvertDvbSubDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alignment': obj.alignment,
    'BackgroundColor': obj.backgroundColor,
    'BackgroundOpacity': obj.backgroundOpacity,
    'DdsHandling': obj.ddsHandling,
    'DdsXCoordinate': obj.ddsXCoordinate,
    'DdsYCoordinate': obj.ddsYCoordinate,
    'FontColor': obj.fontColor,
    'FontOpacity': obj.fontOpacity,
    'FontResolution': obj.fontResolution,
    'FontScript': obj.fontScript,
    'FontSize': obj.fontSize,
    'Height': obj.height,
    'OutlineColor': obj.outlineColor,
    'OutlineSize': obj.outlineSize,
    'ShadowColor': obj.shadowColor,
    'ShadowOpacity': obj.shadowOpacity,
    'ShadowXOffset': obj.shadowXOffset,
    'ShadowYOffset': obj.shadowYOffset,
    'SubtitlingType': obj.subtitlingType,
    'TeletextSpacing': obj.teletextSpacing,
    'Width': obj.width,
    'XPosition': obj.xPosition,
    'YPosition': obj.yPosition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEmbeddedDestinationSettings
 */
export interface MediaConvertEmbeddedDestinationSettings {
  /**
   * @schema MediaConvertEmbeddedDestinationSettings#Destination608ChannelNumber
   */
  readonly destination608ChannelNumber?: number;

  /**
   * @schema MediaConvertEmbeddedDestinationSettings#Destination708ServiceNumber
   */
  readonly destination708ServiceNumber?: number;

}

/**
 * Converts an object of type 'MediaConvertEmbeddedDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEmbeddedDestinationSettings(obj: MediaConvertEmbeddedDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination608ChannelNumber': obj.destination608ChannelNumber,
    'Destination708ServiceNumber': obj.destination708ServiceNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertImscDestinationSettings
 */
export interface MediaConvertImscDestinationSettings {
  /**
   * @schema MediaConvertImscDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * Converts an object of type 'MediaConvertImscDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertImscDestinationSettings(obj: MediaConvertImscDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StylePassthrough': obj.stylePassthrough,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertSccDestinationSettings
 */
export interface MediaConvertSccDestinationSettings {
  /**
   * @schema MediaConvertSccDestinationSettings#Framerate
   */
  readonly framerate?: string;

}

/**
 * Converts an object of type 'MediaConvertSccDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertSccDestinationSettings(obj: MediaConvertSccDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Framerate': obj.framerate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertSrtDestinationSettings
 */
export interface MediaConvertSrtDestinationSettings {
  /**
   * @schema MediaConvertSrtDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * Converts an object of type 'MediaConvertSrtDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertSrtDestinationSettings(obj: MediaConvertSrtDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StylePassthrough': obj.stylePassthrough,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTeletextDestinationSettings
 */
export interface MediaConvertTeletextDestinationSettings {
  /**
   * @schema MediaConvertTeletextDestinationSettings#PageNumber
   */
  readonly pageNumber?: string;

  /**
   * @schema MediaConvertTeletextDestinationSettings#PageTypes
   */
  readonly pageTypes?: string[];

}

/**
 * Converts an object of type 'MediaConvertTeletextDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTeletextDestinationSettings(obj: MediaConvertTeletextDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageNumber': obj.pageNumber,
    'PageTypes': obj.pageTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTtmlDestinationSettings
 */
export interface MediaConvertTtmlDestinationSettings {
  /**
   * @schema MediaConvertTtmlDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * Converts an object of type 'MediaConvertTtmlDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTtmlDestinationSettings(obj: MediaConvertTtmlDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StylePassthrough': obj.stylePassthrough,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertWebvttDestinationSettings
 */
export interface MediaConvertWebvttDestinationSettings {
  /**
   * @schema MediaConvertWebvttDestinationSettings#StylePassthrough
   */
  readonly stylePassthrough?: string;

}

/**
 * Converts an object of type 'MediaConvertWebvttDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertWebvttDestinationSettings(obj: MediaConvertWebvttDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StylePassthrough': obj.stylePassthrough,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDvbNitSettings
 */
export interface MediaConvertDvbNitSettings {
  /**
   * @schema MediaConvertDvbNitSettings#NetworkId
   */
  readonly networkId?: number;

  /**
   * @schema MediaConvertDvbNitSettings#NetworkName
   */
  readonly networkName?: string;

  /**
   * @schema MediaConvertDvbNitSettings#NitInterval
   */
  readonly nitInterval?: number;

}

/**
 * Converts an object of type 'MediaConvertDvbNitSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDvbNitSettings(obj: MediaConvertDvbNitSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NetworkId': obj.networkId,
    'NetworkName': obj.networkName,
    'NitInterval': obj.nitInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDvbSdtSettings
 */
export interface MediaConvertDvbSdtSettings {
  /**
   * @schema MediaConvertDvbSdtSettings#OutputSdt
   */
  readonly outputSdt?: string;

  /**
   * @schema MediaConvertDvbSdtSettings#SdtInterval
   */
  readonly sdtInterval?: number;

  /**
   * @schema MediaConvertDvbSdtSettings#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema MediaConvertDvbSdtSettings#ServiceProviderName
   */
  readonly serviceProviderName?: string;

}

/**
 * Converts an object of type 'MediaConvertDvbSdtSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDvbSdtSettings(obj: MediaConvertDvbSdtSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputSdt': obj.outputSdt,
    'SdtInterval': obj.sdtInterval,
    'ServiceName': obj.serviceName,
    'ServiceProviderName': obj.serviceProviderName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDvbTdtSettings
 */
export interface MediaConvertDvbTdtSettings {
  /**
   * @schema MediaConvertDvbTdtSettings#TdtInterval
   */
  readonly tdtInterval?: number;

}

/**
 * Converts an object of type 'MediaConvertDvbTdtSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDvbTdtSettings(obj: MediaConvertDvbTdtSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TdtInterval': obj.tdtInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertM2tsScte35Esam
 */
export interface MediaConvertM2tsScte35Esam {
  /**
   * @schema MediaConvertM2tsScte35Esam#Scte35EsamPid
   */
  readonly scte35EsamPid?: number;

}

/**
 * Converts an object of type 'MediaConvertM2tsScte35Esam' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertM2tsScte35Esam(obj: MediaConvertM2tsScte35Esam | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scte35EsamPid': obj.scte35EsamPid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMxfXavcProfileSettings
 */
export interface MediaConvertMxfXavcProfileSettings {
  /**
   * @schema MediaConvertMxfXavcProfileSettings#DurationMode
   */
  readonly durationMode?: string;

  /**
   * @schema MediaConvertMxfXavcProfileSettings#MaxAncDataSize
   */
  readonly maxAncDataSize?: number;

}

/**
 * Converts an object of type 'MediaConvertMxfXavcProfileSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMxfXavcProfileSettings(obj: MediaConvertMxfXavcProfileSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DurationMode': obj.durationMode,
    'MaxAncDataSize': obj.maxAncDataSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAv1Settings
 */
export interface MediaConvertAv1Settings {
  /**
   * @schema MediaConvertAv1Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertAv1Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertAv1Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertAv1Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertAv1Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertAv1Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertAv1Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertAv1Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertAv1Settings#QvbrSettings
   */
  readonly qvbrSettings?: MediaConvertAv1QvbrSettings;

  /**
   * @schema MediaConvertAv1Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertAv1Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertAv1Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

}

/**
 * Converts an object of type 'MediaConvertAv1Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAv1Settings(obj: MediaConvertAv1Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopSize': obj.gopSize,
    'MaxBitrate': obj.maxBitrate,
    'NumberBFramesBetweenReferenceFrames': obj.numberBFramesBetweenReferenceFrames,
    'QvbrSettings': toJson_MediaConvertAv1QvbrSettings(obj.qvbrSettings),
    'RateControlMode': obj.rateControlMode,
    'Slices': obj.slices,
    'SpatialAdaptiveQuantization': obj.spatialAdaptiveQuantization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAvcIntraSettings
 */
export interface MediaConvertAvcIntraSettings {
  /**
   * @schema MediaConvertAvcIntraSettings#AvcIntraClass
   */
  readonly avcIntraClass?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#AvcIntraUhdSettings
   */
  readonly avcIntraUhdSettings?: MediaConvertAvcIntraUhdSettings;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertAvcIntraSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertAvcIntraSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#ScanTypeConversionMode
   */
  readonly scanTypeConversionMode?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertAvcIntraSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * Converts an object of type 'MediaConvertAvcIntraSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAvcIntraSettings(obj: MediaConvertAvcIntraSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvcIntraClass': obj.avcIntraClass,
    'AvcIntraUhdSettings': toJson_MediaConvertAvcIntraUhdSettings(obj.avcIntraUhdSettings),
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'InterlaceMode': obj.interlaceMode,
    'ScanTypeConversionMode': obj.scanTypeConversionMode,
    'SlowPal': obj.slowPal,
    'Telecine': obj.telecine,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertFrameCaptureSettings
 */
export interface MediaConvertFrameCaptureSettings {
  /**
   * @schema MediaConvertFrameCaptureSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertFrameCaptureSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertFrameCaptureSettings#MaxCaptures
   */
  readonly maxCaptures?: number;

  /**
   * @schema MediaConvertFrameCaptureSettings#Quality
   */
  readonly quality?: number;

}

/**
 * Converts an object of type 'MediaConvertFrameCaptureSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertFrameCaptureSettings(obj: MediaConvertFrameCaptureSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'MaxCaptures': obj.maxCaptures,
    'Quality': obj.quality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertH264Settings
 */
export interface MediaConvertH264Settings {
  /**
   * @schema MediaConvertH264Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertH264Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema MediaConvertH264Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertH264Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema MediaConvertH264Settings#EntropyEncoding
   */
  readonly entropyEncoding?: string;

  /**
   * @schema MediaConvertH264Settings#FieldEncoding
   */
  readonly fieldEncoding?: string;

  /**
   * @schema MediaConvertH264Settings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertH264Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertH264Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertH264Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertH264Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaConvertH264Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertH264Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertH264Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaConvertH264Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema MediaConvertH264Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertH264Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertH264Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertH264Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaConvertH264Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertH264Settings#NumberReferenceFrames
   */
  readonly numberReferenceFrames?: number;

  /**
   * @schema MediaConvertH264Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertH264Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertH264Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertH264Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertH264Settings#QvbrSettings
   */
  readonly qvbrSettings?: MediaConvertH264QvbrSettings;

  /**
   * @schema MediaConvertH264Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertH264Settings#RepeatPps
   */
  readonly repeatPps?: string;

  /**
   * @schema MediaConvertH264Settings#ScanTypeConversionMode
   */
  readonly scanTypeConversionMode?: string;

  /**
   * @schema MediaConvertH264Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaConvertH264Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertH264Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertH264Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema MediaConvertH264Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema MediaConvertH264Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertH264Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH264Settings#UnregisteredSeiTimecode
   */
  readonly unregisteredSeiTimecode?: string;

}

/**
 * Converts an object of type 'MediaConvertH264Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertH264Settings(obj: MediaConvertH264Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'Bitrate': obj.bitrate,
    'CodecLevel': obj.codecLevel,
    'CodecProfile': obj.codecProfile,
    'DynamicSubGop': obj.dynamicSubGop,
    'EntropyEncoding': obj.entropyEncoding,
    'FieldEncoding': obj.fieldEncoding,
    'FlickerAdaptiveQuantization': obj.flickerAdaptiveQuantization,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopBReference': obj.gopBReference,
    'GopClosedCadence': obj.gopClosedCadence,
    'GopSize': obj.gopSize,
    'GopSizeUnits': obj.gopSizeUnits,
    'HrdBufferInitialFillPercentage': obj.hrdBufferInitialFillPercentage,
    'HrdBufferSize': obj.hrdBufferSize,
    'InterlaceMode': obj.interlaceMode,
    'MaxBitrate': obj.maxBitrate,
    'MinIInterval': obj.minIInterval,
    'NumberBFramesBetweenReferenceFrames': obj.numberBFramesBetweenReferenceFrames,
    'NumberReferenceFrames': obj.numberReferenceFrames,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'QvbrSettings': toJson_MediaConvertH264QvbrSettings(obj.qvbrSettings),
    'RateControlMode': obj.rateControlMode,
    'RepeatPps': obj.repeatPps,
    'ScanTypeConversionMode': obj.scanTypeConversionMode,
    'SceneChangeDetect': obj.sceneChangeDetect,
    'Slices': obj.slices,
    'SlowPal': obj.slowPal,
    'Softness': obj.softness,
    'SpatialAdaptiveQuantization': obj.spatialAdaptiveQuantization,
    'Syntax': obj.syntax,
    'Telecine': obj.telecine,
    'TemporalAdaptiveQuantization': obj.temporalAdaptiveQuantization,
    'UnregisteredSeiTimecode': obj.unregisteredSeiTimecode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertH265Settings
 */
export interface MediaConvertH265Settings {
  /**
   * @schema MediaConvertH265Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#AlternateTransferFunctionSei
   */
  readonly alternateTransferFunctionSei?: string;

  /**
   * @schema MediaConvertH265Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertH265Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema MediaConvertH265Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertH265Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema MediaConvertH265Settings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertH265Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertH265Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertH265Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertH265Settings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaConvertH265Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertH265Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertH265Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaConvertH265Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema MediaConvertH265Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertH265Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertH265Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertH265Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaConvertH265Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertH265Settings#NumberReferenceFrames
   */
  readonly numberReferenceFrames?: number;

  /**
   * @schema MediaConvertH265Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertH265Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertH265Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertH265Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertH265Settings#QvbrSettings
   */
  readonly qvbrSettings?: MediaConvertH265QvbrSettings;

  /**
   * @schema MediaConvertH265Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertH265Settings#SampleAdaptiveOffsetFilterMode
   */
  readonly sampleAdaptiveOffsetFilterMode?: string;

  /**
   * @schema MediaConvertH265Settings#ScanTypeConversionMode
   */
  readonly scanTypeConversionMode?: string;

  /**
   * @schema MediaConvertH265Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaConvertH265Settings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertH265Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertH265Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertH265Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertH265Settings#TemporalIds
   */
  readonly temporalIds?: string;

  /**
   * @schema MediaConvertH265Settings#Tiles
   */
  readonly tiles?: string;

  /**
   * @schema MediaConvertH265Settings#UnregisteredSeiTimecode
   */
  readonly unregisteredSeiTimecode?: string;

  /**
   * @schema MediaConvertH265Settings#WriteMp4PackagingType
   */
  readonly writeMp4PackagingType?: string;

}

/**
 * Converts an object of type 'MediaConvertH265Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertH265Settings(obj: MediaConvertH265Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'AlternateTransferFunctionSei': obj.alternateTransferFunctionSei,
    'Bitrate': obj.bitrate,
    'CodecLevel': obj.codecLevel,
    'CodecProfile': obj.codecProfile,
    'DynamicSubGop': obj.dynamicSubGop,
    'FlickerAdaptiveQuantization': obj.flickerAdaptiveQuantization,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopBReference': obj.gopBReference,
    'GopClosedCadence': obj.gopClosedCadence,
    'GopSize': obj.gopSize,
    'GopSizeUnits': obj.gopSizeUnits,
    'HrdBufferInitialFillPercentage': obj.hrdBufferInitialFillPercentage,
    'HrdBufferSize': obj.hrdBufferSize,
    'InterlaceMode': obj.interlaceMode,
    'MaxBitrate': obj.maxBitrate,
    'MinIInterval': obj.minIInterval,
    'NumberBFramesBetweenReferenceFrames': obj.numberBFramesBetweenReferenceFrames,
    'NumberReferenceFrames': obj.numberReferenceFrames,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'QvbrSettings': toJson_MediaConvertH265QvbrSettings(obj.qvbrSettings),
    'RateControlMode': obj.rateControlMode,
    'SampleAdaptiveOffsetFilterMode': obj.sampleAdaptiveOffsetFilterMode,
    'ScanTypeConversionMode': obj.scanTypeConversionMode,
    'SceneChangeDetect': obj.sceneChangeDetect,
    'Slices': obj.slices,
    'SlowPal': obj.slowPal,
    'SpatialAdaptiveQuantization': obj.spatialAdaptiveQuantization,
    'Telecine': obj.telecine,
    'TemporalAdaptiveQuantization': obj.temporalAdaptiveQuantization,
    'TemporalIds': obj.temporalIds,
    'Tiles': obj.tiles,
    'UnregisteredSeiTimecode': obj.unregisteredSeiTimecode,
    'WriteMp4PackagingType': obj.writeMp4PackagingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMpeg2Settings
 */
export interface MediaConvertMpeg2Settings {
  /**
   * @schema MediaConvertMpeg2Settings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertMpeg2Settings#CodecLevel
   */
  readonly codecLevel?: string;

  /**
   * @schema MediaConvertMpeg2Settings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertMpeg2Settings#DynamicSubGop
   */
  readonly dynamicSubGop?: string;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertMpeg2Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertMpeg2Settings#GopSizeUnits
   */
  readonly gopSizeUnits?: string;

  /**
   * @schema MediaConvertMpeg2Settings#HrdBufferInitialFillPercentage
   */
  readonly hrdBufferInitialFillPercentage?: number;

  /**
   * @schema MediaConvertMpeg2Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertMpeg2Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertMpeg2Settings#IntraDcPrecision
   */
  readonly intraDcPrecision?: string;

  /**
   * @schema MediaConvertMpeg2Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertMpeg2Settings#MinIInterval
   */
  readonly minIInterval?: number;

  /**
   * @schema MediaConvertMpeg2Settings#NumberBFramesBetweenReferenceFrames
   */
  readonly numberBFramesBetweenReferenceFrames?: number;

  /**
   * @schema MediaConvertMpeg2Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertMpeg2Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertMpeg2Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertMpeg2Settings#RateControlMode
   */
  readonly rateControlMode?: string;

  /**
   * @schema MediaConvertMpeg2Settings#ScanTypeConversionMode
   */
  readonly scanTypeConversionMode?: string;

  /**
   * @schema MediaConvertMpeg2Settings#SceneChangeDetect
   */
  readonly sceneChangeDetect?: string;

  /**
   * @schema MediaConvertMpeg2Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Softness
   */
  readonly softness?: number;

  /**
   * @schema MediaConvertMpeg2Settings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Syntax
   */
  readonly syntax?: string;

  /**
   * @schema MediaConvertMpeg2Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertMpeg2Settings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

}

/**
 * Converts an object of type 'MediaConvertMpeg2Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMpeg2Settings(obj: MediaConvertMpeg2Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'Bitrate': obj.bitrate,
    'CodecLevel': obj.codecLevel,
    'CodecProfile': obj.codecProfile,
    'DynamicSubGop': obj.dynamicSubGop,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopClosedCadence': obj.gopClosedCadence,
    'GopSize': obj.gopSize,
    'GopSizeUnits': obj.gopSizeUnits,
    'HrdBufferInitialFillPercentage': obj.hrdBufferInitialFillPercentage,
    'HrdBufferSize': obj.hrdBufferSize,
    'InterlaceMode': obj.interlaceMode,
    'IntraDcPrecision': obj.intraDcPrecision,
    'MaxBitrate': obj.maxBitrate,
    'MinIInterval': obj.minIInterval,
    'NumberBFramesBetweenReferenceFrames': obj.numberBFramesBetweenReferenceFrames,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'RateControlMode': obj.rateControlMode,
    'ScanTypeConversionMode': obj.scanTypeConversionMode,
    'SceneChangeDetect': obj.sceneChangeDetect,
    'SlowPal': obj.slowPal,
    'Softness': obj.softness,
    'SpatialAdaptiveQuantization': obj.spatialAdaptiveQuantization,
    'Syntax': obj.syntax,
    'Telecine': obj.telecine,
    'TemporalAdaptiveQuantization': obj.temporalAdaptiveQuantization,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertProresSettings
 */
export interface MediaConvertProresSettings {
  /**
   * @schema MediaConvertProresSettings#ChromaSampling
   */
  readonly chromaSampling?: string;

  /**
   * @schema MediaConvertProresSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertProresSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertProresSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertProresSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertProresSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertProresSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertProresSettings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertProresSettings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertProresSettings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertProresSettings#ScanTypeConversionMode
   */
  readonly scanTypeConversionMode?: string;

  /**
   * @schema MediaConvertProresSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertProresSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * Converts an object of type 'MediaConvertProresSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertProresSettings(obj: MediaConvertProresSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChromaSampling': obj.chromaSampling,
    'CodecProfile': obj.codecProfile,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'InterlaceMode': obj.interlaceMode,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'ScanTypeConversionMode': obj.scanTypeConversionMode,
    'SlowPal': obj.slowPal,
    'Telecine': obj.telecine,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVc3Settings
 */
export interface MediaConvertVc3Settings {
  /**
   * @schema MediaConvertVc3Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertVc3Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertVc3Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertVc3Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertVc3Settings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertVc3Settings#ScanTypeConversionMode
   */
  readonly scanTypeConversionMode?: string;

  /**
   * @schema MediaConvertVc3Settings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertVc3Settings#Telecine
   */
  readonly telecine?: string;

  /**
   * @schema MediaConvertVc3Settings#Vc3Class
   */
  readonly vc3Class?: string;

}

/**
 * Converts an object of type 'MediaConvertVc3Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVc3Settings(obj: MediaConvertVc3Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'InterlaceMode': obj.interlaceMode,
    'ScanTypeConversionMode': obj.scanTypeConversionMode,
    'SlowPal': obj.slowPal,
    'Telecine': obj.telecine,
    'Vc3Class': obj.vc3Class,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVp8Settings
 */
export interface MediaConvertVp8Settings {
  /**
   * @schema MediaConvertVp8Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertVp8Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertVp8Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertVp8Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertVp8Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertVp8Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertVp8Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertVp8Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertVp8Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertVp8Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertVp8Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertVp8Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertVp8Settings#RateControlMode
   */
  readonly rateControlMode?: string;

}

/**
 * Converts an object of type 'MediaConvertVp8Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVp8Settings(obj: MediaConvertVp8Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopSize': obj.gopSize,
    'HrdBufferSize': obj.hrdBufferSize,
    'MaxBitrate': obj.maxBitrate,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'RateControlMode': obj.rateControlMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertVp9Settings
 */
export interface MediaConvertVp9Settings {
  /**
   * @schema MediaConvertVp9Settings#Bitrate
   */
  readonly bitrate?: number;

  /**
   * @schema MediaConvertVp9Settings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertVp9Settings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertVp9Settings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertVp9Settings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertVp9Settings#GopSize
   */
  readonly gopSize?: number;

  /**
   * @schema MediaConvertVp9Settings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertVp9Settings#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConvertVp9Settings#ParControl
   */
  readonly parControl?: string;

  /**
   * @schema MediaConvertVp9Settings#ParDenominator
   */
  readonly parDenominator?: number;

  /**
   * @schema MediaConvertVp9Settings#ParNumerator
   */
  readonly parNumerator?: number;

  /**
   * @schema MediaConvertVp9Settings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertVp9Settings#RateControlMode
   */
  readonly rateControlMode?: string;

}

/**
 * Converts an object of type 'MediaConvertVp9Settings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertVp9Settings(obj: MediaConvertVp9Settings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bitrate': obj.bitrate,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'GopSize': obj.gopSize,
    'HrdBufferSize': obj.hrdBufferSize,
    'MaxBitrate': obj.maxBitrate,
    'ParControl': obj.parControl,
    'ParDenominator': obj.parDenominator,
    'ParNumerator': obj.parNumerator,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'RateControlMode': obj.rateControlMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertXavcSettings
 */
export interface MediaConvertXavcSettings {
  /**
   * @schema MediaConvertXavcSettings#AdaptiveQuantization
   */
  readonly adaptiveQuantization?: string;

  /**
   * @schema MediaConvertXavcSettings#EntropyEncoding
   */
  readonly entropyEncoding?: string;

  /**
   * @schema MediaConvertXavcSettings#FramerateControl
   */
  readonly framerateControl?: string;

  /**
   * @schema MediaConvertXavcSettings#FramerateConversionAlgorithm
   */
  readonly framerateConversionAlgorithm?: string;

  /**
   * @schema MediaConvertXavcSettings#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertXavcSettings#FramerateNumerator
   */
  readonly framerateNumerator?: number;

  /**
   * @schema MediaConvertXavcSettings#Profile
   */
  readonly profile?: string;

  /**
   * @schema MediaConvertXavcSettings#SlowPal
   */
  readonly slowPal?: string;

  /**
   * @schema MediaConvertXavcSettings#Softness
   */
  readonly softness?: number;

  /**
   * @schema MediaConvertXavcSettings#SpatialAdaptiveQuantization
   */
  readonly spatialAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertXavcSettings#TemporalAdaptiveQuantization
   */
  readonly temporalAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertXavcSettings#Xavc4kIntraCbgProfileSettings
   */
  readonly xavc4KIntraCbgProfileSettings?: MediaConvertXavc4kIntraCbgProfileSettings;

  /**
   * @schema MediaConvertXavcSettings#Xavc4kIntraVbrProfileSettings
   */
  readonly xavc4KIntraVbrProfileSettings?: MediaConvertXavc4kIntraVbrProfileSettings;

  /**
   * @schema MediaConvertXavcSettings#Xavc4kProfileSettings
   */
  readonly xavc4KProfileSettings?: MediaConvertXavc4kProfileSettings;

  /**
   * @schema MediaConvertXavcSettings#XavcHdIntraCbgProfileSettings
   */
  readonly xavcHdIntraCbgProfileSettings?: MediaConvertXavcHdIntraCbgProfileSettings;

  /**
   * @schema MediaConvertXavcSettings#XavcHdProfileSettings
   */
  readonly xavcHdProfileSettings?: MediaConvertXavcHdProfileSettings;

}

/**
 * Converts an object of type 'MediaConvertXavcSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertXavcSettings(obj: MediaConvertXavcSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdaptiveQuantization': obj.adaptiveQuantization,
    'EntropyEncoding': obj.entropyEncoding,
    'FramerateControl': obj.framerateControl,
    'FramerateConversionAlgorithm': obj.framerateConversionAlgorithm,
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
    'Profile': obj.profile,
    'SlowPal': obj.slowPal,
    'Softness': obj.softness,
    'SpatialAdaptiveQuantization': obj.spatialAdaptiveQuantization,
    'TemporalAdaptiveQuantization': obj.temporalAdaptiveQuantization,
    'Xavc4kIntraCbgProfileSettings': toJson_MediaConvertXavc4kIntraCbgProfileSettings(obj.xavc4KIntraCbgProfileSettings),
    'Xavc4kIntraVbrProfileSettings': toJson_MediaConvertXavc4kIntraVbrProfileSettings(obj.xavc4KIntraVbrProfileSettings),
    'Xavc4kProfileSettings': toJson_MediaConvertXavc4kProfileSettings(obj.xavc4KProfileSettings),
    'XavcHdIntraCbgProfileSettings': toJson_MediaConvertXavcHdIntraCbgProfileSettings(obj.xavcHdIntraCbgProfileSettings),
    'XavcHdProfileSettings': toJson_MediaConvertXavcHdProfileSettings(obj.xavcHdProfileSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertColorCorrector
 */
export interface MediaConvertColorCorrector {
  /**
   * @schema MediaConvertColorCorrector#Brightness
   */
  readonly brightness?: number;

  /**
   * @schema MediaConvertColorCorrector#ColorSpaceConversion
   */
  readonly colorSpaceConversion?: string;

  /**
   * @schema MediaConvertColorCorrector#Contrast
   */
  readonly contrast?: number;

  /**
   * @schema MediaConvertColorCorrector#Hdr10Metadata
   */
  readonly hdr10Metadata?: MediaConvertHdr10Metadata;

  /**
   * @schema MediaConvertColorCorrector#Hue
   */
  readonly hue?: number;

  /**
   * @schema MediaConvertColorCorrector#SampleRangeConversion
   */
  readonly sampleRangeConversion?: string;

  /**
   * @schema MediaConvertColorCorrector#Saturation
   */
  readonly saturation?: number;

}

/**
 * Converts an object of type 'MediaConvertColorCorrector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertColorCorrector(obj: MediaConvertColorCorrector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Brightness': obj.brightness,
    'ColorSpaceConversion': obj.colorSpaceConversion,
    'Contrast': obj.contrast,
    'Hdr10Metadata': toJson_MediaConvertHdr10Metadata(obj.hdr10Metadata),
    'Hue': obj.hue,
    'SampleRangeConversion': obj.sampleRangeConversion,
    'Saturation': obj.saturation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDeinterlacer
 */
export interface MediaConvertDeinterlacer {
  /**
   * @schema MediaConvertDeinterlacer#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConvertDeinterlacer#Control
   */
  readonly control?: string;

  /**
   * @schema MediaConvertDeinterlacer#Mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'MediaConvertDeinterlacer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDeinterlacer(obj: MediaConvertDeinterlacer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Algorithm': obj.algorithm,
    'Control': obj.control,
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDolbyVision
 */
export interface MediaConvertDolbyVision {
  /**
   * @schema MediaConvertDolbyVision#L6Metadata
   */
  readonly l6Metadata?: MediaConvertDolbyVisionLevel6Metadata;

  /**
   * @schema MediaConvertDolbyVision#L6Mode
   */
  readonly l6Mode?: string;

  /**
   * @schema MediaConvertDolbyVision#Profile
   */
  readonly profile?: string;

}

/**
 * Converts an object of type 'MediaConvertDolbyVision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDolbyVision(obj: MediaConvertDolbyVision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'L6Metadata': toJson_MediaConvertDolbyVisionLevel6Metadata(obj.l6Metadata),
    'L6Mode': obj.l6Mode,
    'Profile': obj.profile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHdr10Plus
 */
export interface MediaConvertHdr10Plus {
  /**
   * @schema MediaConvertHdr10Plus#MasteringMonitorNits
   */
  readonly masteringMonitorNits?: number;

  /**
   * @schema MediaConvertHdr10Plus#TargetMonitorNits
   */
  readonly targetMonitorNits?: number;

}

/**
 * Converts an object of type 'MediaConvertHdr10Plus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHdr10Plus(obj: MediaConvertHdr10Plus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MasteringMonitorNits': obj.masteringMonitorNits,
    'TargetMonitorNits': obj.targetMonitorNits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNoiseReducer
 */
export interface MediaConvertNoiseReducer {
  /**
   * @schema MediaConvertNoiseReducer#Filter
   */
  readonly filter?: string;

  /**
   * @schema MediaConvertNoiseReducer#FilterSettings
   */
  readonly filterSettings?: MediaConvertNoiseReducerFilterSettings;

  /**
   * @schema MediaConvertNoiseReducer#SpatialFilterSettings
   */
  readonly spatialFilterSettings?: MediaConvertNoiseReducerSpatialFilterSettings;

  /**
   * @schema MediaConvertNoiseReducer#TemporalFilterSettings
   */
  readonly temporalFilterSettings?: MediaConvertNoiseReducerTemporalFilterSettings;

}

/**
 * Converts an object of type 'MediaConvertNoiseReducer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNoiseReducer(obj: MediaConvertNoiseReducer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': obj.filter,
    'FilterSettings': toJson_MediaConvertNoiseReducerFilterSettings(obj.filterSettings),
    'SpatialFilterSettings': toJson_MediaConvertNoiseReducerSpatialFilterSettings(obj.spatialFilterSettings),
    'TemporalFilterSettings': toJson_MediaConvertNoiseReducerTemporalFilterSettings(obj.temporalFilterSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertPartnerWatermarking
 */
export interface MediaConvertPartnerWatermarking {
  /**
   * @schema MediaConvertPartnerWatermarking#NexguardFileMarkerSettings
   */
  readonly nexguardFileMarkerSettings?: MediaConvertNexGuardFileMarkerSettings;

}

/**
 * Converts an object of type 'MediaConvertPartnerWatermarking' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertPartnerWatermarking(obj: MediaConvertPartnerWatermarking | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NexguardFileMarkerSettings': toJson_MediaConvertNexGuardFileMarkerSettings(obj.nexguardFileMarkerSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTimecodeBurnin
 */
export interface MediaConvertTimecodeBurnin {
  /**
   * @schema MediaConvertTimecodeBurnin#FontSize
   */
  readonly fontSize?: number;

  /**
   * @schema MediaConvertTimecodeBurnin#Position
   */
  readonly position?: string;

  /**
   * @schema MediaConvertTimecodeBurnin#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'MediaConvertTimecodeBurnin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTimecodeBurnin(obj: MediaConvertTimecodeBurnin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FontSize': obj.fontSize,
    'Position': obj.position,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAncillarySourceSettings
 */
export interface MediaConvertAncillarySourceSettings {
  /**
   * @schema MediaConvertAncillarySourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaConvertAncillarySourceSettings#SourceAncillaryChannelNumber
   */
  readonly sourceAncillaryChannelNumber?: number;

  /**
   * @schema MediaConvertAncillarySourceSettings#TerminateCaptions
   */
  readonly terminateCaptions?: string;

}

/**
 * Converts an object of type 'MediaConvertAncillarySourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAncillarySourceSettings(obj: MediaConvertAncillarySourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Convert608To708': obj.convert608To708,
    'SourceAncillaryChannelNumber': obj.sourceAncillaryChannelNumber,
    'TerminateCaptions': obj.terminateCaptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDvbSubSourceSettings
 */
export interface MediaConvertDvbSubSourceSettings {
  /**
   * @schema MediaConvertDvbSubSourceSettings#Pid
   */
  readonly pid?: number;

}

/**
 * Converts an object of type 'MediaConvertDvbSubSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDvbSubSourceSettings(obj: MediaConvertDvbSubSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pid': obj.pid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertEmbeddedSourceSettings
 */
export interface MediaConvertEmbeddedSourceSettings {
  /**
   * @schema MediaConvertEmbeddedSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaConvertEmbeddedSourceSettings#Source608ChannelNumber
   */
  readonly source608ChannelNumber?: number;

  /**
   * @schema MediaConvertEmbeddedSourceSettings#Source608TrackNumber
   */
  readonly source608TrackNumber?: number;

  /**
   * @schema MediaConvertEmbeddedSourceSettings#TerminateCaptions
   */
  readonly terminateCaptions?: string;

}

/**
 * Converts an object of type 'MediaConvertEmbeddedSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertEmbeddedSourceSettings(obj: MediaConvertEmbeddedSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Convert608To708': obj.convert608To708,
    'Source608ChannelNumber': obj.source608ChannelNumber,
    'Source608TrackNumber': obj.source608TrackNumber,
    'TerminateCaptions': obj.terminateCaptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertFileSourceSettings
 */
export interface MediaConvertFileSourceSettings {
  /**
   * @schema MediaConvertFileSourceSettings#Convert608To708
   */
  readonly convert608To708?: string;

  /**
   * @schema MediaConvertFileSourceSettings#Framerate
   */
  readonly framerate?: MediaConvertCaptionSourceFramerate;

  /**
   * @schema MediaConvertFileSourceSettings#SourceFile
   */
  readonly sourceFile?: string;

  /**
   * @schema MediaConvertFileSourceSettings#TimeDelta
   */
  readonly timeDelta?: number;

}

/**
 * Converts an object of type 'MediaConvertFileSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertFileSourceSettings(obj: MediaConvertFileSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Convert608To708': obj.convert608To708,
    'Framerate': toJson_MediaConvertCaptionSourceFramerate(obj.framerate),
    'SourceFile': obj.sourceFile,
    'TimeDelta': obj.timeDelta,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTeletextSourceSettings
 */
export interface MediaConvertTeletextSourceSettings {
  /**
   * @schema MediaConvertTeletextSourceSettings#PageNumber
   */
  readonly pageNumber?: string;

}

/**
 * Converts an object of type 'MediaConvertTeletextSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTeletextSourceSettings(obj: MediaConvertTeletextSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PageNumber': obj.pageNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertTrackSourceSettings
 */
export interface MediaConvertTrackSourceSettings {
  /**
   * @schema MediaConvertTrackSourceSettings#TrackNumber
   */
  readonly trackNumber?: number;

}

/**
 * Converts an object of type 'MediaConvertTrackSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertTrackSourceSettings(obj: MediaConvertTrackSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrackNumber': obj.trackNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertWebvttHlsSourceSettings
 */
export interface MediaConvertWebvttHlsSourceSettings {
  /**
   * @schema MediaConvertWebvttHlsSourceSettings#RenditionGroupId
   */
  readonly renditionGroupId?: string;

  /**
   * @schema MediaConvertWebvttHlsSourceSettings#RenditionLanguageCode
   */
  readonly renditionLanguageCode?: string;

  /**
   * @schema MediaConvertWebvttHlsSourceSettings#RenditionName
   */
  readonly renditionName?: string;

}

/**
 * Converts an object of type 'MediaConvertWebvttHlsSourceSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertWebvttHlsSourceSettings(obj: MediaConvertWebvttHlsSourceSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RenditionGroupId': obj.renditionGroupId,
    'RenditionLanguageCode': obj.renditionLanguageCode,
    'RenditionName': obj.renditionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCmafAdditionalManifest
 */
export interface MediaConvertCmafAdditionalManifest {
  /**
   * @schema MediaConvertCmafAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertCmafAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * Converts an object of type 'MediaConvertCmafAdditionalManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCmafAdditionalManifest(obj: MediaConvertCmafAdditionalManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestNameModifier': obj.manifestNameModifier,
    'SelectedOutputs': obj.selectedOutputs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDestinationSettings
 */
export interface MediaConvertDestinationSettings {
  /**
   * @schema MediaConvertDestinationSettings#S3Settings
   */
  readonly s3Settings?: MediaConvertS3DestinationSettings;

}

/**
 * Converts an object of type 'MediaConvertDestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDestinationSettings(obj: MediaConvertDestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Settings': toJson_MediaConvertS3DestinationSettings(obj.s3Settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCmafEncryptionSettings
 */
export interface MediaConvertCmafEncryptionSettings {
  /**
   * @schema MediaConvertCmafEncryptionSettings#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConvertCmafEncryptionSettings#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaConvertCmafEncryptionSettings#InitializationVectorInManifest
   */
  readonly initializationVectorInManifest?: string;

  /**
   * @schema MediaConvertCmafEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProviderCmaf;

  /**
   * @schema MediaConvertCmafEncryptionSettings#StaticKeyProvider
   */
  readonly staticKeyProvider?: MediaConvertStaticKeyProvider;

  /**
   * @schema MediaConvertCmafEncryptionSettings#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaConvertCmafEncryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCmafEncryptionSettings(obj: MediaConvertCmafEncryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantInitializationVector': obj.constantInitializationVector,
    'EncryptionMethod': obj.encryptionMethod,
    'InitializationVectorInManifest': obj.initializationVectorInManifest,
    'SpekeKeyProvider': toJson_MediaConvertSpekeKeyProviderCmaf(obj.spekeKeyProvider),
    'StaticKeyProvider': toJson_MediaConvertStaticKeyProvider(obj.staticKeyProvider),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDashAdditionalManifest
 */
export interface MediaConvertDashAdditionalManifest {
  /**
   * @schema MediaConvertDashAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertDashAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * Converts an object of type 'MediaConvertDashAdditionalManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDashAdditionalManifest(obj: MediaConvertDashAdditionalManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestNameModifier': obj.manifestNameModifier,
    'SelectedOutputs': obj.selectedOutputs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDashIsoEncryptionSettings
 */
export interface MediaConvertDashIsoEncryptionSettings {
  /**
   * @schema MediaConvertDashIsoEncryptionSettings#PlaybackDeviceCompatibility
   */
  readonly playbackDeviceCompatibility?: string;

  /**
   * @schema MediaConvertDashIsoEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaConvertDashIsoEncryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDashIsoEncryptionSettings(obj: MediaConvertDashIsoEncryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlaybackDeviceCompatibility': obj.playbackDeviceCompatibility,
    'SpekeKeyProvider': toJson_MediaConvertSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHlsAdditionalManifest
 */
export interface MediaConvertHlsAdditionalManifest {
  /**
   * @schema MediaConvertHlsAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertHlsAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * Converts an object of type 'MediaConvertHlsAdditionalManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHlsAdditionalManifest(obj: MediaConvertHlsAdditionalManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestNameModifier': obj.manifestNameModifier,
    'SelectedOutputs': obj.selectedOutputs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHlsCaptionLanguageMapping
 */
export interface MediaConvertHlsCaptionLanguageMapping {
  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#CaptionChannel
   */
  readonly captionChannel?: number;

  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#CustomLanguageCode
   */
  readonly customLanguageCode?: string;

  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema MediaConvertHlsCaptionLanguageMapping#LanguageDescription
   */
  readonly languageDescription?: string;

}

/**
 * Converts an object of type 'MediaConvertHlsCaptionLanguageMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHlsCaptionLanguageMapping(obj: MediaConvertHlsCaptionLanguageMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaptionChannel': obj.captionChannel,
    'CustomLanguageCode': obj.customLanguageCode,
    'LanguageCode': obj.languageCode,
    'LanguageDescription': obj.languageDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHlsEncryptionSettings
 */
export interface MediaConvertHlsEncryptionSettings {
  /**
   * @schema MediaConvertHlsEncryptionSettings#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#EncryptionMethod
   */
  readonly encryptionMethod?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#InitializationVectorInManifest
   */
  readonly initializationVectorInManifest?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#OfflineEncrypted
   */
  readonly offlineEncrypted?: string;

  /**
   * @schema MediaConvertHlsEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProvider;

  /**
   * @schema MediaConvertHlsEncryptionSettings#StaticKeyProvider
   */
  readonly staticKeyProvider?: MediaConvertStaticKeyProvider;

  /**
   * @schema MediaConvertHlsEncryptionSettings#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'MediaConvertHlsEncryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHlsEncryptionSettings(obj: MediaConvertHlsEncryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstantInitializationVector': obj.constantInitializationVector,
    'EncryptionMethod': obj.encryptionMethod,
    'InitializationVectorInManifest': obj.initializationVectorInManifest,
    'OfflineEncrypted': obj.offlineEncrypted,
    'SpekeKeyProvider': toJson_MediaConvertSpekeKeyProvider(obj.spekeKeyProvider),
    'StaticKeyProvider': toJson_MediaConvertStaticKeyProvider(obj.staticKeyProvider),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMsSmoothAdditionalManifest
 */
export interface MediaConvertMsSmoothAdditionalManifest {
  /**
   * @schema MediaConvertMsSmoothAdditionalManifest#ManifestNameModifier
   */
  readonly manifestNameModifier?: string;

  /**
   * @schema MediaConvertMsSmoothAdditionalManifest#SelectedOutputs
   */
  readonly selectedOutputs?: string[];

}

/**
 * Converts an object of type 'MediaConvertMsSmoothAdditionalManifest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMsSmoothAdditionalManifest(obj: MediaConvertMsSmoothAdditionalManifest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestNameModifier': obj.manifestNameModifier,
    'SelectedOutputs': obj.selectedOutputs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertMsSmoothEncryptionSettings
 */
export interface MediaConvertMsSmoothEncryptionSettings {
  /**
   * @schema MediaConvertMsSmoothEncryptionSettings#SpekeKeyProvider
   */
  readonly spekeKeyProvider?: MediaConvertSpekeKeyProvider;

}

/**
 * Converts an object of type 'MediaConvertMsSmoothEncryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertMsSmoothEncryptionSettings(obj: MediaConvertMsSmoothEncryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SpekeKeyProvider': toJson_MediaConvertSpekeKeyProvider(obj.spekeKeyProvider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertHlsSettings
 */
export interface MediaConvertHlsSettings {
  /**
   * @schema MediaConvertHlsSettings#AudioGroupId
   */
  readonly audioGroupId?: string;

  /**
   * @schema MediaConvertHlsSettings#AudioOnlyContainer
   */
  readonly audioOnlyContainer?: string;

  /**
   * @schema MediaConvertHlsSettings#AudioRenditionSets
   */
  readonly audioRenditionSets?: string;

  /**
   * @schema MediaConvertHlsSettings#AudioTrackType
   */
  readonly audioTrackType?: string;

  /**
   * @schema MediaConvertHlsSettings#DescriptiveVideoServiceFlag
   */
  readonly descriptiveVideoServiceFlag?: string;

  /**
   * @schema MediaConvertHlsSettings#IFrameOnlyManifest
   */
  readonly iFrameOnlyManifest?: string;

  /**
   * @schema MediaConvertHlsSettings#SegmentModifier
   */
  readonly segmentModifier?: string;

}

/**
 * Converts an object of type 'MediaConvertHlsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertHlsSettings(obj: MediaConvertHlsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AudioGroupId': obj.audioGroupId,
    'AudioOnlyContainer': obj.audioOnlyContainer,
    'AudioRenditionSets': obj.audioRenditionSets,
    'AudioTrackType': obj.audioTrackType,
    'DescriptiveVideoServiceFlag': obj.descriptiveVideoServiceFlag,
    'IFrameOnlyManifest': obj.iFrameOnlyManifest,
    'SegmentModifier': obj.segmentModifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertOutputChannelMapping
 */
export interface MediaConvertOutputChannelMapping {
  /**
   * @schema MediaConvertOutputChannelMapping#InputChannels
   */
  readonly inputChannels?: number[];

  /**
   * @schema MediaConvertOutputChannelMapping#InputChannelsFineTune
   */
  readonly inputChannelsFineTune?: number[];

}

/**
 * Converts an object of type 'MediaConvertOutputChannelMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertOutputChannelMapping(obj: MediaConvertOutputChannelMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputChannels': obj.inputChannels?.map(y => y),
    'InputChannelsFineTune': obj.inputChannelsFineTune?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAv1QvbrSettings
 */
export interface MediaConvertAv1QvbrSettings {
  /**
   * @schema MediaConvertAv1QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaConvertAv1QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * Converts an object of type 'MediaConvertAv1QvbrSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAv1QvbrSettings(obj: MediaConvertAv1QvbrSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QvbrQualityLevel': obj.qvbrQualityLevel,
    'QvbrQualityLevelFineTune': obj.qvbrQualityLevelFineTune,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertAvcIntraUhdSettings
 */
export interface MediaConvertAvcIntraUhdSettings {
  /**
   * @schema MediaConvertAvcIntraUhdSettings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

}

/**
 * Converts an object of type 'MediaConvertAvcIntraUhdSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertAvcIntraUhdSettings(obj: MediaConvertAvcIntraUhdSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QualityTuningLevel': obj.qualityTuningLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertH264QvbrSettings
 */
export interface MediaConvertH264QvbrSettings {
  /**
   * @schema MediaConvertH264QvbrSettings#MaxAverageBitrate
   */
  readonly maxAverageBitrate?: number;

  /**
   * @schema MediaConvertH264QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaConvertH264QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * Converts an object of type 'MediaConvertH264QvbrSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertH264QvbrSettings(obj: MediaConvertH264QvbrSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxAverageBitrate': obj.maxAverageBitrate,
    'QvbrQualityLevel': obj.qvbrQualityLevel,
    'QvbrQualityLevelFineTune': obj.qvbrQualityLevelFineTune,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertH265QvbrSettings
 */
export interface MediaConvertH265QvbrSettings {
  /**
   * @schema MediaConvertH265QvbrSettings#MaxAverageBitrate
   */
  readonly maxAverageBitrate?: number;

  /**
   * @schema MediaConvertH265QvbrSettings#QvbrQualityLevel
   */
  readonly qvbrQualityLevel?: number;

  /**
   * @schema MediaConvertH265QvbrSettings#QvbrQualityLevelFineTune
   */
  readonly qvbrQualityLevelFineTune?: number;

}

/**
 * Converts an object of type 'MediaConvertH265QvbrSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertH265QvbrSettings(obj: MediaConvertH265QvbrSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxAverageBitrate': obj.maxAverageBitrate,
    'QvbrQualityLevel': obj.qvbrQualityLevel,
    'QvbrQualityLevelFineTune': obj.qvbrQualityLevelFineTune,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertXavc4kIntraCbgProfileSettings
 */
export interface MediaConvertXavc4kIntraCbgProfileSettings {
  /**
   * @schema MediaConvertXavc4kIntraCbgProfileSettings#XavcClass
   */
  readonly xavcClass?: string;

}

/**
 * Converts an object of type 'MediaConvertXavc4kIntraCbgProfileSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertXavc4kIntraCbgProfileSettings(obj: MediaConvertXavc4kIntraCbgProfileSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XavcClass': obj.xavcClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertXavc4kIntraVbrProfileSettings
 */
export interface MediaConvertXavc4kIntraVbrProfileSettings {
  /**
   * @schema MediaConvertXavc4kIntraVbrProfileSettings#XavcClass
   */
  readonly xavcClass?: string;

}

/**
 * Converts an object of type 'MediaConvertXavc4kIntraVbrProfileSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertXavc4kIntraVbrProfileSettings(obj: MediaConvertXavc4kIntraVbrProfileSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XavcClass': obj.xavcClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertXavc4kProfileSettings
 */
export interface MediaConvertXavc4kProfileSettings {
  /**
   * @schema MediaConvertXavc4kProfileSettings#BitrateClass
   */
  readonly bitrateClass?: string;

  /**
   * @schema MediaConvertXavc4kProfileSettings#CodecProfile
   */
  readonly codecProfile?: string;

  /**
   * @schema MediaConvertXavc4kProfileSettings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertXavc4kProfileSettings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaConvertXavc4kProfileSettings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertXavc4kProfileSettings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertXavc4kProfileSettings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertXavc4kProfileSettings#Slices
   */
  readonly slices?: number;

}

/**
 * Converts an object of type 'MediaConvertXavc4kProfileSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertXavc4kProfileSettings(obj: MediaConvertXavc4kProfileSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BitrateClass': obj.bitrateClass,
    'CodecProfile': obj.codecProfile,
    'FlickerAdaptiveQuantization': obj.flickerAdaptiveQuantization,
    'GopBReference': obj.gopBReference,
    'GopClosedCadence': obj.gopClosedCadence,
    'HrdBufferSize': obj.hrdBufferSize,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'Slices': obj.slices,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertXavcHdIntraCbgProfileSettings
 */
export interface MediaConvertXavcHdIntraCbgProfileSettings {
  /**
   * @schema MediaConvertXavcHdIntraCbgProfileSettings#XavcClass
   */
  readonly xavcClass?: string;

}

/**
 * Converts an object of type 'MediaConvertXavcHdIntraCbgProfileSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertXavcHdIntraCbgProfileSettings(obj: MediaConvertXavcHdIntraCbgProfileSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'XavcClass': obj.xavcClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertXavcHdProfileSettings
 */
export interface MediaConvertXavcHdProfileSettings {
  /**
   * @schema MediaConvertXavcHdProfileSettings#BitrateClass
   */
  readonly bitrateClass?: string;

  /**
   * @schema MediaConvertXavcHdProfileSettings#FlickerAdaptiveQuantization
   */
  readonly flickerAdaptiveQuantization?: string;

  /**
   * @schema MediaConvertXavcHdProfileSettings#GopBReference
   */
  readonly gopBReference?: string;

  /**
   * @schema MediaConvertXavcHdProfileSettings#GopClosedCadence
   */
  readonly gopClosedCadence?: number;

  /**
   * @schema MediaConvertXavcHdProfileSettings#HrdBufferSize
   */
  readonly hrdBufferSize?: number;

  /**
   * @schema MediaConvertXavcHdProfileSettings#InterlaceMode
   */
  readonly interlaceMode?: string;

  /**
   * @schema MediaConvertXavcHdProfileSettings#QualityTuningLevel
   */
  readonly qualityTuningLevel?: string;

  /**
   * @schema MediaConvertXavcHdProfileSettings#Slices
   */
  readonly slices?: number;

  /**
   * @schema MediaConvertXavcHdProfileSettings#Telecine
   */
  readonly telecine?: string;

}

/**
 * Converts an object of type 'MediaConvertXavcHdProfileSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertXavcHdProfileSettings(obj: MediaConvertXavcHdProfileSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BitrateClass': obj.bitrateClass,
    'FlickerAdaptiveQuantization': obj.flickerAdaptiveQuantization,
    'GopBReference': obj.gopBReference,
    'GopClosedCadence': obj.gopClosedCadence,
    'HrdBufferSize': obj.hrdBufferSize,
    'InterlaceMode': obj.interlaceMode,
    'QualityTuningLevel': obj.qualityTuningLevel,
    'Slices': obj.slices,
    'Telecine': obj.telecine,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertDolbyVisionLevel6Metadata
 */
export interface MediaConvertDolbyVisionLevel6Metadata {
  /**
   * @schema MediaConvertDolbyVisionLevel6Metadata#MaxCll
   */
  readonly maxCll?: number;

  /**
   * @schema MediaConvertDolbyVisionLevel6Metadata#MaxFall
   */
  readonly maxFall?: number;

}

/**
 * Converts an object of type 'MediaConvertDolbyVisionLevel6Metadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertDolbyVisionLevel6Metadata(obj: MediaConvertDolbyVisionLevel6Metadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxCll': obj.maxCll,
    'MaxFall': obj.maxFall,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNoiseReducerFilterSettings
 */
export interface MediaConvertNoiseReducerFilterSettings {
  /**
   * @schema MediaConvertNoiseReducerFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * Converts an object of type 'MediaConvertNoiseReducerFilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNoiseReducerFilterSettings(obj: MediaConvertNoiseReducerFilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Strength': obj.strength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNoiseReducerSpatialFilterSettings
 */
export interface MediaConvertNoiseReducerSpatialFilterSettings {
  /**
   * @schema MediaConvertNoiseReducerSpatialFilterSettings#PostFilterSharpenStrength
   */
  readonly postFilterSharpenStrength?: number;

  /**
   * @schema MediaConvertNoiseReducerSpatialFilterSettings#Speed
   */
  readonly speed?: number;

  /**
   * @schema MediaConvertNoiseReducerSpatialFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * Converts an object of type 'MediaConvertNoiseReducerSpatialFilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNoiseReducerSpatialFilterSettings(obj: MediaConvertNoiseReducerSpatialFilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PostFilterSharpenStrength': obj.postFilterSharpenStrength,
    'Speed': obj.speed,
    'Strength': obj.strength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNoiseReducerTemporalFilterSettings
 */
export interface MediaConvertNoiseReducerTemporalFilterSettings {
  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#AggressiveMode
   */
  readonly aggressiveMode?: number;

  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#PostTemporalSharpening
   */
  readonly postTemporalSharpening?: string;

  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#Speed
   */
  readonly speed?: number;

  /**
   * @schema MediaConvertNoiseReducerTemporalFilterSettings#Strength
   */
  readonly strength?: number;

}

/**
 * Converts an object of type 'MediaConvertNoiseReducerTemporalFilterSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNoiseReducerTemporalFilterSettings(obj: MediaConvertNoiseReducerTemporalFilterSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AggressiveMode': obj.aggressiveMode,
    'PostTemporalSharpening': obj.postTemporalSharpening,
    'Speed': obj.speed,
    'Strength': obj.strength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertNexGuardFileMarkerSettings
 */
export interface MediaConvertNexGuardFileMarkerSettings {
  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#License
   */
  readonly license?: string;

  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#Payload
   */
  readonly payload?: number;

  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#Preset
   */
  readonly preset?: string;

  /**
   * @schema MediaConvertNexGuardFileMarkerSettings#Strength
   */
  readonly strength?: string;

}

/**
 * Converts an object of type 'MediaConvertNexGuardFileMarkerSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertNexGuardFileMarkerSettings(obj: MediaConvertNexGuardFileMarkerSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'License': obj.license,
    'Payload': obj.payload,
    'Preset': obj.preset,
    'Strength': obj.strength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertCaptionSourceFramerate
 */
export interface MediaConvertCaptionSourceFramerate {
  /**
   * @schema MediaConvertCaptionSourceFramerate#FramerateDenominator
   */
  readonly framerateDenominator?: number;

  /**
   * @schema MediaConvertCaptionSourceFramerate#FramerateNumerator
   */
  readonly framerateNumerator?: number;

}

/**
 * Converts an object of type 'MediaConvertCaptionSourceFramerate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertCaptionSourceFramerate(obj: MediaConvertCaptionSourceFramerate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FramerateDenominator': obj.framerateDenominator,
    'FramerateNumerator': obj.framerateNumerator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertS3DestinationSettings
 */
export interface MediaConvertS3DestinationSettings {
  /**
   * @schema MediaConvertS3DestinationSettings#AccessControl
   */
  readonly accessControl?: MediaConvertS3DestinationAccessControl;

  /**
   * @schema MediaConvertS3DestinationSettings#Encryption
   */
  readonly encryption?: MediaConvertS3EncryptionSettings;

}

/**
 * Converts an object of type 'MediaConvertS3DestinationSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertS3DestinationSettings(obj: MediaConvertS3DestinationSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessControl': toJson_MediaConvertS3DestinationAccessControl(obj.accessControl),
    'Encryption': toJson_MediaConvertS3EncryptionSettings(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertSpekeKeyProviderCmaf
 */
export interface MediaConvertSpekeKeyProviderCmaf {
  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#DashSignaledSystemIds
   */
  readonly dashSignaledSystemIds?: string[];

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#HlsSignaledSystemIds
   */
  readonly hlsSignaledSystemIds?: string[];

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConvertSpekeKeyProviderCmaf#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaConvertSpekeKeyProviderCmaf' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertSpekeKeyProviderCmaf(obj: MediaConvertSpekeKeyProviderCmaf | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'DashSignaledSystemIds': obj.dashSignaledSystemIds?.map(y => y),
    'HlsSignaledSystemIds': obj.hlsSignaledSystemIds?.map(y => y),
    'ResourceId': obj.resourceId,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertStaticKeyProvider
 */
export interface MediaConvertStaticKeyProvider {
  /**
   * @schema MediaConvertStaticKeyProvider#KeyFormat
   */
  readonly keyFormat?: string;

  /**
   * @schema MediaConvertStaticKeyProvider#KeyFormatVersions
   */
  readonly keyFormatVersions?: string;

  /**
   * @schema MediaConvertStaticKeyProvider#StaticKeyValue
   */
  readonly staticKeyValue?: string;

  /**
   * @schema MediaConvertStaticKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaConvertStaticKeyProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertStaticKeyProvider(obj: MediaConvertStaticKeyProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyFormat': obj.keyFormat,
    'KeyFormatVersions': obj.keyFormatVersions,
    'StaticKeyValue': obj.staticKeyValue,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertSpekeKeyProvider
 */
export interface MediaConvertSpekeKeyProvider {
  /**
   * @schema MediaConvertSpekeKeyProvider#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema MediaConvertSpekeKeyProvider#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConvertSpekeKeyProvider#SystemIds
   */
  readonly systemIds?: string[];

  /**
   * @schema MediaConvertSpekeKeyProvider#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaConvertSpekeKeyProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertSpekeKeyProvider(obj: MediaConvertSpekeKeyProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'ResourceId': obj.resourceId,
    'SystemIds': obj.systemIds?.map(y => y),
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertS3DestinationAccessControl
 */
export interface MediaConvertS3DestinationAccessControl {
  /**
   * @schema MediaConvertS3DestinationAccessControl#CannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * Converts an object of type 'MediaConvertS3DestinationAccessControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertS3DestinationAccessControl(obj: MediaConvertS3DestinationAccessControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CannedAcl': obj.cannedAcl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConvertS3EncryptionSettings
 */
export interface MediaConvertS3EncryptionSettings {
  /**
   * @schema MediaConvertS3EncryptionSettings#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema MediaConvertS3EncryptionSettings#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'MediaConvertS3EncryptionSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConvertS3EncryptionSettings(obj: MediaConvertS3EncryptionSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionType': obj.encryptionType,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
