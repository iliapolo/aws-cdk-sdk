/**
 * @schema Ec2InstanceConnectSendSshPublicKeyRequest
 */
export interface Ec2InstanceConnectSendSshPublicKeyRequest {
  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#InstanceOSUser
   */
  readonly instanceOsUser?: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#SSHPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

}

/**
 * Converts an object of type 'Ec2InstanceConnectSendSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ec2InstanceConnectSendSshPublicKeyRequest(obj: Ec2InstanceConnectSendSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'InstanceOSUser': obj.instanceOsUser,
    'SSHPublicKey': obj.sshPublicKey,
    'AvailabilityZone': obj.availabilityZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Ec2InstanceConnectSendSshPublicKeyResponse
 */
export interface Ec2InstanceConnectSendSshPublicKeyResponse {
  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyResponse#Success
   */
  readonly success?: boolean;

}

/**
 * Converts an object of type 'Ec2InstanceConnectSendSshPublicKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ec2InstanceConnectSendSshPublicKeyResponse(obj: Ec2InstanceConnectSendSshPublicKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Success': obj.success,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest
 */
export interface Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest {
  /**
   * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest#SerialPort
   */
  readonly serialPort?: number;

  /**
   * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest#SSHPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * Converts an object of type 'Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest(obj: Ec2InstanceConnectSendSerialConsoleSshPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'SerialPort': obj.serialPort,
    'SSHPublicKey': obj.sshPublicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse
 */
export interface Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse {
  /**
   * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse#Success
   */
  readonly success?: boolean;

}

/**
 * Converts an object of type 'Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse(obj: Ec2InstanceConnectSendSerialConsoleSshPublicKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Success': obj.success,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
