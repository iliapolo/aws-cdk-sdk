/**
 * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountRequest
 */
export interface IoTWirelessAssociateAwsAccountWithPartnerAccountRequest {
  /**
   * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountRequest#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkAccountInfo;

  /**
   * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

}

/**
 * Converts an object of type 'IoTWirelessAssociateAwsAccountWithPartnerAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateAwsAccountWithPartnerAccountRequest(obj: IoTWirelessAssociateAwsAccountWithPartnerAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sidewalk': toJson_IoTWirelessSidewalkAccountInfo(obj.sidewalk),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountResponse
 */
export interface IoTWirelessAssociateAwsAccountWithPartnerAccountResponse {
  /**
   * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountResponse#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkAccountInfo;

  /**
   * @schema IoTWirelessAssociateAwsAccountWithPartnerAccountResponse#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'IoTWirelessAssociateAwsAccountWithPartnerAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateAwsAccountWithPartnerAccountResponse(obj: IoTWirelessAssociateAwsAccountWithPartnerAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sidewalk': toJson_IoTWirelessSidewalkAccountInfo(obj.sidewalk),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateWirelessDeviceWithThingRequest
 */
export interface IoTWirelessAssociateWirelessDeviceWithThingRequest {
  /**
   * @schema IoTWirelessAssociateWirelessDeviceWithThingRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessAssociateWirelessDeviceWithThingRequest#ThingArn
   */
  readonly thingArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessAssociateWirelessDeviceWithThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateWirelessDeviceWithThingRequest(obj: IoTWirelessAssociateWirelessDeviceWithThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ThingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateWirelessDeviceWithThingResponse
 */
export interface IoTWirelessAssociateWirelessDeviceWithThingResponse {
}

/**
 * Converts an object of type 'IoTWirelessAssociateWirelessDeviceWithThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateWirelessDeviceWithThingResponse(obj: IoTWirelessAssociateWirelessDeviceWithThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateWirelessGatewayWithCertificateRequest
 */
export interface IoTWirelessAssociateWirelessGatewayWithCertificateRequest {
  /**
   * @schema IoTWirelessAssociateWirelessGatewayWithCertificateRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessAssociateWirelessGatewayWithCertificateRequest#IotCertificateId
   */
  readonly iotCertificateId?: string;

}

/**
 * Converts an object of type 'IoTWirelessAssociateWirelessGatewayWithCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateWirelessGatewayWithCertificateRequest(obj: IoTWirelessAssociateWirelessGatewayWithCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'IotCertificateId': obj.iotCertificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateWirelessGatewayWithCertificateResponse
 */
export interface IoTWirelessAssociateWirelessGatewayWithCertificateResponse {
  /**
   * @schema IoTWirelessAssociateWirelessGatewayWithCertificateResponse#IotCertificateId
   */
  readonly iotCertificateId?: string;

}

/**
 * Converts an object of type 'IoTWirelessAssociateWirelessGatewayWithCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateWirelessGatewayWithCertificateResponse(obj: IoTWirelessAssociateWirelessGatewayWithCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IotCertificateId': obj.iotCertificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateWirelessGatewayWithThingRequest
 */
export interface IoTWirelessAssociateWirelessGatewayWithThingRequest {
  /**
   * @schema IoTWirelessAssociateWirelessGatewayWithThingRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessAssociateWirelessGatewayWithThingRequest#ThingArn
   */
  readonly thingArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessAssociateWirelessGatewayWithThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateWirelessGatewayWithThingRequest(obj: IoTWirelessAssociateWirelessGatewayWithThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ThingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAssociateWirelessGatewayWithThingResponse
 */
export interface IoTWirelessAssociateWirelessGatewayWithThingResponse {
}

/**
 * Converts an object of type 'IoTWirelessAssociateWirelessGatewayWithThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAssociateWirelessGatewayWithThingResponse(obj: IoTWirelessAssociateWirelessGatewayWithThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateDestinationRequest
 */
export interface IoTWirelessCreateDestinationRequest {
  /**
   * @schema IoTWirelessCreateDestinationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessCreateDestinationRequest#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema IoTWirelessCreateDestinationRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema IoTWirelessCreateDestinationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessCreateDestinationRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTWirelessCreateDestinationRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

  /**
   * @schema IoTWirelessCreateDestinationRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateDestinationRequest(obj: IoTWirelessCreateDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ExpressionType': obj.expressionType,
    'Expression': obj.expression,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateDestinationResponse
 */
export interface IoTWirelessCreateDestinationResponse {
  /**
   * @schema IoTWirelessCreateDestinationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessCreateDestinationResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateDestinationResponse(obj: IoTWirelessCreateDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateDeviceProfileRequest
 */
export interface IoTWirelessCreateDeviceProfileRequest {
  /**
   * @schema IoTWirelessCreateDeviceProfileRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessCreateDeviceProfileRequest#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanDeviceProfile;

  /**
   * @schema IoTWirelessCreateDeviceProfileRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

  /**
   * @schema IoTWirelessCreateDeviceProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateDeviceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateDeviceProfileRequest(obj: IoTWirelessCreateDeviceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'LoRaWAN': toJson_IoTWirelessLoRaWanDeviceProfile(obj.loRaWan),
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateDeviceProfileResponse
 */
export interface IoTWirelessCreateDeviceProfileResponse {
  /**
   * @schema IoTWirelessCreateDeviceProfileResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessCreateDeviceProfileResponse#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateDeviceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateDeviceProfileResponse(obj: IoTWirelessCreateDeviceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateServiceProfileRequest
 */
export interface IoTWirelessCreateServiceProfileRequest {
  /**
   * @schema IoTWirelessCreateServiceProfileRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessCreateServiceProfileRequest#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanServiceProfile;

  /**
   * @schema IoTWirelessCreateServiceProfileRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

  /**
   * @schema IoTWirelessCreateServiceProfileRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateServiceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateServiceProfileRequest(obj: IoTWirelessCreateServiceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'LoRaWAN': toJson_IoTWirelessLoRaWanServiceProfile(obj.loRaWan),
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateServiceProfileResponse
 */
export interface IoTWirelessCreateServiceProfileResponse {
  /**
   * @schema IoTWirelessCreateServiceProfileResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessCreateServiceProfileResponse#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateServiceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateServiceProfileResponse(obj: IoTWirelessCreateServiceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessDeviceRequest
 */
export interface IoTWirelessCreateWirelessDeviceRequest {
  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#DestinationName
   */
  readonly destinationName?: string;

  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanDevice;

  /**
   * @schema IoTWirelessCreateWirelessDeviceRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessDeviceRequest(obj: IoTWirelessCreateWirelessDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Name': obj.name,
    'Description': obj.description,
    'DestinationName': obj.destinationName,
    'ClientRequestToken': obj.clientRequestToken,
    'LoRaWAN': toJson_IoTWirelessLoRaWanDevice(obj.loRaWan),
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessDeviceResponse
 */
export interface IoTWirelessCreateWirelessDeviceResponse {
  /**
   * @schema IoTWirelessCreateWirelessDeviceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessCreateWirelessDeviceResponse#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessDeviceResponse(obj: IoTWirelessCreateWirelessDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessGatewayRequest
 */
export interface IoTWirelessCreateWirelessGatewayRequest {
  /**
   * @schema IoTWirelessCreateWirelessGatewayRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayRequest#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanGateway;

  /**
   * @schema IoTWirelessCreateWirelessGatewayRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

  /**
   * @schema IoTWirelessCreateWirelessGatewayRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessGatewayRequest(obj: IoTWirelessCreateWirelessGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'LoRaWAN': toJson_IoTWirelessLoRaWanGateway(obj.loRaWan),
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessGatewayResponse
 */
export interface IoTWirelessCreateWirelessGatewayResponse {
  /**
   * @schema IoTWirelessCreateWirelessGatewayResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayResponse#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessGatewayResponse(obj: IoTWirelessCreateWirelessGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessGatewayTaskRequest
 */
export interface IoTWirelessCreateWirelessGatewayTaskRequest {
  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskRequest#WirelessGatewayTaskDefinitionId
   */
  readonly wirelessGatewayTaskDefinitionId?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessGatewayTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessGatewayTaskRequest(obj: IoTWirelessCreateWirelessGatewayTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'WirelessGatewayTaskDefinitionId': obj.wirelessGatewayTaskDefinitionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessGatewayTaskResponse
 */
export interface IoTWirelessCreateWirelessGatewayTaskResponse {
  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskResponse#WirelessGatewayTaskDefinitionId
   */
  readonly wirelessGatewayTaskDefinitionId?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessGatewayTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessGatewayTaskResponse(obj: IoTWirelessCreateWirelessGatewayTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessGatewayTaskDefinitionId': obj.wirelessGatewayTaskDefinitionId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionRequest
 */
export interface IoTWirelessCreateWirelessGatewayTaskDefinitionRequest {
  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionRequest#AutoCreateTasks
   */
  readonly autoCreateTasks?: boolean;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionRequest#Update
   */
  readonly update?: IoTWirelessUpdateWirelessGatewayTaskCreate;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessGatewayTaskDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessGatewayTaskDefinitionRequest(obj: IoTWirelessCreateWirelessGatewayTaskDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoCreateTasks': obj.autoCreateTasks,
    'Name': obj.name,
    'Update': toJson_IoTWirelessUpdateWirelessGatewayTaskCreate(obj.update),
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionResponse
 */
export interface IoTWirelessCreateWirelessGatewayTaskDefinitionResponse {
  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionResponse#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessCreateWirelessGatewayTaskDefinitionResponse#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'IoTWirelessCreateWirelessGatewayTaskDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCreateWirelessGatewayTaskDefinitionResponse(obj: IoTWirelessCreateWirelessGatewayTaskDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteDestinationRequest
 */
export interface IoTWirelessDeleteDestinationRequest {
  /**
   * @schema IoTWirelessDeleteDestinationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteDestinationRequest(obj: IoTWirelessDeleteDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteDestinationResponse
 */
export interface IoTWirelessDeleteDestinationResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteDestinationResponse(obj: IoTWirelessDeleteDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteDeviceProfileRequest
 */
export interface IoTWirelessDeleteDeviceProfileRequest {
  /**
   * @schema IoTWirelessDeleteDeviceProfileRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteDeviceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteDeviceProfileRequest(obj: IoTWirelessDeleteDeviceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteDeviceProfileResponse
 */
export interface IoTWirelessDeleteDeviceProfileResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteDeviceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteDeviceProfileResponse(obj: IoTWirelessDeleteDeviceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteServiceProfileRequest
 */
export interface IoTWirelessDeleteServiceProfileRequest {
  /**
   * @schema IoTWirelessDeleteServiceProfileRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteServiceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteServiceProfileRequest(obj: IoTWirelessDeleteServiceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteServiceProfileResponse
 */
export interface IoTWirelessDeleteServiceProfileResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteServiceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteServiceProfileResponse(obj: IoTWirelessDeleteServiceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessDeviceRequest
 */
export interface IoTWirelessDeleteWirelessDeviceRequest {
  /**
   * @schema IoTWirelessDeleteWirelessDeviceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessDeviceRequest(obj: IoTWirelessDeleteWirelessDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessDeviceResponse
 */
export interface IoTWirelessDeleteWirelessDeviceResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessDeviceResponse(obj: IoTWirelessDeleteWirelessDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessGatewayRequest
 */
export interface IoTWirelessDeleteWirelessGatewayRequest {
  /**
   * @schema IoTWirelessDeleteWirelessGatewayRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessGatewayRequest(obj: IoTWirelessDeleteWirelessGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessGatewayResponse
 */
export interface IoTWirelessDeleteWirelessGatewayResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessGatewayResponse(obj: IoTWirelessDeleteWirelessGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessGatewayTaskRequest
 */
export interface IoTWirelessDeleteWirelessGatewayTaskRequest {
  /**
   * @schema IoTWirelessDeleteWirelessGatewayTaskRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessGatewayTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessGatewayTaskRequest(obj: IoTWirelessDeleteWirelessGatewayTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessGatewayTaskResponse
 */
export interface IoTWirelessDeleteWirelessGatewayTaskResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessGatewayTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessGatewayTaskResponse(obj: IoTWirelessDeleteWirelessGatewayTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest
 */
export interface IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest {
  /**
   * @schema IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest(obj: IoTWirelessDeleteWirelessGatewayTaskDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeleteWirelessGatewayTaskDefinitionResponse
 */
export interface IoTWirelessDeleteWirelessGatewayTaskDefinitionResponse {
}

/**
 * Converts an object of type 'IoTWirelessDeleteWirelessGatewayTaskDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeleteWirelessGatewayTaskDefinitionResponse(obj: IoTWirelessDeleteWirelessGatewayTaskDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest
 */
export interface IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest {
  /**
   * @schema IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest#PartnerAccountId
   */
  readonly partnerAccountId?: string;

  /**
   * @schema IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest#PartnerType
   */
  readonly partnerType?: string;

}

/**
 * Converts an object of type 'IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest(obj: IoTWirelessDisassociateAwsAccountFromPartnerAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartnerAccountId': obj.partnerAccountId,
    'PartnerType': obj.partnerType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateAwsAccountFromPartnerAccountResponse
 */
export interface IoTWirelessDisassociateAwsAccountFromPartnerAccountResponse {
}

/**
 * Converts an object of type 'IoTWirelessDisassociateAwsAccountFromPartnerAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateAwsAccountFromPartnerAccountResponse(obj: IoTWirelessDisassociateAwsAccountFromPartnerAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateWirelessDeviceFromThingRequest
 */
export interface IoTWirelessDisassociateWirelessDeviceFromThingRequest {
  /**
   * @schema IoTWirelessDisassociateWirelessDeviceFromThingRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDisassociateWirelessDeviceFromThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateWirelessDeviceFromThingRequest(obj: IoTWirelessDisassociateWirelessDeviceFromThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateWirelessDeviceFromThingResponse
 */
export interface IoTWirelessDisassociateWirelessDeviceFromThingResponse {
}

/**
 * Converts an object of type 'IoTWirelessDisassociateWirelessDeviceFromThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateWirelessDeviceFromThingResponse(obj: IoTWirelessDisassociateWirelessDeviceFromThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateWirelessGatewayFromCertificateRequest
 */
export interface IoTWirelessDisassociateWirelessGatewayFromCertificateRequest {
  /**
   * @schema IoTWirelessDisassociateWirelessGatewayFromCertificateRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDisassociateWirelessGatewayFromCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateWirelessGatewayFromCertificateRequest(obj: IoTWirelessDisassociateWirelessGatewayFromCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateWirelessGatewayFromCertificateResponse
 */
export interface IoTWirelessDisassociateWirelessGatewayFromCertificateResponse {
}

/**
 * Converts an object of type 'IoTWirelessDisassociateWirelessGatewayFromCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateWirelessGatewayFromCertificateResponse(obj: IoTWirelessDisassociateWirelessGatewayFromCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateWirelessGatewayFromThingRequest
 */
export interface IoTWirelessDisassociateWirelessGatewayFromThingRequest {
  /**
   * @schema IoTWirelessDisassociateWirelessGatewayFromThingRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDisassociateWirelessGatewayFromThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateWirelessGatewayFromThingRequest(obj: IoTWirelessDisassociateWirelessGatewayFromThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDisassociateWirelessGatewayFromThingResponse
 */
export interface IoTWirelessDisassociateWirelessGatewayFromThingResponse {
}

/**
 * Converts an object of type 'IoTWirelessDisassociateWirelessGatewayFromThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDisassociateWirelessGatewayFromThingResponse(obj: IoTWirelessDisassociateWirelessGatewayFromThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetDestinationRequest
 */
export interface IoTWirelessGetDestinationRequest {
  /**
   * @schema IoTWirelessGetDestinationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetDestinationRequest(obj: IoTWirelessGetDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetDestinationResponse
 */
export interface IoTWirelessGetDestinationResponse {
  /**
   * @schema IoTWirelessGetDestinationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessGetDestinationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessGetDestinationResponse#Expression
   */
  readonly expression?: string;

  /**
   * @schema IoTWirelessGetDestinationResponse#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema IoTWirelessGetDestinationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessGetDestinationResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetDestinationResponse(obj: IoTWirelessGetDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Expression': obj.expression,
    'ExpressionType': obj.expressionType,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetDeviceProfileRequest
 */
export interface IoTWirelessGetDeviceProfileRequest {
  /**
   * @schema IoTWirelessGetDeviceProfileRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetDeviceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetDeviceProfileRequest(obj: IoTWirelessGetDeviceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetDeviceProfileResponse
 */
export interface IoTWirelessGetDeviceProfileResponse {
  /**
   * @schema IoTWirelessGetDeviceProfileResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessGetDeviceProfileResponse#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessGetDeviceProfileResponse#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessGetDeviceProfileResponse#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanDeviceProfile;

}

/**
 * Converts an object of type 'IoTWirelessGetDeviceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetDeviceProfileResponse(obj: IoTWirelessGetDeviceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Id': obj.id,
    'LoRaWAN': toJson_IoTWirelessLoRaWanDeviceProfile(obj.loRaWan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetLogLevelsByResourceTypesRequest
 */
export interface IoTWirelessGetLogLevelsByResourceTypesRequest {
}

/**
 * Converts an object of type 'IoTWirelessGetLogLevelsByResourceTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetLogLevelsByResourceTypesRequest(obj: IoTWirelessGetLogLevelsByResourceTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetLogLevelsByResourceTypesResponse
 */
export interface IoTWirelessGetLogLevelsByResourceTypesResponse {
  /**
   * @schema IoTWirelessGetLogLevelsByResourceTypesResponse#DefaultLogLevel
   */
  readonly defaultLogLevel?: string;

  /**
   * @schema IoTWirelessGetLogLevelsByResourceTypesResponse#WirelessGatewayLogOptions
   */
  readonly wirelessGatewayLogOptions?: IoTWirelessWirelessGatewayLogOption[];

  /**
   * @schema IoTWirelessGetLogLevelsByResourceTypesResponse#WirelessDeviceLogOptions
   */
  readonly wirelessDeviceLogOptions?: IoTWirelessWirelessDeviceLogOption[];

}

/**
 * Converts an object of type 'IoTWirelessGetLogLevelsByResourceTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetLogLevelsByResourceTypesResponse(obj: IoTWirelessGetLogLevelsByResourceTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultLogLevel': obj.defaultLogLevel,
    'WirelessGatewayLogOptions': obj.wirelessGatewayLogOptions?.map(y => toJson_IoTWirelessWirelessGatewayLogOption(y)),
    'WirelessDeviceLogOptions': obj.wirelessDeviceLogOptions?.map(y => toJson_IoTWirelessWirelessDeviceLogOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetPartnerAccountRequest
 */
export interface IoTWirelessGetPartnerAccountRequest {
  /**
   * @schema IoTWirelessGetPartnerAccountRequest#PartnerAccountId
   */
  readonly partnerAccountId?: string;

  /**
   * @schema IoTWirelessGetPartnerAccountRequest#PartnerType
   */
  readonly partnerType?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetPartnerAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetPartnerAccountRequest(obj: IoTWirelessGetPartnerAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartnerAccountId': obj.partnerAccountId,
    'PartnerType': obj.partnerType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetPartnerAccountResponse
 */
export interface IoTWirelessGetPartnerAccountResponse {
  /**
   * @schema IoTWirelessGetPartnerAccountResponse#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkAccountInfoWithFingerprint;

  /**
   * @schema IoTWirelessGetPartnerAccountResponse#AccountLinked
   */
  readonly accountLinked?: boolean;

}

/**
 * Converts an object of type 'IoTWirelessGetPartnerAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetPartnerAccountResponse(obj: IoTWirelessGetPartnerAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sidewalk': toJson_IoTWirelessSidewalkAccountInfoWithFingerprint(obj.sidewalk),
    'AccountLinked': obj.accountLinked,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetResourceLogLevelRequest
 */
export interface IoTWirelessGetResourceLogLevelRequest {
  /**
   * @schema IoTWirelessGetResourceLogLevelRequest#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema IoTWirelessGetResourceLogLevelRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetResourceLogLevelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetResourceLogLevelRequest(obj: IoTWirelessGetResourceLogLevelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetResourceLogLevelResponse
 */
export interface IoTWirelessGetResourceLogLevelResponse {
  /**
   * @schema IoTWirelessGetResourceLogLevelResponse#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetResourceLogLevelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetResourceLogLevelResponse(obj: IoTWirelessGetResourceLogLevelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetServiceEndpointRequest
 */
export interface IoTWirelessGetServiceEndpointRequest {
  /**
   * @schema IoTWirelessGetServiceEndpointRequest#ServiceType
   */
  readonly serviceType?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetServiceEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetServiceEndpointRequest(obj: IoTWirelessGetServiceEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceType': obj.serviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetServiceEndpointResponse
 */
export interface IoTWirelessGetServiceEndpointResponse {
  /**
   * @schema IoTWirelessGetServiceEndpointResponse#ServiceType
   */
  readonly serviceType?: string;

  /**
   * @schema IoTWirelessGetServiceEndpointResponse#ServiceEndpoint
   */
  readonly serviceEndpoint?: string;

  /**
   * @schema IoTWirelessGetServiceEndpointResponse#ServerTrust
   */
  readonly serverTrust?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetServiceEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetServiceEndpointResponse(obj: IoTWirelessGetServiceEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceType': obj.serviceType,
    'ServiceEndpoint': obj.serviceEndpoint,
    'ServerTrust': obj.serverTrust,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetServiceProfileRequest
 */
export interface IoTWirelessGetServiceProfileRequest {
  /**
   * @schema IoTWirelessGetServiceProfileRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetServiceProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetServiceProfileRequest(obj: IoTWirelessGetServiceProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetServiceProfileResponse
 */
export interface IoTWirelessGetServiceProfileResponse {
  /**
   * @schema IoTWirelessGetServiceProfileResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessGetServiceProfileResponse#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessGetServiceProfileResponse#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessGetServiceProfileResponse#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanGetServiceProfileInfo;

}

/**
 * Converts an object of type 'IoTWirelessGetServiceProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetServiceProfileResponse(obj: IoTWirelessGetServiceProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Id': obj.id,
    'LoRaWAN': toJson_IoTWirelessLoRaWanGetServiceProfileInfo(obj.loRaWan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessDeviceRequest
 */
export interface IoTWirelessGetWirelessDeviceRequest {
  /**
   * @schema IoTWirelessGetWirelessDeviceRequest#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceRequest#IdentifierType
   */
  readonly identifierType?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessDeviceRequest(obj: IoTWirelessGetWirelessDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Identifier': obj.identifier,
    'IdentifierType': obj.identifierType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessDeviceResponse
 */
export interface IoTWirelessGetWirelessDeviceResponse {
  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#Type
   */
  readonly type?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#DestinationName
   */
  readonly destinationName?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#ThingName
   */
  readonly thingName?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#ThingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanDevice;

  /**
   * @schema IoTWirelessGetWirelessDeviceResponse#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkDevice;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessDeviceResponse(obj: IoTWirelessGetWirelessDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Name': obj.name,
    'Description': obj.description,
    'DestinationName': obj.destinationName,
    'Id': obj.id,
    'Arn': obj.arn,
    'ThingName': obj.thingName,
    'ThingArn': obj.thingArn,
    'LoRaWAN': toJson_IoTWirelessLoRaWanDevice(obj.loRaWan),
    'Sidewalk': toJson_IoTWirelessSidewalkDevice(obj.sidewalk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessDeviceStatisticsRequest
 */
export interface IoTWirelessGetWirelessDeviceStatisticsRequest {
  /**
   * @schema IoTWirelessGetWirelessDeviceStatisticsRequest#WirelessDeviceId
   */
  readonly wirelessDeviceId?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessDeviceStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessDeviceStatisticsRequest(obj: IoTWirelessGetWirelessDeviceStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessDeviceId': obj.wirelessDeviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessDeviceStatisticsResponse
 */
export interface IoTWirelessGetWirelessDeviceStatisticsResponse {
  /**
   * @schema IoTWirelessGetWirelessDeviceStatisticsResponse#WirelessDeviceId
   */
  readonly wirelessDeviceId?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceStatisticsResponse#LastUplinkReceivedAt
   */
  readonly lastUplinkReceivedAt?: string;

  /**
   * @schema IoTWirelessGetWirelessDeviceStatisticsResponse#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanDeviceMetadata;

  /**
   * @schema IoTWirelessGetWirelessDeviceStatisticsResponse#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkDeviceMetadata;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessDeviceStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessDeviceStatisticsResponse(obj: IoTWirelessGetWirelessDeviceStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessDeviceId': obj.wirelessDeviceId,
    'LastUplinkReceivedAt': obj.lastUplinkReceivedAt,
    'LoRaWAN': toJson_IoTWirelessLoRaWanDeviceMetadata(obj.loRaWan),
    'Sidewalk': toJson_IoTWirelessSidewalkDeviceMetadata(obj.sidewalk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayRequest
 */
export interface IoTWirelessGetWirelessGatewayRequest {
  /**
   * @schema IoTWirelessGetWirelessGatewayRequest#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayRequest#IdentifierType
   */
  readonly identifierType?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayRequest(obj: IoTWirelessGetWirelessGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Identifier': obj.identifier,
    'IdentifierType': obj.identifierType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayResponse
 */
export interface IoTWirelessGetWirelessGatewayResponse {
  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanGateway;

  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#ThingName
   */
  readonly thingName?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayResponse#ThingArn
   */
  readonly thingArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayResponse(obj: IoTWirelessGetWirelessGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Description': obj.description,
    'LoRaWAN': toJson_IoTWirelessLoRaWanGateway(obj.loRaWan),
    'Arn': obj.arn,
    'ThingName': obj.thingName,
    'ThingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayCertificateRequest
 */
export interface IoTWirelessGetWirelessGatewayCertificateRequest {
  /**
   * @schema IoTWirelessGetWirelessGatewayCertificateRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayCertificateRequest(obj: IoTWirelessGetWirelessGatewayCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayCertificateResponse
 */
export interface IoTWirelessGetWirelessGatewayCertificateResponse {
  /**
   * @schema IoTWirelessGetWirelessGatewayCertificateResponse#IotCertificateId
   */
  readonly iotCertificateId?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayCertificateResponse#LoRaWANNetworkServerCertificateId
   */
  readonly loRaWanNetworkServerCertificateId?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayCertificateResponse(obj: IoTWirelessGetWirelessGatewayCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IotCertificateId': obj.iotCertificateId,
    'LoRaWANNetworkServerCertificateId': obj.loRaWanNetworkServerCertificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayFirmwareInformationRequest
 */
export interface IoTWirelessGetWirelessGatewayFirmwareInformationRequest {
  /**
   * @schema IoTWirelessGetWirelessGatewayFirmwareInformationRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayFirmwareInformationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayFirmwareInformationRequest(obj: IoTWirelessGetWirelessGatewayFirmwareInformationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayFirmwareInformationResponse
 */
export interface IoTWirelessGetWirelessGatewayFirmwareInformationResponse {
  /**
   * @schema IoTWirelessGetWirelessGatewayFirmwareInformationResponse#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanGatewayCurrentVersion;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayFirmwareInformationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayFirmwareInformationResponse(obj: IoTWirelessGetWirelessGatewayFirmwareInformationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoRaWAN': toJson_IoTWirelessLoRaWanGatewayCurrentVersion(obj.loRaWan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayStatisticsRequest
 */
export interface IoTWirelessGetWirelessGatewayStatisticsRequest {
  /**
   * @schema IoTWirelessGetWirelessGatewayStatisticsRequest#WirelessGatewayId
   */
  readonly wirelessGatewayId?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayStatisticsRequest(obj: IoTWirelessGetWirelessGatewayStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessGatewayId': obj.wirelessGatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayStatisticsResponse
 */
export interface IoTWirelessGetWirelessGatewayStatisticsResponse {
  /**
   * @schema IoTWirelessGetWirelessGatewayStatisticsResponse#WirelessGatewayId
   */
  readonly wirelessGatewayId?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayStatisticsResponse#LastUplinkReceivedAt
   */
  readonly lastUplinkReceivedAt?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayStatisticsResponse#ConnectionStatus
   */
  readonly connectionStatus?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayStatisticsResponse(obj: IoTWirelessGetWirelessGatewayStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessGatewayId': obj.wirelessGatewayId,
    'LastUplinkReceivedAt': obj.lastUplinkReceivedAt,
    'ConnectionStatus': obj.connectionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayTaskRequest
 */
export interface IoTWirelessGetWirelessGatewayTaskRequest {
  /**
   * @schema IoTWirelessGetWirelessGatewayTaskRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayTaskRequest(obj: IoTWirelessGetWirelessGatewayTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayTaskResponse
 */
export interface IoTWirelessGetWirelessGatewayTaskResponse {
  /**
   * @schema IoTWirelessGetWirelessGatewayTaskResponse#WirelessGatewayId
   */
  readonly wirelessGatewayId?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskResponse#WirelessGatewayTaskDefinitionId
   */
  readonly wirelessGatewayTaskDefinitionId?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskResponse#LastUplinkReceivedAt
   */
  readonly lastUplinkReceivedAt?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskResponse#TaskCreatedAt
   */
  readonly taskCreatedAt?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayTaskResponse(obj: IoTWirelessGetWirelessGatewayTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WirelessGatewayId': obj.wirelessGatewayId,
    'WirelessGatewayTaskDefinitionId': obj.wirelessGatewayTaskDefinitionId,
    'LastUplinkReceivedAt': obj.lastUplinkReceivedAt,
    'TaskCreatedAt': obj.taskCreatedAt,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayTaskDefinitionRequest
 */
export interface IoTWirelessGetWirelessGatewayTaskDefinitionRequest {
  /**
   * @schema IoTWirelessGetWirelessGatewayTaskDefinitionRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayTaskDefinitionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayTaskDefinitionRequest(obj: IoTWirelessGetWirelessGatewayTaskDefinitionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessGetWirelessGatewayTaskDefinitionResponse
 */
export interface IoTWirelessGetWirelessGatewayTaskDefinitionResponse {
  /**
   * @schema IoTWirelessGetWirelessGatewayTaskDefinitionResponse#AutoCreateTasks
   */
  readonly autoCreateTasks?: boolean;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskDefinitionResponse#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskDefinitionResponse#Update
   */
  readonly update?: IoTWirelessUpdateWirelessGatewayTaskCreate;

  /**
   * @schema IoTWirelessGetWirelessGatewayTaskDefinitionResponse#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'IoTWirelessGetWirelessGatewayTaskDefinitionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessGetWirelessGatewayTaskDefinitionResponse(obj: IoTWirelessGetWirelessGatewayTaskDefinitionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoCreateTasks': obj.autoCreateTasks,
    'Name': obj.name,
    'Update': toJson_IoTWirelessUpdateWirelessGatewayTaskCreate(obj.update),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListDestinationsRequest
 */
export interface IoTWirelessListDestinationsRequest {
  /**
   * @schema IoTWirelessListDestinationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTWirelessListDestinationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTWirelessListDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListDestinationsRequest(obj: IoTWirelessListDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListDestinationsResponse
 */
export interface IoTWirelessListDestinationsResponse {
  /**
   * @schema IoTWirelessListDestinationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListDestinationsResponse#DestinationList
   */
  readonly destinationList?: IoTWirelessDestinations[];

}

/**
 * Converts an object of type 'IoTWirelessListDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListDestinationsResponse(obj: IoTWirelessListDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DestinationList': obj.destinationList?.map(y => toJson_IoTWirelessDestinations(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListDeviceProfilesRequest
 */
export interface IoTWirelessListDeviceProfilesRequest {
  /**
   * @schema IoTWirelessListDeviceProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListDeviceProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTWirelessListDeviceProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListDeviceProfilesRequest(obj: IoTWirelessListDeviceProfilesRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTWirelessListDeviceProfilesResponse
 */
export interface IoTWirelessListDeviceProfilesResponse {
  /**
   * @schema IoTWirelessListDeviceProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListDeviceProfilesResponse#DeviceProfileList
   */
  readonly deviceProfileList?: IoTWirelessDeviceProfile[];

}

/**
 * Converts an object of type 'IoTWirelessListDeviceProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListDeviceProfilesResponse(obj: IoTWirelessListDeviceProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'DeviceProfileList': obj.deviceProfileList?.map(y => toJson_IoTWirelessDeviceProfile(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListPartnerAccountsRequest
 */
export interface IoTWirelessListPartnerAccountsRequest {
  /**
   * @schema IoTWirelessListPartnerAccountsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListPartnerAccountsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTWirelessListPartnerAccountsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListPartnerAccountsRequest(obj: IoTWirelessListPartnerAccountsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTWirelessListPartnerAccountsResponse
 */
export interface IoTWirelessListPartnerAccountsResponse {
  /**
   * @schema IoTWirelessListPartnerAccountsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListPartnerAccountsResponse#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkAccountInfoWithFingerprint[];

}

/**
 * Converts an object of type 'IoTWirelessListPartnerAccountsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListPartnerAccountsResponse(obj: IoTWirelessListPartnerAccountsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Sidewalk': obj.sidewalk?.map(y => toJson_IoTWirelessSidewalkAccountInfoWithFingerprint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListServiceProfilesRequest
 */
export interface IoTWirelessListServiceProfilesRequest {
  /**
   * @schema IoTWirelessListServiceProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListServiceProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTWirelessListServiceProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListServiceProfilesRequest(obj: IoTWirelessListServiceProfilesRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTWirelessListServiceProfilesResponse
 */
export interface IoTWirelessListServiceProfilesResponse {
  /**
   * @schema IoTWirelessListServiceProfilesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListServiceProfilesResponse#ServiceProfileList
   */
  readonly serviceProfileList?: IoTWirelessServiceProfile[];

}

/**
 * Converts an object of type 'IoTWirelessListServiceProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListServiceProfilesResponse(obj: IoTWirelessListServiceProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'ServiceProfileList': obj.serviceProfileList?.map(y => toJson_IoTWirelessServiceProfile(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListTagsForResourceRequest
 */
export interface IoTWirelessListTagsForResourceRequest {
  /**
   * @schema IoTWirelessListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListTagsForResourceRequest(obj: IoTWirelessListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListTagsForResourceResponse
 */
export interface IoTWirelessListTagsForResourceResponse {
  /**
   * @schema IoTWirelessListTagsForResourceResponse#Tags
   */
  readonly tags?: IoTWirelessTag[];

}

/**
 * Converts an object of type 'IoTWirelessListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListTagsForResourceResponse(obj: IoTWirelessListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListWirelessDevicesRequest
 */
export interface IoTWirelessListWirelessDevicesRequest {
  /**
   * @schema IoTWirelessListWirelessDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTWirelessListWirelessDevicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListWirelessDevicesRequest#DestinationName
   */
  readonly destinationName?: string;

  /**
   * @schema IoTWirelessListWirelessDevicesRequest#DeviceProfileId
   */
  readonly deviceProfileId?: string;

  /**
   * @schema IoTWirelessListWirelessDevicesRequest#ServiceProfileId
   */
  readonly serviceProfileId?: string;

  /**
   * @schema IoTWirelessListWirelessDevicesRequest#WirelessDeviceType
   */
  readonly wirelessDeviceType?: string;

}

/**
 * Converts an object of type 'IoTWirelessListWirelessDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListWirelessDevicesRequest(obj: IoTWirelessListWirelessDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'DestinationName': obj.destinationName,
    'DeviceProfileId': obj.deviceProfileId,
    'ServiceProfileId': obj.serviceProfileId,
    'WirelessDeviceType': obj.wirelessDeviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListWirelessDevicesResponse
 */
export interface IoTWirelessListWirelessDevicesResponse {
  /**
   * @schema IoTWirelessListWirelessDevicesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListWirelessDevicesResponse#WirelessDeviceList
   */
  readonly wirelessDeviceList?: IoTWirelessWirelessDeviceStatistics[];

}

/**
 * Converts an object of type 'IoTWirelessListWirelessDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListWirelessDevicesResponse(obj: IoTWirelessListWirelessDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'WirelessDeviceList': obj.wirelessDeviceList?.map(y => toJson_IoTWirelessWirelessDeviceStatistics(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListWirelessGatewayTaskDefinitionsRequest
 */
export interface IoTWirelessListWirelessGatewayTaskDefinitionsRequest {
  /**
   * @schema IoTWirelessListWirelessGatewayTaskDefinitionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTWirelessListWirelessGatewayTaskDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListWirelessGatewayTaskDefinitionsRequest#TaskDefinitionType
   */
  readonly taskDefinitionType?: string;

}

/**
 * Converts an object of type 'IoTWirelessListWirelessGatewayTaskDefinitionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListWirelessGatewayTaskDefinitionsRequest(obj: IoTWirelessListWirelessGatewayTaskDefinitionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'TaskDefinitionType': obj.taskDefinitionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListWirelessGatewayTaskDefinitionsResponse
 */
export interface IoTWirelessListWirelessGatewayTaskDefinitionsResponse {
  /**
   * @schema IoTWirelessListWirelessGatewayTaskDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListWirelessGatewayTaskDefinitionsResponse#TaskDefinitions
   */
  readonly taskDefinitions?: IoTWirelessUpdateWirelessGatewayTaskEntry[];

}

/**
 * Converts an object of type 'IoTWirelessListWirelessGatewayTaskDefinitionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListWirelessGatewayTaskDefinitionsResponse(obj: IoTWirelessListWirelessGatewayTaskDefinitionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'TaskDefinitions': obj.taskDefinitions?.map(y => toJson_IoTWirelessUpdateWirelessGatewayTaskEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessListWirelessGatewaysRequest
 */
export interface IoTWirelessListWirelessGatewaysRequest {
  /**
   * @schema IoTWirelessListWirelessGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListWirelessGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTWirelessListWirelessGatewaysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListWirelessGatewaysRequest(obj: IoTWirelessListWirelessGatewaysRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTWirelessListWirelessGatewaysResponse
 */
export interface IoTWirelessListWirelessGatewaysResponse {
  /**
   * @schema IoTWirelessListWirelessGatewaysResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTWirelessListWirelessGatewaysResponse#WirelessGatewayList
   */
  readonly wirelessGatewayList?: IoTWirelessWirelessGatewayStatistics[];

}

/**
 * Converts an object of type 'IoTWirelessListWirelessGatewaysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessListWirelessGatewaysResponse(obj: IoTWirelessListWirelessGatewaysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'WirelessGatewayList': obj.wirelessGatewayList?.map(y => toJson_IoTWirelessWirelessGatewayStatistics(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessPutResourceLogLevelRequest
 */
export interface IoTWirelessPutResourceLogLevelRequest {
  /**
   * @schema IoTWirelessPutResourceLogLevelRequest#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema IoTWirelessPutResourceLogLevelRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema IoTWirelessPutResourceLogLevelRequest#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'IoTWirelessPutResourceLogLevelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessPutResourceLogLevelRequest(obj: IoTWirelessPutResourceLogLevelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'ResourceType': obj.resourceType,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessPutResourceLogLevelResponse
 */
export interface IoTWirelessPutResourceLogLevelResponse {
}

/**
 * Converts an object of type 'IoTWirelessPutResourceLogLevelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessPutResourceLogLevelResponse(obj: IoTWirelessPutResourceLogLevelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessResetAllResourceLogLevelsRequest
 */
export interface IoTWirelessResetAllResourceLogLevelsRequest {
}

/**
 * Converts an object of type 'IoTWirelessResetAllResourceLogLevelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessResetAllResourceLogLevelsRequest(obj: IoTWirelessResetAllResourceLogLevelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessResetAllResourceLogLevelsResponse
 */
export interface IoTWirelessResetAllResourceLogLevelsResponse {
}

/**
 * Converts an object of type 'IoTWirelessResetAllResourceLogLevelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessResetAllResourceLogLevelsResponse(obj: IoTWirelessResetAllResourceLogLevelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessResetResourceLogLevelRequest
 */
export interface IoTWirelessResetResourceLogLevelRequest {
  /**
   * @schema IoTWirelessResetResourceLogLevelRequest#ResourceIdentifier
   */
  readonly resourceIdentifier?: string;

  /**
   * @schema IoTWirelessResetResourceLogLevelRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'IoTWirelessResetResourceLogLevelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessResetResourceLogLevelRequest(obj: IoTWirelessResetResourceLogLevelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifier': obj.resourceIdentifier,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessResetResourceLogLevelResponse
 */
export interface IoTWirelessResetResourceLogLevelResponse {
}

/**
 * Converts an object of type 'IoTWirelessResetResourceLogLevelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessResetResourceLogLevelResponse(obj: IoTWirelessResetResourceLogLevelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSendDataToWirelessDeviceRequest
 */
export interface IoTWirelessSendDataToWirelessDeviceRequest {
  /**
   * @schema IoTWirelessSendDataToWirelessDeviceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessSendDataToWirelessDeviceRequest#TransmitMode
   */
  readonly transmitMode?: number;

  /**
   * @schema IoTWirelessSendDataToWirelessDeviceRequest#PayloadData
   */
  readonly payloadData?: string;

  /**
   * @schema IoTWirelessSendDataToWirelessDeviceRequest#WirelessMetadata
   */
  readonly wirelessMetadata?: IoTWirelessWirelessMetadata;

}

/**
 * Converts an object of type 'IoTWirelessSendDataToWirelessDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSendDataToWirelessDeviceRequest(obj: IoTWirelessSendDataToWirelessDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'TransmitMode': obj.transmitMode,
    'PayloadData': obj.payloadData,
    'WirelessMetadata': toJson_IoTWirelessWirelessMetadata(obj.wirelessMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSendDataToWirelessDeviceResponse
 */
export interface IoTWirelessSendDataToWirelessDeviceResponse {
  /**
   * @schema IoTWirelessSendDataToWirelessDeviceResponse#MessageId
   */
  readonly messageId?: string;

}

/**
 * Converts an object of type 'IoTWirelessSendDataToWirelessDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSendDataToWirelessDeviceResponse(obj: IoTWirelessSendDataToWirelessDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MessageId': obj.messageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessTagResourceRequest
 */
export interface IoTWirelessTagResourceRequest {
  /**
   * @schema IoTWirelessTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema IoTWirelessTagResourceRequest#Tags
   */
  readonly tags?: IoTWirelessTag[];

}

/**
 * Converts an object of type 'IoTWirelessTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessTagResourceRequest(obj: IoTWirelessTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_IoTWirelessTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessTagResourceResponse
 */
export interface IoTWirelessTagResourceResponse {
}

/**
 * Converts an object of type 'IoTWirelessTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessTagResourceResponse(obj: IoTWirelessTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessTestWirelessDeviceRequest
 */
export interface IoTWirelessTestWirelessDeviceRequest {
  /**
   * @schema IoTWirelessTestWirelessDeviceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessTestWirelessDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessTestWirelessDeviceRequest(obj: IoTWirelessTestWirelessDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessTestWirelessDeviceResponse
 */
export interface IoTWirelessTestWirelessDeviceResponse {
  /**
   * @schema IoTWirelessTestWirelessDeviceResponse#Result
   */
  readonly result?: string;

}

/**
 * Converts an object of type 'IoTWirelessTestWirelessDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessTestWirelessDeviceResponse(obj: IoTWirelessTestWirelessDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Result': obj.result,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUntagResourceRequest
 */
export interface IoTWirelessUntagResourceRequest {
  /**
   * @schema IoTWirelessUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema IoTWirelessUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'IoTWirelessUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUntagResourceRequest(obj: IoTWirelessUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUntagResourceResponse
 */
export interface IoTWirelessUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTWirelessUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUntagResourceResponse(obj: IoTWirelessUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateDestinationRequest
 */
export interface IoTWirelessUpdateDestinationRequest {
  /**
   * @schema IoTWirelessUpdateDestinationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessUpdateDestinationRequest#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema IoTWirelessUpdateDestinationRequest#Expression
   */
  readonly expression?: string;

  /**
   * @schema IoTWirelessUpdateDestinationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessUpdateDestinationRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessUpdateDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateDestinationRequest(obj: IoTWirelessUpdateDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ExpressionType': obj.expressionType,
    'Expression': obj.expression,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateDestinationResponse
 */
export interface IoTWirelessUpdateDestinationResponse {
}

/**
 * Converts an object of type 'IoTWirelessUpdateDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateDestinationResponse(obj: IoTWirelessUpdateDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateLogLevelsByResourceTypesRequest
 */
export interface IoTWirelessUpdateLogLevelsByResourceTypesRequest {
  /**
   * @schema IoTWirelessUpdateLogLevelsByResourceTypesRequest#DefaultLogLevel
   */
  readonly defaultLogLevel?: string;

  /**
   * @schema IoTWirelessUpdateLogLevelsByResourceTypesRequest#WirelessDeviceLogOptions
   */
  readonly wirelessDeviceLogOptions?: IoTWirelessWirelessDeviceLogOption[];

  /**
   * @schema IoTWirelessUpdateLogLevelsByResourceTypesRequest#WirelessGatewayLogOptions
   */
  readonly wirelessGatewayLogOptions?: IoTWirelessWirelessGatewayLogOption[];

}

/**
 * Converts an object of type 'IoTWirelessUpdateLogLevelsByResourceTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateLogLevelsByResourceTypesRequest(obj: IoTWirelessUpdateLogLevelsByResourceTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultLogLevel': obj.defaultLogLevel,
    'WirelessDeviceLogOptions': obj.wirelessDeviceLogOptions?.map(y => toJson_IoTWirelessWirelessDeviceLogOption(y)),
    'WirelessGatewayLogOptions': obj.wirelessGatewayLogOptions?.map(y => toJson_IoTWirelessWirelessGatewayLogOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateLogLevelsByResourceTypesResponse
 */
export interface IoTWirelessUpdateLogLevelsByResourceTypesResponse {
}

/**
 * Converts an object of type 'IoTWirelessUpdateLogLevelsByResourceTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateLogLevelsByResourceTypesResponse(obj: IoTWirelessUpdateLogLevelsByResourceTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdatePartnerAccountRequest
 */
export interface IoTWirelessUpdatePartnerAccountRequest {
  /**
   * @schema IoTWirelessUpdatePartnerAccountRequest#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkUpdateAccount;

  /**
   * @schema IoTWirelessUpdatePartnerAccountRequest#PartnerAccountId
   */
  readonly partnerAccountId?: string;

  /**
   * @schema IoTWirelessUpdatePartnerAccountRequest#PartnerType
   */
  readonly partnerType?: string;

}

/**
 * Converts an object of type 'IoTWirelessUpdatePartnerAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdatePartnerAccountRequest(obj: IoTWirelessUpdatePartnerAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sidewalk': toJson_IoTWirelessSidewalkUpdateAccount(obj.sidewalk),
    'PartnerAccountId': obj.partnerAccountId,
    'PartnerType': obj.partnerType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdatePartnerAccountResponse
 */
export interface IoTWirelessUpdatePartnerAccountResponse {
}

/**
 * Converts an object of type 'IoTWirelessUpdatePartnerAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdatePartnerAccountResponse(obj: IoTWirelessUpdatePartnerAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateWirelessDeviceRequest
 */
export interface IoTWirelessUpdateWirelessDeviceRequest {
  /**
   * @schema IoTWirelessUpdateWirelessDeviceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessUpdateWirelessDeviceRequest#DestinationName
   */
  readonly destinationName?: string;

  /**
   * @schema IoTWirelessUpdateWirelessDeviceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessUpdateWirelessDeviceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessUpdateWirelessDeviceRequest#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanUpdateDevice;

}

/**
 * Converts an object of type 'IoTWirelessUpdateWirelessDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateWirelessDeviceRequest(obj: IoTWirelessUpdateWirelessDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'DestinationName': obj.destinationName,
    'Name': obj.name,
    'Description': obj.description,
    'LoRaWAN': toJson_IoTWirelessLoRaWanUpdateDevice(obj.loRaWan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateWirelessDeviceResponse
 */
export interface IoTWirelessUpdateWirelessDeviceResponse {
}

/**
 * Converts an object of type 'IoTWirelessUpdateWirelessDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateWirelessDeviceResponse(obj: IoTWirelessUpdateWirelessDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateWirelessGatewayRequest
 */
export interface IoTWirelessUpdateWirelessGatewayRequest {
  /**
   * @schema IoTWirelessUpdateWirelessGatewayRequest#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayRequest#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayRequest#JoinEuiFilters
   */
  readonly joinEuiFilters?: string[][];

  /**
   * @schema IoTWirelessUpdateWirelessGatewayRequest#NetIdFilters
   */
  readonly netIdFilters?: string[];

}

/**
 * Converts an object of type 'IoTWirelessUpdateWirelessGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateWirelessGatewayRequest(obj: IoTWirelessUpdateWirelessGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'JoinEuiFilters': obj.joinEuiFilters?.map(y => y?.map(y => y)),
    'NetIdFilters': obj.netIdFilters?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateWirelessGatewayResponse
 */
export interface IoTWirelessUpdateWirelessGatewayResponse {
}

/**
 * Converts an object of type 'IoTWirelessUpdateWirelessGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateWirelessGatewayResponse(obj: IoTWirelessUpdateWirelessGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkAccountInfo
 */
export interface IoTWirelessSidewalkAccountInfo {
  /**
   * @schema IoTWirelessSidewalkAccountInfo#AmazonId
   */
  readonly amazonId?: string;

  /**
   * @schema IoTWirelessSidewalkAccountInfo#AppServerPrivateKey
   */
  readonly appServerPrivateKey?: string;

}

/**
 * Converts an object of type 'IoTWirelessSidewalkAccountInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkAccountInfo(obj: IoTWirelessSidewalkAccountInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmazonId': obj.amazonId,
    'AppServerPrivateKey': obj.appServerPrivateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessTag
 */
export interface IoTWirelessTag {
  /**
   * @schema IoTWirelessTag#Key
   */
  readonly key?: string;

  /**
   * @schema IoTWirelessTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'IoTWirelessTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessTag(obj: IoTWirelessTag | undefined): Record<string, any> | undefined {
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
 * @schema IoTWirelessLoRaWanDeviceProfile
 */
export interface IoTWirelessLoRaWanDeviceProfile {
  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#SupportsClassB
   */
  readonly supportsClassB?: boolean;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#ClassBTimeout
   */
  readonly classBTimeout?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#PingSlotPeriod
   */
  readonly pingSlotPeriod?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#PingSlotDr
   */
  readonly pingSlotDr?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#PingSlotFreq
   */
  readonly pingSlotFreq?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#SupportsClassC
   */
  readonly supportsClassC?: boolean;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#ClassCTimeout
   */
  readonly classCTimeout?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#MacVersion
   */
  readonly macVersion?: string;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#RegParamsRevision
   */
  readonly regParamsRevision?: string;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#RxDelay1
   */
  readonly rxDelay1?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#RxDrOffset1
   */
  readonly rxDrOffset1?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#RxDataRate2
   */
  readonly rxDataRate2?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#RxFreq2
   */
  readonly rxFreq2?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#FactoryPresetFreqsList
   */
  readonly factoryPresetFreqsList?: number[];

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#MaxEirp
   */
  readonly maxEirp?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#MaxDutyCycle
   */
  readonly maxDutyCycle?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#RfRegion
   */
  readonly rfRegion?: string;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#SupportsJoin
   */
  readonly supportsJoin?: boolean;

  /**
   * @schema IoTWirelessLoRaWanDeviceProfile#Supports32BitFCnt
   */
  readonly supports32BitFCnt?: boolean;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanDeviceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanDeviceProfile(obj: IoTWirelessLoRaWanDeviceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SupportsClassB': obj.supportsClassB,
    'ClassBTimeout': obj.classBTimeout,
    'PingSlotPeriod': obj.pingSlotPeriod,
    'PingSlotDr': obj.pingSlotDr,
    'PingSlotFreq': obj.pingSlotFreq,
    'SupportsClassC': obj.supportsClassC,
    'ClassCTimeout': obj.classCTimeout,
    'MacVersion': obj.macVersion,
    'RegParamsRevision': obj.regParamsRevision,
    'RxDelay1': obj.rxDelay1,
    'RxDrOffset1': obj.rxDrOffset1,
    'RxDataRate2': obj.rxDataRate2,
    'RxFreq2': obj.rxFreq2,
    'FactoryPresetFreqsList': obj.factoryPresetFreqsList?.map(y => y),
    'MaxEirp': obj.maxEirp,
    'MaxDutyCycle': obj.maxDutyCycle,
    'RfRegion': obj.rfRegion,
    'SupportsJoin': obj.supportsJoin,
    'Supports32BitFCnt': obj.supports32BitFCnt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanServiceProfile
 */
export interface IoTWirelessLoRaWanServiceProfile {
  /**
   * @schema IoTWirelessLoRaWanServiceProfile#AddGwMetadata
   */
  readonly addGwMetadata?: boolean;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanServiceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanServiceProfile(obj: IoTWirelessLoRaWanServiceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddGwMetadata': obj.addGwMetadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanDevice
 */
export interface IoTWirelessLoRaWanDevice {
  /**
   * @schema IoTWirelessLoRaWanDevice#DevEui
   */
  readonly devEui?: string;

  /**
   * @schema IoTWirelessLoRaWanDevice#DeviceProfileId
   */
  readonly deviceProfileId?: string;

  /**
   * @schema IoTWirelessLoRaWanDevice#ServiceProfileId
   */
  readonly serviceProfileId?: string;

  /**
   * @schema IoTWirelessLoRaWanDevice#OtaaV1_1
   */
  readonly otaaV11?: IoTWirelessOtaaV1_1;

  /**
   * @schema IoTWirelessLoRaWanDevice#OtaaV1_0_x
   */
  readonly otaaV10X?: IoTWirelessOtaaV1_0_x;

  /**
   * @schema IoTWirelessLoRaWanDevice#AbpV1_1
   */
  readonly abpV11?: IoTWirelessAbpV1_1;

  /**
   * @schema IoTWirelessLoRaWanDevice#AbpV1_0_x
   */
  readonly abpV10X?: IoTWirelessAbpV1_0_x;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanDevice(obj: IoTWirelessLoRaWanDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEui': obj.devEui,
    'DeviceProfileId': obj.deviceProfileId,
    'ServiceProfileId': obj.serviceProfileId,
    'OtaaV1_1': toJson_IoTWirelessOtaaV1_1(obj.otaaV11),
    'OtaaV1_0_x': toJson_IoTWirelessOtaaV1_0_x(obj.otaaV10X),
    'AbpV1_1': toJson_IoTWirelessAbpV1_1(obj.abpV11),
    'AbpV1_0_x': toJson_IoTWirelessAbpV1_0_x(obj.abpV10X),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanGateway
 */
export interface IoTWirelessLoRaWanGateway {
  /**
   * @schema IoTWirelessLoRaWanGateway#GatewayEui
   */
  readonly gatewayEui?: string;

  /**
   * @schema IoTWirelessLoRaWanGateway#RfRegion
   */
  readonly rfRegion?: string;

  /**
   * @schema IoTWirelessLoRaWanGateway#JoinEuiFilters
   */
  readonly joinEuiFilters?: string[][];

  /**
   * @schema IoTWirelessLoRaWanGateway#NetIdFilters
   */
  readonly netIdFilters?: string[];

  /**
   * @schema IoTWirelessLoRaWanGateway#SubBands
   */
  readonly subBands?: number[];

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanGateway' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanGateway(obj: IoTWirelessLoRaWanGateway | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayEui': obj.gatewayEui,
    'RfRegion': obj.rfRegion,
    'JoinEuiFilters': obj.joinEuiFilters?.map(y => y?.map(y => y)),
    'NetIdFilters': obj.netIdFilters?.map(y => y),
    'SubBands': obj.subBands?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateWirelessGatewayTaskCreate
 */
export interface IoTWirelessUpdateWirelessGatewayTaskCreate {
  /**
   * @schema IoTWirelessUpdateWirelessGatewayTaskCreate#UpdateDataSource
   */
  readonly updateDataSource?: string;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayTaskCreate#UpdateDataRole
   */
  readonly updateDataRole?: string;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayTaskCreate#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanUpdateGatewayTaskCreate;

}

/**
 * Converts an object of type 'IoTWirelessUpdateWirelessGatewayTaskCreate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateWirelessGatewayTaskCreate(obj: IoTWirelessUpdateWirelessGatewayTaskCreate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateDataSource': obj.updateDataSource,
    'UpdateDataRole': obj.updateDataRole,
    'LoRaWAN': toJson_IoTWirelessLoRaWanUpdateGatewayTaskCreate(obj.loRaWan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessGatewayLogOption
 */
export interface IoTWirelessWirelessGatewayLogOption {
  /**
   * @schema IoTWirelessWirelessGatewayLogOption#Type
   */
  readonly type?: string;

  /**
   * @schema IoTWirelessWirelessGatewayLogOption#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema IoTWirelessWirelessGatewayLogOption#Events
   */
  readonly events?: IoTWirelessWirelessGatewayEventLogOption[];

}

/**
 * Converts an object of type 'IoTWirelessWirelessGatewayLogOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessGatewayLogOption(obj: IoTWirelessWirelessGatewayLogOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'LogLevel': obj.logLevel,
    'Events': obj.events?.map(y => toJson_IoTWirelessWirelessGatewayEventLogOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessDeviceLogOption
 */
export interface IoTWirelessWirelessDeviceLogOption {
  /**
   * @schema IoTWirelessWirelessDeviceLogOption#Type
   */
  readonly type?: string;

  /**
   * @schema IoTWirelessWirelessDeviceLogOption#LogLevel
   */
  readonly logLevel?: string;

  /**
   * @schema IoTWirelessWirelessDeviceLogOption#Events
   */
  readonly events?: IoTWirelessWirelessDeviceEventLogOption[];

}

/**
 * Converts an object of type 'IoTWirelessWirelessDeviceLogOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessDeviceLogOption(obj: IoTWirelessWirelessDeviceLogOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'LogLevel': obj.logLevel,
    'Events': obj.events?.map(y => toJson_IoTWirelessWirelessDeviceEventLogOption(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkAccountInfoWithFingerprint
 */
export interface IoTWirelessSidewalkAccountInfoWithFingerprint {
  /**
   * @schema IoTWirelessSidewalkAccountInfoWithFingerprint#AmazonId
   */
  readonly amazonId?: string;

  /**
   * @schema IoTWirelessSidewalkAccountInfoWithFingerprint#Fingerprint
   */
  readonly fingerprint?: string;

  /**
   * @schema IoTWirelessSidewalkAccountInfoWithFingerprint#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'IoTWirelessSidewalkAccountInfoWithFingerprint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkAccountInfoWithFingerprint(obj: IoTWirelessSidewalkAccountInfoWithFingerprint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmazonId': obj.amazonId,
    'Fingerprint': obj.fingerprint,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanGetServiceProfileInfo
 */
export interface IoTWirelessLoRaWanGetServiceProfileInfo {
  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#UlRate
   */
  readonly ulRate?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#UlBucketSize
   */
  readonly ulBucketSize?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#UlRatePolicy
   */
  readonly ulRatePolicy?: string;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#DlRate
   */
  readonly dlRate?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#DlBucketSize
   */
  readonly dlBucketSize?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#DlRatePolicy
   */
  readonly dlRatePolicy?: string;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#AddGwMetadata
   */
  readonly addGwMetadata?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#DevStatusReqFreq
   */
  readonly devStatusReqFreq?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#ReportDevStatusBattery
   */
  readonly reportDevStatusBattery?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#ReportDevStatusMargin
   */
  readonly reportDevStatusMargin?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#DrMin
   */
  readonly drMin?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#DrMax
   */
  readonly drMax?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#ChannelMask
   */
  readonly channelMask?: string;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#PrAllowed
   */
  readonly prAllowed?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#HrAllowed
   */
  readonly hrAllowed?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#RaAllowed
   */
  readonly raAllowed?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#NwkGeoLoc
   */
  readonly nwkGeoLoc?: boolean;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#TargetPer
   */
  readonly targetPer?: number;

  /**
   * @schema IoTWirelessLoRaWanGetServiceProfileInfo#MinGwDiversity
   */
  readonly minGwDiversity?: number;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanGetServiceProfileInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanGetServiceProfileInfo(obj: IoTWirelessLoRaWanGetServiceProfileInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UlRate': obj.ulRate,
    'UlBucketSize': obj.ulBucketSize,
    'UlRatePolicy': obj.ulRatePolicy,
    'DlRate': obj.dlRate,
    'DlBucketSize': obj.dlBucketSize,
    'DlRatePolicy': obj.dlRatePolicy,
    'AddGwMetadata': obj.addGwMetadata,
    'DevStatusReqFreq': obj.devStatusReqFreq,
    'ReportDevStatusBattery': obj.reportDevStatusBattery,
    'ReportDevStatusMargin': obj.reportDevStatusMargin,
    'DrMin': obj.drMin,
    'DrMax': obj.drMax,
    'ChannelMask': obj.channelMask,
    'PrAllowed': obj.prAllowed,
    'HrAllowed': obj.hrAllowed,
    'RaAllowed': obj.raAllowed,
    'NwkGeoLoc': obj.nwkGeoLoc,
    'TargetPer': obj.targetPer,
    'MinGwDiversity': obj.minGwDiversity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkDevice
 */
export interface IoTWirelessSidewalkDevice {
  /**
   * @schema IoTWirelessSidewalkDevice#AmazonId
   */
  readonly amazonId?: string;

  /**
   * @schema IoTWirelessSidewalkDevice#SidewalkId
   */
  readonly sidewalkId?: string;

  /**
   * @schema IoTWirelessSidewalkDevice#SidewalkManufacturingSn
   */
  readonly sidewalkManufacturingSn?: string;

  /**
   * @schema IoTWirelessSidewalkDevice#DeviceCertificates
   */
  readonly deviceCertificates?: IoTWirelessCertificateList[];

}

/**
 * Converts an object of type 'IoTWirelessSidewalkDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkDevice(obj: IoTWirelessSidewalkDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmazonId': obj.amazonId,
    'SidewalkId': obj.sidewalkId,
    'SidewalkManufacturingSn': obj.sidewalkManufacturingSn,
    'DeviceCertificates': obj.deviceCertificates?.map(y => toJson_IoTWirelessCertificateList(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanDeviceMetadata
 */
export interface IoTWirelessLoRaWanDeviceMetadata {
  /**
   * @schema IoTWirelessLoRaWanDeviceMetadata#DevEui
   */
  readonly devEui?: string;

  /**
   * @schema IoTWirelessLoRaWanDeviceMetadata#FPort
   */
  readonly fPort?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceMetadata#DataRate
   */
  readonly dataRate?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceMetadata#Frequency
   */
  readonly frequency?: number;

  /**
   * @schema IoTWirelessLoRaWanDeviceMetadata#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema IoTWirelessLoRaWanDeviceMetadata#Gateways
   */
  readonly gateways?: IoTWirelessLoRaWanGatewayMetadata[];

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanDeviceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanDeviceMetadata(obj: IoTWirelessLoRaWanDeviceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEui': obj.devEui,
    'FPort': obj.fPort,
    'DataRate': obj.dataRate,
    'Frequency': obj.frequency,
    'Timestamp': obj.timestamp,
    'Gateways': obj.gateways?.map(y => toJson_IoTWirelessLoRaWanGatewayMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkDeviceMetadata
 */
export interface IoTWirelessSidewalkDeviceMetadata {
  /**
   * @schema IoTWirelessSidewalkDeviceMetadata#Rssi
   */
  readonly rssi?: number;

  /**
   * @schema IoTWirelessSidewalkDeviceMetadata#BatteryLevel
   */
  readonly batteryLevel?: string;

  /**
   * @schema IoTWirelessSidewalkDeviceMetadata#Event
   */
  readonly event?: string;

  /**
   * @schema IoTWirelessSidewalkDeviceMetadata#DeviceState
   */
  readonly deviceState?: string;

}

/**
 * Converts an object of type 'IoTWirelessSidewalkDeviceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkDeviceMetadata(obj: IoTWirelessSidewalkDeviceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rssi': obj.rssi,
    'BatteryLevel': obj.batteryLevel,
    'Event': obj.event,
    'DeviceState': obj.deviceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanGatewayCurrentVersion
 */
export interface IoTWirelessLoRaWanGatewayCurrentVersion {
  /**
   * @schema IoTWirelessLoRaWanGatewayCurrentVersion#CurrentVersion
   */
  readonly currentVersion?: IoTWirelessLoRaWanGatewayVersion;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanGatewayCurrentVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanGatewayCurrentVersion(obj: IoTWirelessLoRaWanGatewayCurrentVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CurrentVersion': toJson_IoTWirelessLoRaWanGatewayVersion(obj.currentVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDestinations
 */
export interface IoTWirelessDestinations {
  /**
   * @schema IoTWirelessDestinations#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessDestinations#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessDestinations#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema IoTWirelessDestinations#Expression
   */
  readonly expression?: string;

  /**
   * @schema IoTWirelessDestinations#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessDestinations#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IoTWirelessDestinations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDestinations(obj: IoTWirelessDestinations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'ExpressionType': obj.expressionType,
    'Expression': obj.expression,
    'Description': obj.description,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessDeviceProfile
 */
export interface IoTWirelessDeviceProfile {
  /**
   * @schema IoTWirelessDeviceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessDeviceProfile#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessDeviceProfile#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessDeviceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessDeviceProfile(obj: IoTWirelessDeviceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessServiceProfile
 */
export interface IoTWirelessServiceProfile {
  /**
   * @schema IoTWirelessServiceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessServiceProfile#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessServiceProfile#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'IoTWirelessServiceProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessServiceProfile(obj: IoTWirelessServiceProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessDeviceStatistics
 */
export interface IoTWirelessWirelessDeviceStatistics {
  /**
   * @schema IoTWirelessWirelessDeviceStatistics#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#Type
   */
  readonly type?: string;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#DestinationName
   */
  readonly destinationName?: string;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#LastUplinkReceivedAt
   */
  readonly lastUplinkReceivedAt?: string;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanListDevice;

  /**
   * @schema IoTWirelessWirelessDeviceStatistics#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkListDevice;

}

/**
 * Converts an object of type 'IoTWirelessWirelessDeviceStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessDeviceStatistics(obj: IoTWirelessWirelessDeviceStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
    'Type': obj.type,
    'Name': obj.name,
    'DestinationName': obj.destinationName,
    'LastUplinkReceivedAt': obj.lastUplinkReceivedAt,
    'LoRaWAN': toJson_IoTWirelessLoRaWanListDevice(obj.loRaWan),
    'Sidewalk': toJson_IoTWirelessSidewalkListDevice(obj.sidewalk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessUpdateWirelessGatewayTaskEntry
 */
export interface IoTWirelessUpdateWirelessGatewayTaskEntry {
  /**
   * @schema IoTWirelessUpdateWirelessGatewayTaskEntry#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayTaskEntry#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanUpdateGatewayTaskEntry;

  /**
   * @schema IoTWirelessUpdateWirelessGatewayTaskEntry#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'IoTWirelessUpdateWirelessGatewayTaskEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessUpdateWirelessGatewayTaskEntry(obj: IoTWirelessUpdateWirelessGatewayTaskEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LoRaWAN': toJson_IoTWirelessLoRaWanUpdateGatewayTaskEntry(obj.loRaWan),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessGatewayStatistics
 */
export interface IoTWirelessWirelessGatewayStatistics {
  /**
   * @schema IoTWirelessWirelessGatewayStatistics#Arn
   */
  readonly arn?: string;

  /**
   * @schema IoTWirelessWirelessGatewayStatistics#Id
   */
  readonly id?: string;

  /**
   * @schema IoTWirelessWirelessGatewayStatistics#Name
   */
  readonly name?: string;

  /**
   * @schema IoTWirelessWirelessGatewayStatistics#Description
   */
  readonly description?: string;

  /**
   * @schema IoTWirelessWirelessGatewayStatistics#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanGateway;

  /**
   * @schema IoTWirelessWirelessGatewayStatistics#LastUplinkReceivedAt
   */
  readonly lastUplinkReceivedAt?: string;

}

/**
 * Converts an object of type 'IoTWirelessWirelessGatewayStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessGatewayStatistics(obj: IoTWirelessWirelessGatewayStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'LoRaWAN': toJson_IoTWirelessLoRaWanGateway(obj.loRaWan),
    'LastUplinkReceivedAt': obj.lastUplinkReceivedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessMetadata
 */
export interface IoTWirelessWirelessMetadata {
  /**
   * @schema IoTWirelessWirelessMetadata#LoRaWAN
   */
  readonly loRaWan?: IoTWirelessLoRaWanSendDataToDevice;

  /**
   * @schema IoTWirelessWirelessMetadata#Sidewalk
   */
  readonly sidewalk?: IoTWirelessSidewalkSendDataToDevice;

}

/**
 * Converts an object of type 'IoTWirelessWirelessMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessMetadata(obj: IoTWirelessWirelessMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoRaWAN': toJson_IoTWirelessLoRaWanSendDataToDevice(obj.loRaWan),
    'Sidewalk': toJson_IoTWirelessSidewalkSendDataToDevice(obj.sidewalk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkUpdateAccount
 */
export interface IoTWirelessSidewalkUpdateAccount {
  /**
   * @schema IoTWirelessSidewalkUpdateAccount#AppServerPrivateKey
   */
  readonly appServerPrivateKey?: string;

}

/**
 * Converts an object of type 'IoTWirelessSidewalkUpdateAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkUpdateAccount(obj: IoTWirelessSidewalkUpdateAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppServerPrivateKey': obj.appServerPrivateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanUpdateDevice
 */
export interface IoTWirelessLoRaWanUpdateDevice {
  /**
   * @schema IoTWirelessLoRaWanUpdateDevice#DeviceProfileId
   */
  readonly deviceProfileId?: string;

  /**
   * @schema IoTWirelessLoRaWanUpdateDevice#ServiceProfileId
   */
  readonly serviceProfileId?: string;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanUpdateDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanUpdateDevice(obj: IoTWirelessLoRaWanUpdateDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceProfileId': obj.deviceProfileId,
    'ServiceProfileId': obj.serviceProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessOtaaV1_1
 */
export interface IoTWirelessOtaaV1_1 {
  /**
   * @schema IoTWirelessOtaaV1_1#AppKey
   */
  readonly appKey?: string;

  /**
   * @schema IoTWirelessOtaaV1_1#NwkKey
   */
  readonly nwkKey?: string;

  /**
   * @schema IoTWirelessOtaaV1_1#JoinEui
   */
  readonly joinEui?: string;

}

/**
 * Converts an object of type 'IoTWirelessOtaaV1_1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessOtaaV1_1(obj: IoTWirelessOtaaV1_1 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppKey': obj.appKey,
    'NwkKey': obj.nwkKey,
    'JoinEui': obj.joinEui,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessOtaaV1_0_x
 */
export interface IoTWirelessOtaaV1_0_x {
  /**
   * @schema IoTWirelessOtaaV1_0_x#AppKey
   */
  readonly appKey?: string;

  /**
   * @schema IoTWirelessOtaaV1_0_x#AppEui
   */
  readonly appEui?: string;

}

/**
 * Converts an object of type 'IoTWirelessOtaaV1_0_x' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessOtaaV1_0_x(obj: IoTWirelessOtaaV1_0_x | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppKey': obj.appKey,
    'AppEui': obj.appEui,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAbpV1_1
 */
export interface IoTWirelessAbpV1_1 {
  /**
   * @schema IoTWirelessAbpV1_1#DevAddr
   */
  readonly devAddr?: string;

  /**
   * @schema IoTWirelessAbpV1_1#SessionKeys
   */
  readonly sessionKeys?: IoTWirelessSessionKeysAbpV1_1;

}

/**
 * Converts an object of type 'IoTWirelessAbpV1_1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAbpV1_1(obj: IoTWirelessAbpV1_1 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevAddr': obj.devAddr,
    'SessionKeys': toJson_IoTWirelessSessionKeysAbpV1_1(obj.sessionKeys),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessAbpV1_0_x
 */
export interface IoTWirelessAbpV1_0_x {
  /**
   * @schema IoTWirelessAbpV1_0_x#DevAddr
   */
  readonly devAddr?: string;

  /**
   * @schema IoTWirelessAbpV1_0_x#SessionKeys
   */
  readonly sessionKeys?: IoTWirelessSessionKeysAbpV1_0_x;

}

/**
 * Converts an object of type 'IoTWirelessAbpV1_0_x' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessAbpV1_0_x(obj: IoTWirelessAbpV1_0_x | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevAddr': obj.devAddr,
    'SessionKeys': toJson_IoTWirelessSessionKeysAbpV1_0_x(obj.sessionKeys),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanUpdateGatewayTaskCreate
 */
export interface IoTWirelessLoRaWanUpdateGatewayTaskCreate {
  /**
   * @schema IoTWirelessLoRaWanUpdateGatewayTaskCreate#UpdateSignature
   */
  readonly updateSignature?: string;

  /**
   * @schema IoTWirelessLoRaWanUpdateGatewayTaskCreate#SigKeyCrc
   */
  readonly sigKeyCrc?: number;

  /**
   * @schema IoTWirelessLoRaWanUpdateGatewayTaskCreate#CurrentVersion
   */
  readonly currentVersion?: IoTWirelessLoRaWanGatewayVersion;

  /**
   * @schema IoTWirelessLoRaWanUpdateGatewayTaskCreate#UpdateVersion
   */
  readonly updateVersion?: IoTWirelessLoRaWanGatewayVersion;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanUpdateGatewayTaskCreate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanUpdateGatewayTaskCreate(obj: IoTWirelessLoRaWanUpdateGatewayTaskCreate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpdateSignature': obj.updateSignature,
    'SigKeyCrc': obj.sigKeyCrc,
    'CurrentVersion': toJson_IoTWirelessLoRaWanGatewayVersion(obj.currentVersion),
    'UpdateVersion': toJson_IoTWirelessLoRaWanGatewayVersion(obj.updateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessGatewayEventLogOption
 */
export interface IoTWirelessWirelessGatewayEventLogOption {
  /**
   * @schema IoTWirelessWirelessGatewayEventLogOption#Event
   */
  readonly event?: string;

  /**
   * @schema IoTWirelessWirelessGatewayEventLogOption#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'IoTWirelessWirelessGatewayEventLogOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessGatewayEventLogOption(obj: IoTWirelessWirelessGatewayEventLogOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Event': obj.event,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessWirelessDeviceEventLogOption
 */
export interface IoTWirelessWirelessDeviceEventLogOption {
  /**
   * @schema IoTWirelessWirelessDeviceEventLogOption#Event
   */
  readonly event?: string;

  /**
   * @schema IoTWirelessWirelessDeviceEventLogOption#LogLevel
   */
  readonly logLevel?: string;

}

/**
 * Converts an object of type 'IoTWirelessWirelessDeviceEventLogOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessWirelessDeviceEventLogOption(obj: IoTWirelessWirelessDeviceEventLogOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Event': obj.event,
    'LogLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessCertificateList
 */
export interface IoTWirelessCertificateList {
  /**
   * @schema IoTWirelessCertificateList#SigningAlg
   */
  readonly signingAlg?: string;

  /**
   * @schema IoTWirelessCertificateList#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'IoTWirelessCertificateList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessCertificateList(obj: IoTWirelessCertificateList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SigningAlg': obj.signingAlg,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanGatewayMetadata
 */
export interface IoTWirelessLoRaWanGatewayMetadata {
  /**
   * @schema IoTWirelessLoRaWanGatewayMetadata#GatewayEui
   */
  readonly gatewayEui?: string;

  /**
   * @schema IoTWirelessLoRaWanGatewayMetadata#Snr
   */
  readonly snr?: number;

  /**
   * @schema IoTWirelessLoRaWanGatewayMetadata#Rssi
   */
  readonly rssi?: number;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanGatewayMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanGatewayMetadata(obj: IoTWirelessLoRaWanGatewayMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayEui': obj.gatewayEui,
    'Snr': obj.snr,
    'Rssi': obj.rssi,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanGatewayVersion
 */
export interface IoTWirelessLoRaWanGatewayVersion {
  /**
   * @schema IoTWirelessLoRaWanGatewayVersion#PackageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema IoTWirelessLoRaWanGatewayVersion#Model
   */
  readonly model?: string;

  /**
   * @schema IoTWirelessLoRaWanGatewayVersion#Station
   */
  readonly station?: string;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanGatewayVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanGatewayVersion(obj: IoTWirelessLoRaWanGatewayVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PackageVersion': obj.packageVersion,
    'Model': obj.model,
    'Station': obj.station,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanListDevice
 */
export interface IoTWirelessLoRaWanListDevice {
  /**
   * @schema IoTWirelessLoRaWanListDevice#DevEui
   */
  readonly devEui?: string;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanListDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanListDevice(obj: IoTWirelessLoRaWanListDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevEui': obj.devEui,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkListDevice
 */
export interface IoTWirelessSidewalkListDevice {
  /**
   * @schema IoTWirelessSidewalkListDevice#AmazonId
   */
  readonly amazonId?: string;

  /**
   * @schema IoTWirelessSidewalkListDevice#SidewalkId
   */
  readonly sidewalkId?: string;

  /**
   * @schema IoTWirelessSidewalkListDevice#SidewalkManufacturingSn
   */
  readonly sidewalkManufacturingSn?: string;

  /**
   * @schema IoTWirelessSidewalkListDevice#DeviceCertificates
   */
  readonly deviceCertificates?: IoTWirelessCertificateList[];

}

/**
 * Converts an object of type 'IoTWirelessSidewalkListDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkListDevice(obj: IoTWirelessSidewalkListDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmazonId': obj.amazonId,
    'SidewalkId': obj.sidewalkId,
    'SidewalkManufacturingSn': obj.sidewalkManufacturingSn,
    'DeviceCertificates': obj.deviceCertificates?.map(y => toJson_IoTWirelessCertificateList(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanUpdateGatewayTaskEntry
 */
export interface IoTWirelessLoRaWanUpdateGatewayTaskEntry {
  /**
   * @schema IoTWirelessLoRaWanUpdateGatewayTaskEntry#CurrentVersion
   */
  readonly currentVersion?: IoTWirelessLoRaWanGatewayVersion;

  /**
   * @schema IoTWirelessLoRaWanUpdateGatewayTaskEntry#UpdateVersion
   */
  readonly updateVersion?: IoTWirelessLoRaWanGatewayVersion;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanUpdateGatewayTaskEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanUpdateGatewayTaskEntry(obj: IoTWirelessLoRaWanUpdateGatewayTaskEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CurrentVersion': toJson_IoTWirelessLoRaWanGatewayVersion(obj.currentVersion),
    'UpdateVersion': toJson_IoTWirelessLoRaWanGatewayVersion(obj.updateVersion),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessLoRaWanSendDataToDevice
 */
export interface IoTWirelessLoRaWanSendDataToDevice {
  /**
   * @schema IoTWirelessLoRaWanSendDataToDevice#FPort
   */
  readonly fPort?: number;

}

/**
 * Converts an object of type 'IoTWirelessLoRaWanSendDataToDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessLoRaWanSendDataToDevice(obj: IoTWirelessLoRaWanSendDataToDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FPort': obj.fPort,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSidewalkSendDataToDevice
 */
export interface IoTWirelessSidewalkSendDataToDevice {
  /**
   * @schema IoTWirelessSidewalkSendDataToDevice#Seq
   */
  readonly seq?: number;

  /**
   * @schema IoTWirelessSidewalkSendDataToDevice#MessageType
   */
  readonly messageType?: string;

}

/**
 * Converts an object of type 'IoTWirelessSidewalkSendDataToDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSidewalkSendDataToDevice(obj: IoTWirelessSidewalkSendDataToDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Seq': obj.seq,
    'MessageType': obj.messageType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSessionKeysAbpV1_1
 */
export interface IoTWirelessSessionKeysAbpV1_1 {
  /**
   * @schema IoTWirelessSessionKeysAbpV1_1#FNwkSIntKey
   */
  readonly fNwkSIntKey?: string;

  /**
   * @schema IoTWirelessSessionKeysAbpV1_1#SNwkSIntKey
   */
  readonly sNwkSIntKey?: string;

  /**
   * @schema IoTWirelessSessionKeysAbpV1_1#NwkSEncKey
   */
  readonly nwkSEncKey?: string;

  /**
   * @schema IoTWirelessSessionKeysAbpV1_1#AppSKey
   */
  readonly appSKey?: string;

}

/**
 * Converts an object of type 'IoTWirelessSessionKeysAbpV1_1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSessionKeysAbpV1_1(obj: IoTWirelessSessionKeysAbpV1_1 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FNwkSIntKey': obj.fNwkSIntKey,
    'SNwkSIntKey': obj.sNwkSIntKey,
    'NwkSEncKey': obj.nwkSEncKey,
    'AppSKey': obj.appSKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTWirelessSessionKeysAbpV1_0_x
 */
export interface IoTWirelessSessionKeysAbpV1_0_x {
  /**
   * @schema IoTWirelessSessionKeysAbpV1_0_x#NwkSKey
   */
  readonly nwkSKey?: string;

  /**
   * @schema IoTWirelessSessionKeysAbpV1_0_x#AppSKey
   */
  readonly appSKey?: string;

}

/**
 * Converts an object of type 'IoTWirelessSessionKeysAbpV1_0_x' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTWirelessSessionKeysAbpV1_0_x(obj: IoTWirelessSessionKeysAbpV1_0_x | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NwkSKey': obj.nwkSKey,
    'AppSKey': obj.appSKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
