/**
 * @schema SendSshPublicKeyRequest
 */
export interface SendSshPublicKeyRequest {
  /**
   * @schema SendSshPublicKeyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SendSshPublicKeyRequest#InstanceOSUser
   */
  readonly instanceOsUser: string;

  /**
   * @schema SendSshPublicKeyRequest#SSHPublicKey
   */
  readonly sshPublicKey: string;

  /**
   * @schema SendSshPublicKeyRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

}

/**
 * @schema SendSshPublicKeyResponse
 */
export interface SendSshPublicKeyResponse {
  /**
   * @schema SendSshPublicKeyResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SendSshPublicKeyResponse#Success
   */
  readonly success?: boolean;

}
