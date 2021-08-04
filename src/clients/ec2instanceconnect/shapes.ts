/**
 * @schema Ec2InstanceConnectSendSshPublicKeyRequest
 */
export interface Ec2InstanceConnectSendSshPublicKeyRequest {
  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#InstanceOSUser
   */
  readonly instanceOsUser: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#SSHPublicKey
   */
  readonly sshPublicKey: string;

  /**
   * @schema Ec2InstanceConnectSendSshPublicKeyRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

}

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
