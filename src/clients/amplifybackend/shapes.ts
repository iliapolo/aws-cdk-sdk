/**
 * @schema AmplifyBackendCloneBackendRequest
 */
export interface AmplifyBackendCloneBackendRequest {
  /**
   * @schema AmplifyBackendCloneBackendRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCloneBackendRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCloneBackendRequest#TargetEnvironmentName
   */
  readonly targetEnvironmentName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCloneBackendRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCloneBackendRequest(obj: AmplifyBackendCloneBackendRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'TargetEnvironmentName': obj.targetEnvironmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCloneBackendResponse
 */
export interface AmplifyBackendCloneBackendResponse {
  /**
   * @schema AmplifyBackendCloneBackendResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCloneBackendResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCloneBackendResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendCloneBackendResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendCloneBackendResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendCloneBackendResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCloneBackendResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCloneBackendResponse(obj: AmplifyBackendCloneBackendResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendRequest
 */
export interface AmplifyBackendCreateBackendRequest {
  /**
   * @schema AmplifyBackendCreateBackendRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendRequest#AppName
   */
  readonly appName?: string;

  /**
   * @schema AmplifyBackendCreateBackendRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendResourceConfig;

  /**
   * @schema AmplifyBackendCreateBackendRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendRequest(obj: AmplifyBackendCreateBackendRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'AppName': obj.appName,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendResponse
 */
export interface AmplifyBackendCreateBackendResponse {
  /**
   * @schema AmplifyBackendCreateBackendResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendCreateBackendResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendCreateBackendResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendCreateBackendResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendResponse(obj: AmplifyBackendCreateBackendResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendApiRequest
 */
export interface AmplifyBackendCreateBackendApiRequest {
  /**
   * @schema AmplifyBackendCreateBackendApiRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendBackendApiResourceConfig;

  /**
   * @schema AmplifyBackendCreateBackendApiRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendApiRequest(obj: AmplifyBackendCreateBackendApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendBackendApiResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendApiResponse
 */
export interface AmplifyBackendCreateBackendApiResponse {
  /**
   * @schema AmplifyBackendCreateBackendApiResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendCreateBackendApiResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendApiResponse(obj: AmplifyBackendCreateBackendApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthRequest
 */
export interface AmplifyBackendCreateBackendAuthRequest {
  /**
   * @schema AmplifyBackendCreateBackendAuthRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendCreateBackendAuthResourceConfig;

  /**
   * @schema AmplifyBackendCreateBackendAuthRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthRequest(obj: AmplifyBackendCreateBackendAuthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendCreateBackendAuthResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthResponse
 */
export interface AmplifyBackendCreateBackendAuthResponse {
  /**
   * @schema AmplifyBackendCreateBackendAuthResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthResponse(obj: AmplifyBackendCreateBackendAuthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendConfigRequest
 */
export interface AmplifyBackendCreateBackendConfigRequest {
  /**
   * @schema AmplifyBackendCreateBackendConfigRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendConfigRequest#BackendManagerAppId
   */
  readonly backendManagerAppId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendConfigRequest(obj: AmplifyBackendCreateBackendConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendManagerAppId': obj.backendManagerAppId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendConfigResponse
 */
export interface AmplifyBackendCreateBackendConfigResponse {
  /**
   * @schema AmplifyBackendCreateBackendConfigResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateBackendConfigResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendCreateBackendConfigResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendCreateBackendConfigResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendConfigResponse(obj: AmplifyBackendCreateBackendConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'JobId': obj.jobId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateTokenRequest
 */
export interface AmplifyBackendCreateTokenRequest {
  /**
   * @schema AmplifyBackendCreateTokenRequest#AppId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateTokenRequest(obj: AmplifyBackendCreateTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateTokenResponse
 */
export interface AmplifyBackendCreateTokenResponse {
  /**
   * @schema AmplifyBackendCreateTokenResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendCreateTokenResponse#ChallengeCode
   */
  readonly challengeCode?: string;

  /**
   * @schema AmplifyBackendCreateTokenResponse#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema AmplifyBackendCreateTokenResponse#Ttl
   */
  readonly ttl?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateTokenResponse(obj: AmplifyBackendCreateTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'ChallengeCode': obj.challengeCode,
    'SessionId': obj.sessionId,
    'Ttl': obj.ttl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteBackendRequest
 */
export interface AmplifyBackendDeleteBackendRequest {
  /**
   * @schema AmplifyBackendDeleteBackendRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteBackendRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteBackendRequest(obj: AmplifyBackendDeleteBackendRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteBackendResponse
 */
export interface AmplifyBackendDeleteBackendResponse {
  /**
   * @schema AmplifyBackendDeleteBackendResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendDeleteBackendResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendDeleteBackendResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendDeleteBackendResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteBackendResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteBackendResponse(obj: AmplifyBackendDeleteBackendResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteBackendApiRequest
 */
export interface AmplifyBackendDeleteBackendApiRequest {
  /**
   * @schema AmplifyBackendDeleteBackendApiRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendBackendApiResourceConfig;

  /**
   * @schema AmplifyBackendDeleteBackendApiRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteBackendApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteBackendApiRequest(obj: AmplifyBackendDeleteBackendApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendBackendApiResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteBackendApiResponse
 */
export interface AmplifyBackendDeleteBackendApiResponse {
  /**
   * @schema AmplifyBackendDeleteBackendApiResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendDeleteBackendApiResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteBackendApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteBackendApiResponse(obj: AmplifyBackendDeleteBackendApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteBackendAuthRequest
 */
export interface AmplifyBackendDeleteBackendAuthRequest {
  /**
   * @schema AmplifyBackendDeleteBackendAuthRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteBackendAuthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteBackendAuthRequest(obj: AmplifyBackendDeleteBackendAuthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteBackendAuthResponse
 */
export interface AmplifyBackendDeleteBackendAuthResponse {
  /**
   * @schema AmplifyBackendDeleteBackendAuthResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendDeleteBackendAuthResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteBackendAuthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteBackendAuthResponse(obj: AmplifyBackendDeleteBackendAuthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteTokenRequest
 */
export interface AmplifyBackendDeleteTokenRequest {
  /**
   * @schema AmplifyBackendDeleteTokenRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendDeleteTokenRequest#SessionId
   */
  readonly sessionId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteTokenRequest(obj: AmplifyBackendDeleteTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'SessionId': obj.sessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendDeleteTokenResponse
 */
export interface AmplifyBackendDeleteTokenResponse {
  /**
   * @schema AmplifyBackendDeleteTokenResponse#IsSuccess
   */
  readonly isSuccess?: boolean;

}

/**
 * Converts an object of type 'AmplifyBackendDeleteTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendDeleteTokenResponse(obj: AmplifyBackendDeleteTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsSuccess': obj.isSuccess,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGenerateBackendApiModelsRequest
 */
export interface AmplifyBackendGenerateBackendApiModelsRequest {
  /**
   * @schema AmplifyBackendGenerateBackendApiModelsRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGenerateBackendApiModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGenerateBackendApiModelsRequest(obj: AmplifyBackendGenerateBackendApiModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGenerateBackendApiModelsResponse
 */
export interface AmplifyBackendGenerateBackendApiModelsResponse {
  /**
   * @schema AmplifyBackendGenerateBackendApiModelsResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendGenerateBackendApiModelsResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGenerateBackendApiModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGenerateBackendApiModelsResponse(obj: AmplifyBackendGenerateBackendApiModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendRequest
 */
export interface AmplifyBackendGetBackendRequest {
  /**
   * @schema AmplifyBackendGetBackendRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendRequest(obj: AmplifyBackendGetBackendRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendResponse
 */
export interface AmplifyBackendGetBackendResponse {
  /**
   * @schema AmplifyBackendGetBackendResponse#AmplifyMetaConfig
   */
  readonly amplifyMetaConfig?: string;

  /**
   * @schema AmplifyBackendGetBackendResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendResponse#AppName
   */
  readonly appName?: string;

  /**
   * @schema AmplifyBackendGetBackendResponse#BackendEnvironmentList
   */
  readonly backendEnvironmentList?: string[];

  /**
   * @schema AmplifyBackendGetBackendResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendResponse#Error
   */
  readonly error?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendResponse(obj: AmplifyBackendGetBackendResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmplifyMetaConfig': obj.amplifyMetaConfig,
    'AppId': obj.appId,
    'AppName': obj.appName,
    'BackendEnvironmentList': obj.backendEnvironmentList?.map(y => y),
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendApiRequest
 */
export interface AmplifyBackendGetBackendApiRequest {
  /**
   * @schema AmplifyBackendGetBackendApiRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendApiRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendApiRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendBackendApiResourceConfig;

  /**
   * @schema AmplifyBackendGetBackendApiRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendApiRequest(obj: AmplifyBackendGetBackendApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendBackendApiResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendApiResponse
 */
export interface AmplifyBackendGetBackendApiResponse {
  /**
   * @schema AmplifyBackendGetBackendApiResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendApiResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendApiResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendGetBackendApiResponse#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendBackendApiResourceConfig;

  /**
   * @schema AmplifyBackendGetBackendApiResponse#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendApiResponse(obj: AmplifyBackendGetBackendApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'ResourceConfig': toJson_AmplifyBackendBackendApiResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendApiModelsRequest
 */
export interface AmplifyBackendGetBackendApiModelsRequest {
  /**
   * @schema AmplifyBackendGetBackendApiModelsRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendApiModelsRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendApiModelsRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendApiModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendApiModelsRequest(obj: AmplifyBackendGetBackendApiModelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendApiModelsResponse
 */
export interface AmplifyBackendGetBackendApiModelsResponse {
  /**
   * @schema AmplifyBackendGetBackendApiModelsResponse#Models
   */
  readonly models?: string;

  /**
   * @schema AmplifyBackendGetBackendApiModelsResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendApiModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendApiModelsResponse(obj: AmplifyBackendGetBackendApiModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Models': obj.models,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendAuthRequest
 */
export interface AmplifyBackendGetBackendAuthRequest {
  /**
   * @schema AmplifyBackendGetBackendAuthRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendAuthRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendAuthRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendAuthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendAuthRequest(obj: AmplifyBackendGetBackendAuthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendAuthResponse
 */
export interface AmplifyBackendGetBackendAuthResponse {
  /**
   * @schema AmplifyBackendGetBackendAuthResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendAuthResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendAuthResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendGetBackendAuthResponse#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendCreateBackendAuthResourceConfig;

  /**
   * @schema AmplifyBackendGetBackendAuthResponse#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendAuthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendAuthResponse(obj: AmplifyBackendGetBackendAuthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'ResourceConfig': toJson_AmplifyBackendCreateBackendAuthResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendJobRequest
 */
export interface AmplifyBackendGetBackendJobRequest {
  /**
   * @schema AmplifyBackendGetBackendJobRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendJobRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendJobRequest(obj: AmplifyBackendGetBackendJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetBackendJobResponse
 */
export interface AmplifyBackendGetBackendJobResponse {
  /**
   * @schema AmplifyBackendGetBackendJobResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#Status
   */
  readonly status?: string;

  /**
   * @schema AmplifyBackendGetBackendJobResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetBackendJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetBackendJobResponse(obj: AmplifyBackendGetBackendJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'CreateTime': obj.createTime,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetTokenRequest
 */
export interface AmplifyBackendGetTokenRequest {
  /**
   * @schema AmplifyBackendGetTokenRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetTokenRequest#SessionId
   */
  readonly sessionId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetTokenRequest(obj: AmplifyBackendGetTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'SessionId': obj.sessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendGetTokenResponse
 */
export interface AmplifyBackendGetTokenResponse {
  /**
   * @schema AmplifyBackendGetTokenResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendGetTokenResponse#ChallengeCode
   */
  readonly challengeCode?: string;

  /**
   * @schema AmplifyBackendGetTokenResponse#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema AmplifyBackendGetTokenResponse#Ttl
   */
  readonly ttl?: string;

}

/**
 * Converts an object of type 'AmplifyBackendGetTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendGetTokenResponse(obj: AmplifyBackendGetTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'ChallengeCode': obj.challengeCode,
    'SessionId': obj.sessionId,
    'Ttl': obj.ttl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendImportBackendAuthRequest
 */
export interface AmplifyBackendImportBackendAuthRequest {
  /**
   * @schema AmplifyBackendImportBackendAuthRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthRequest#IdentityPoolId
   */
  readonly identityPoolId?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthRequest#NativeClientId
   */
  readonly nativeClientId?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthRequest#UserPoolId
   */
  readonly userPoolId?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthRequest#WebClientId
   */
  readonly webClientId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendImportBackendAuthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendImportBackendAuthRequest(obj: AmplifyBackendImportBackendAuthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'IdentityPoolId': obj.identityPoolId,
    'NativeClientId': obj.nativeClientId,
    'UserPoolId': obj.userPoolId,
    'WebClientId': obj.webClientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendImportBackendAuthResponse
 */
export interface AmplifyBackendImportBackendAuthResponse {
  /**
   * @schema AmplifyBackendImportBackendAuthResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendImportBackendAuthResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendImportBackendAuthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendImportBackendAuthResponse(obj: AmplifyBackendImportBackendAuthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendListBackendJobsRequest
 */
export interface AmplifyBackendListBackendJobsRequest {
  /**
   * @schema AmplifyBackendListBackendJobsRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendListBackendJobsRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendListBackendJobsRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendListBackendJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AmplifyBackendListBackendJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AmplifyBackendListBackendJobsRequest#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendListBackendJobsRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendListBackendJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendListBackendJobsRequest(obj: AmplifyBackendListBackendJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendListBackendJobsResponse
 */
export interface AmplifyBackendListBackendJobsResponse {
  /**
   * @schema AmplifyBackendListBackendJobsResponse#Jobs
   */
  readonly jobs?: AmplifyBackendBackendJobRespObj[];

  /**
   * @schema AmplifyBackendListBackendJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AmplifyBackendListBackendJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendListBackendJobsResponse(obj: AmplifyBackendListBackendJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Jobs': obj.jobs?.map(y => toJson_AmplifyBackendBackendJobRespObj(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendRemoveAllBackendsRequest
 */
export interface AmplifyBackendRemoveAllBackendsRequest {
  /**
   * @schema AmplifyBackendRemoveAllBackendsRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendRemoveAllBackendsRequest#CleanAmplifyApp
   */
  readonly cleanAmplifyApp?: boolean;

}

/**
 * Converts an object of type 'AmplifyBackendRemoveAllBackendsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendRemoveAllBackendsRequest(obj: AmplifyBackendRemoveAllBackendsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'CleanAmplifyApp': obj.cleanAmplifyApp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendRemoveAllBackendsResponse
 */
export interface AmplifyBackendRemoveAllBackendsResponse {
  /**
   * @schema AmplifyBackendRemoveAllBackendsResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendRemoveAllBackendsResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendRemoveAllBackendsResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendRemoveAllBackendsResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendRemoveAllBackendsResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendRemoveAllBackendsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendRemoveAllBackendsResponse(obj: AmplifyBackendRemoveAllBackendsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendRemoveBackendConfigRequest
 */
export interface AmplifyBackendRemoveBackendConfigRequest {
  /**
   * @schema AmplifyBackendRemoveBackendConfigRequest#AppId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendRemoveBackendConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendRemoveBackendConfigRequest(obj: AmplifyBackendRemoveBackendConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendRemoveBackendConfigResponse
 */
export interface AmplifyBackendRemoveBackendConfigResponse {
  /**
   * @schema AmplifyBackendRemoveBackendConfigResponse#Error
   */
  readonly error?: string;

}

/**
 * Converts an object of type 'AmplifyBackendRemoveBackendConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendRemoveBackendConfigResponse(obj: AmplifyBackendRemoveBackendConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Error': obj.error,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendApiRequest
 */
export interface AmplifyBackendUpdateBackendApiRequest {
  /**
   * @schema AmplifyBackendUpdateBackendApiRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendBackendApiResourceConfig;

  /**
   * @schema AmplifyBackendUpdateBackendApiRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendApiRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendApiRequest(obj: AmplifyBackendUpdateBackendApiRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendBackendApiResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendApiResponse
 */
export interface AmplifyBackendUpdateBackendApiResponse {
  /**
   * @schema AmplifyBackendUpdateBackendApiResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendUpdateBackendApiResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendApiResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendApiResponse(obj: AmplifyBackendUpdateBackendApiResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthRequest
 */
export interface AmplifyBackendUpdateBackendAuthRequest {
  /**
   * @schema AmplifyBackendUpdateBackendAuthRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthRequest#ResourceConfig
   */
  readonly resourceConfig?: AmplifyBackendUpdateBackendAuthResourceConfig;

  /**
   * @schema AmplifyBackendUpdateBackendAuthRequest#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthRequest(obj: AmplifyBackendUpdateBackendAuthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'ResourceConfig': toJson_AmplifyBackendUpdateBackendAuthResourceConfig(obj.resourceConfig),
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthResponse
 */
export interface AmplifyBackendUpdateBackendAuthResponse {
  /**
   * @schema AmplifyBackendUpdateBackendAuthResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthResponse(obj: AmplifyBackendUpdateBackendAuthResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendConfigRequest
 */
export interface AmplifyBackendUpdateBackendConfigRequest {
  /**
   * @schema AmplifyBackendUpdateBackendConfigRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendConfigRequest#LoginAuthConfig
   */
  readonly loginAuthConfig?: AmplifyBackendLoginAuthConfigReqObj;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendConfigRequest(obj: AmplifyBackendUpdateBackendConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'LoginAuthConfig': toJson_AmplifyBackendLoginAuthConfigReqObj(obj.loginAuthConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendConfigResponse
 */
export interface AmplifyBackendUpdateBackendConfigResponse {
  /**
   * @schema AmplifyBackendUpdateBackendConfigResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendConfigResponse#BackendManagerAppId
   */
  readonly backendManagerAppId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendConfigResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendUpdateBackendConfigResponse#LoginAuthConfig
   */
  readonly loginAuthConfig?: AmplifyBackendLoginAuthConfigReqObj;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendConfigResponse(obj: AmplifyBackendUpdateBackendConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendManagerAppId': obj.backendManagerAppId,
    'Error': obj.error,
    'LoginAuthConfig': toJson_AmplifyBackendLoginAuthConfigReqObj(obj.loginAuthConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendJobRequest
 */
export interface AmplifyBackendUpdateBackendJobRequest {
  /**
   * @schema AmplifyBackendUpdateBackendJobRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobRequest#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobRequest#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobRequest#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendJobRequest(obj: AmplifyBackendUpdateBackendJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendJobResponse
 */
export interface AmplifyBackendUpdateBackendJobResponse {
  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#Status
   */
  readonly status?: string;

  /**
   * @schema AmplifyBackendUpdateBackendJobResponse#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendJobResponse(obj: AmplifyBackendUpdateBackendJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'CreateTime': obj.createTime,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendResourceConfig
 */
export interface AmplifyBackendResourceConfig {
}

/**
 * Converts an object of type 'AmplifyBackendResourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendResourceConfig(obj: AmplifyBackendResourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendApiResourceConfig
 */
export interface AmplifyBackendBackendApiResourceConfig {
  /**
   * @schema AmplifyBackendBackendApiResourceConfig#AdditionalAuthTypes
   */
  readonly additionalAuthTypes?: AmplifyBackendBackendApiAuthType[];

  /**
   * @schema AmplifyBackendBackendApiResourceConfig#ApiName
   */
  readonly apiName?: string;

  /**
   * @schema AmplifyBackendBackendApiResourceConfig#ConflictResolution
   */
  readonly conflictResolution?: AmplifyBackendBackendApiConflictResolution;

  /**
   * @schema AmplifyBackendBackendApiResourceConfig#DefaultAuthType
   */
  readonly defaultAuthType?: AmplifyBackendBackendApiAuthType;

  /**
   * @schema AmplifyBackendBackendApiResourceConfig#Service
   */
  readonly service?: string;

  /**
   * @schema AmplifyBackendBackendApiResourceConfig#TransformSchema
   */
  readonly transformSchema?: string;

}

/**
 * Converts an object of type 'AmplifyBackendBackendApiResourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendApiResourceConfig(obj: AmplifyBackendBackendApiResourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalAuthTypes': obj.additionalAuthTypes?.map(y => toJson_AmplifyBackendBackendApiAuthType(y)),
    'ApiName': obj.apiName,
    'ConflictResolution': toJson_AmplifyBackendBackendApiConflictResolution(obj.conflictResolution),
    'DefaultAuthType': toJson_AmplifyBackendBackendApiAuthType(obj.defaultAuthType),
    'Service': obj.service,
    'TransformSchema': obj.transformSchema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthResourceConfig
 */
export interface AmplifyBackendCreateBackendAuthResourceConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthResourceConfig#AuthResources
   */
  readonly authResources?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResourceConfig#IdentityPoolConfigs
   */
  readonly identityPoolConfigs?: AmplifyBackendCreateBackendAuthIdentityPoolConfig;

  /**
   * @schema AmplifyBackendCreateBackendAuthResourceConfig#Service
   */
  readonly service?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthResourceConfig#UserPoolConfigs
   */
  readonly userPoolConfigs?: AmplifyBackendCreateBackendAuthUserPoolConfig;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthResourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthResourceConfig(obj: AmplifyBackendCreateBackendAuthResourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthResources': obj.authResources,
    'IdentityPoolConfigs': toJson_AmplifyBackendCreateBackendAuthIdentityPoolConfig(obj.identityPoolConfigs),
    'Service': obj.service,
    'UserPoolConfigs': toJson_AmplifyBackendCreateBackendAuthUserPoolConfig(obj.userPoolConfigs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendJobRespObj
 */
export interface AmplifyBackendBackendJobRespObj {
  /**
   * @schema AmplifyBackendBackendJobRespObj#AppId
   */
  readonly appId?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#BackendEnvironmentName
   */
  readonly backendEnvironmentName?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#Error
   */
  readonly error?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#JobId
   */
  readonly jobId?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#Operation
   */
  readonly operation?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#Status
   */
  readonly status?: string;

  /**
   * @schema AmplifyBackendBackendJobRespObj#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * Converts an object of type 'AmplifyBackendBackendJobRespObj' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendJobRespObj(obj: AmplifyBackendBackendJobRespObj | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'BackendEnvironmentName': obj.backendEnvironmentName,
    'CreateTime': obj.createTime,
    'Error': obj.error,
    'JobId': obj.jobId,
    'Operation': obj.operation,
    'Status': obj.status,
    'UpdateTime': obj.updateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthResourceConfig
 */
export interface AmplifyBackendUpdateBackendAuthResourceConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthResourceConfig#AuthResources
   */
  readonly authResources?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResourceConfig#IdentityPoolConfigs
   */
  readonly identityPoolConfigs?: AmplifyBackendUpdateBackendAuthIdentityPoolConfig;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResourceConfig#Service
   */
  readonly service?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthResourceConfig#UserPoolConfigs
   */
  readonly userPoolConfigs?: AmplifyBackendUpdateBackendAuthUserPoolConfig;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthResourceConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthResourceConfig(obj: AmplifyBackendUpdateBackendAuthResourceConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthResources': obj.authResources,
    'IdentityPoolConfigs': toJson_AmplifyBackendUpdateBackendAuthIdentityPoolConfig(obj.identityPoolConfigs),
    'Service': obj.service,
    'UserPoolConfigs': toJson_AmplifyBackendUpdateBackendAuthUserPoolConfig(obj.userPoolConfigs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendLoginAuthConfigReqObj
 */
export interface AmplifyBackendLoginAuthConfigReqObj {
  /**
   * @schema AmplifyBackendLoginAuthConfigReqObj#AwsCognitoIdentityPoolId
   */
  readonly awsCognitoIdentityPoolId?: string;

  /**
   * @schema AmplifyBackendLoginAuthConfigReqObj#AwsCognitoRegion
   */
  readonly awsCognitoRegion?: string;

  /**
   * @schema AmplifyBackendLoginAuthConfigReqObj#AwsUserPoolsId
   */
  readonly awsUserPoolsId?: string;

  /**
   * @schema AmplifyBackendLoginAuthConfigReqObj#AwsUserPoolsWebClientId
   */
  readonly awsUserPoolsWebClientId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendLoginAuthConfigReqObj' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendLoginAuthConfigReqObj(obj: AmplifyBackendLoginAuthConfigReqObj | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsCognitoIdentityPoolId': obj.awsCognitoIdentityPoolId,
    'AwsCognitoRegion': obj.awsCognitoRegion,
    'AwsUserPoolsId': obj.awsUserPoolsId,
    'AwsUserPoolsWebClientId': obj.awsUserPoolsWebClientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendApiAuthType
 */
export interface AmplifyBackendBackendApiAuthType {
  /**
   * @schema AmplifyBackendBackendApiAuthType#Mode
   */
  readonly mode?: string;

  /**
   * @schema AmplifyBackendBackendApiAuthType#Settings
   */
  readonly settings?: AmplifyBackendBackendApiAppSyncAuthSettings;

}

/**
 * Converts an object of type 'AmplifyBackendBackendApiAuthType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendApiAuthType(obj: AmplifyBackendBackendApiAuthType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
    'Settings': toJson_AmplifyBackendBackendApiAppSyncAuthSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendApiConflictResolution
 */
export interface AmplifyBackendBackendApiConflictResolution {
  /**
   * @schema AmplifyBackendBackendApiConflictResolution#ResolutionStrategy
   */
  readonly resolutionStrategy?: string;

}

/**
 * Converts an object of type 'AmplifyBackendBackendApiConflictResolution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendApiConflictResolution(obj: AmplifyBackendBackendApiConflictResolution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResolutionStrategy': obj.resolutionStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthIdentityPoolConfig
 */
export interface AmplifyBackendCreateBackendAuthIdentityPoolConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthIdentityPoolConfig#IdentityPoolName
   */
  readonly identityPoolName?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthIdentityPoolConfig#UnauthenticatedLogin
   */
  readonly unauthenticatedLogin?: boolean;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthIdentityPoolConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthIdentityPoolConfig(obj: AmplifyBackendCreateBackendAuthIdentityPoolConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityPoolName': obj.identityPoolName,
    'UnauthenticatedLogin': obj.unauthenticatedLogin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthUserPoolConfig
 */
export interface AmplifyBackendCreateBackendAuthUserPoolConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#ForgotPassword
   */
  readonly forgotPassword?: AmplifyBackendCreateBackendAuthForgotPasswordConfig;

  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#Mfa
   */
  readonly mfa?: AmplifyBackendCreateBackendAuthMfaConfig;

  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#OAuth
   */
  readonly oAuth?: AmplifyBackendCreateBackendAuthOAuthConfig;

  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#PasswordPolicy
   */
  readonly passwordPolicy?: AmplifyBackendCreateBackendAuthPasswordPolicyConfig;

  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#RequiredSignUpAttributes
   */
  readonly requiredSignUpAttributes?: string[];

  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#SignInMethod
   */
  readonly signInMethod?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthUserPoolConfig#UserPoolName
   */
  readonly userPoolName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthUserPoolConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthUserPoolConfig(obj: AmplifyBackendCreateBackendAuthUserPoolConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ForgotPassword': toJson_AmplifyBackendCreateBackendAuthForgotPasswordConfig(obj.forgotPassword),
    'Mfa': toJson_AmplifyBackendCreateBackendAuthMfaConfig(obj.mfa),
    'OAuth': toJson_AmplifyBackendCreateBackendAuthOAuthConfig(obj.oAuth),
    'PasswordPolicy': toJson_AmplifyBackendCreateBackendAuthPasswordPolicyConfig(obj.passwordPolicy),
    'RequiredSignUpAttributes': obj.requiredSignUpAttributes?.map(y => y),
    'SignInMethod': obj.signInMethod,
    'UserPoolName': obj.userPoolName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthIdentityPoolConfig
 */
export interface AmplifyBackendUpdateBackendAuthIdentityPoolConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthIdentityPoolConfig#UnauthenticatedLogin
   */
  readonly unauthenticatedLogin?: boolean;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthIdentityPoolConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthIdentityPoolConfig(obj: AmplifyBackendUpdateBackendAuthIdentityPoolConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UnauthenticatedLogin': obj.unauthenticatedLogin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthUserPoolConfig
 */
export interface AmplifyBackendUpdateBackendAuthUserPoolConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthUserPoolConfig#ForgotPassword
   */
  readonly forgotPassword?: AmplifyBackendUpdateBackendAuthForgotPasswordConfig;

  /**
   * @schema AmplifyBackendUpdateBackendAuthUserPoolConfig#Mfa
   */
  readonly mfa?: AmplifyBackendUpdateBackendAuthMfaConfig;

  /**
   * @schema AmplifyBackendUpdateBackendAuthUserPoolConfig#OAuth
   */
  readonly oAuth?: AmplifyBackendUpdateBackendAuthOAuthConfig;

  /**
   * @schema AmplifyBackendUpdateBackendAuthUserPoolConfig#PasswordPolicy
   */
  readonly passwordPolicy?: AmplifyBackendUpdateBackendAuthPasswordPolicyConfig;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthUserPoolConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthUserPoolConfig(obj: AmplifyBackendUpdateBackendAuthUserPoolConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ForgotPassword': toJson_AmplifyBackendUpdateBackendAuthForgotPasswordConfig(obj.forgotPassword),
    'Mfa': toJson_AmplifyBackendUpdateBackendAuthMfaConfig(obj.mfa),
    'OAuth': toJson_AmplifyBackendUpdateBackendAuthOAuthConfig(obj.oAuth),
    'PasswordPolicy': toJson_AmplifyBackendUpdateBackendAuthPasswordPolicyConfig(obj.passwordPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendApiAppSyncAuthSettings
 */
export interface AmplifyBackendBackendApiAppSyncAuthSettings {
  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#CognitoUserPoolId
   */
  readonly cognitoUserPoolId?: string;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#Description
   */
  readonly description?: string;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#ExpirationTime
   */
  readonly expirationTime?: number;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#OpenIDAuthTTL
   */
  readonly openIdAuthTtl?: string;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#OpenIDClientId
   */
  readonly openIdClientId?: string;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#OpenIDIatTTL
   */
  readonly openIdIatTtl?: string;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#OpenIDIssueURL
   */
  readonly openIdIssueUrl?: string;

  /**
   * @schema AmplifyBackendBackendApiAppSyncAuthSettings#OpenIDProviderName
   */
  readonly openIdProviderName?: string;

}

/**
 * Converts an object of type 'AmplifyBackendBackendApiAppSyncAuthSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendApiAppSyncAuthSettings(obj: AmplifyBackendBackendApiAppSyncAuthSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CognitoUserPoolId': obj.cognitoUserPoolId,
    'Description': obj.description,
    'ExpirationTime': obj.expirationTime,
    'OpenIDAuthTTL': obj.openIdAuthTtl,
    'OpenIDClientId': obj.openIdClientId,
    'OpenIDIatTTL': obj.openIdIatTtl,
    'OpenIDIssueURL': obj.openIdIssueUrl,
    'OpenIDProviderName': obj.openIdProviderName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthForgotPasswordConfig
 */
export interface AmplifyBackendCreateBackendAuthForgotPasswordConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthForgotPasswordConfig#DeliveryMethod
   */
  readonly deliveryMethod?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthForgotPasswordConfig#EmailSettings
   */
  readonly emailSettings?: AmplifyBackendEmailSettings;

  /**
   * @schema AmplifyBackendCreateBackendAuthForgotPasswordConfig#SmsSettings
   */
  readonly smsSettings?: AmplifyBackendSmsSettings;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthForgotPasswordConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthForgotPasswordConfig(obj: AmplifyBackendCreateBackendAuthForgotPasswordConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryMethod': obj.deliveryMethod,
    'EmailSettings': toJson_AmplifyBackendEmailSettings(obj.emailSettings),
    'SmsSettings': toJson_AmplifyBackendSmsSettings(obj.smsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthMfaConfig
 */
export interface AmplifyBackendCreateBackendAuthMfaConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthMfaConfig#MFAMode
   */
  readonly mfaMode?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthMfaConfig#Settings
   */
  readonly settings?: AmplifyBackendSettings;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthMfaConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthMfaConfig(obj: AmplifyBackendCreateBackendAuthMfaConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MFAMode': obj.mfaMode,
    'Settings': toJson_AmplifyBackendSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthOAuthConfig
 */
export interface AmplifyBackendCreateBackendAuthOAuthConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthOAuthConfig#DomainPrefix
   */
  readonly domainPrefix?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthOAuthConfig#OAuthGrantType
   */
  readonly oAuthGrantType?: string;

  /**
   * @schema AmplifyBackendCreateBackendAuthOAuthConfig#OAuthScopes
   */
  readonly oAuthScopes?: string[];

  /**
   * @schema AmplifyBackendCreateBackendAuthOAuthConfig#RedirectSignInURIs
   */
  readonly redirectSignInUrIs?: string[];

  /**
   * @schema AmplifyBackendCreateBackendAuthOAuthConfig#RedirectSignOutURIs
   */
  readonly redirectSignOutUrIs?: string[];

  /**
   * @schema AmplifyBackendCreateBackendAuthOAuthConfig#SocialProviderSettings
   */
  readonly socialProviderSettings?: AmplifyBackendSocialProviderSettings;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthOAuthConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthOAuthConfig(obj: AmplifyBackendCreateBackendAuthOAuthConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainPrefix': obj.domainPrefix,
    'OAuthGrantType': obj.oAuthGrantType,
    'OAuthScopes': obj.oAuthScopes?.map(y => y),
    'RedirectSignInURIs': obj.redirectSignInUrIs?.map(y => y),
    'RedirectSignOutURIs': obj.redirectSignOutUrIs?.map(y => y),
    'SocialProviderSettings': toJson_AmplifyBackendSocialProviderSettings(obj.socialProviderSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendCreateBackendAuthPasswordPolicyConfig
 */
export interface AmplifyBackendCreateBackendAuthPasswordPolicyConfig {
  /**
   * @schema AmplifyBackendCreateBackendAuthPasswordPolicyConfig#AdditionalConstraints
   */
  readonly additionalConstraints?: string[];

  /**
   * @schema AmplifyBackendCreateBackendAuthPasswordPolicyConfig#MinimumLength
   */
  readonly minimumLength?: number;

}

/**
 * Converts an object of type 'AmplifyBackendCreateBackendAuthPasswordPolicyConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendCreateBackendAuthPasswordPolicyConfig(obj: AmplifyBackendCreateBackendAuthPasswordPolicyConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalConstraints': obj.additionalConstraints?.map(y => y),
    'MinimumLength': obj.minimumLength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthForgotPasswordConfig
 */
export interface AmplifyBackendUpdateBackendAuthForgotPasswordConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthForgotPasswordConfig#DeliveryMethod
   */
  readonly deliveryMethod?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthForgotPasswordConfig#EmailSettings
   */
  readonly emailSettings?: AmplifyBackendEmailSettings;

  /**
   * @schema AmplifyBackendUpdateBackendAuthForgotPasswordConfig#SmsSettings
   */
  readonly smsSettings?: AmplifyBackendSmsSettings;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthForgotPasswordConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthForgotPasswordConfig(obj: AmplifyBackendUpdateBackendAuthForgotPasswordConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryMethod': obj.deliveryMethod,
    'EmailSettings': toJson_AmplifyBackendEmailSettings(obj.emailSettings),
    'SmsSettings': toJson_AmplifyBackendSmsSettings(obj.smsSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthMfaConfig
 */
export interface AmplifyBackendUpdateBackendAuthMfaConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthMfaConfig#MFAMode
   */
  readonly mfaMode?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthMfaConfig#Settings
   */
  readonly settings?: AmplifyBackendSettings;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthMfaConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthMfaConfig(obj: AmplifyBackendUpdateBackendAuthMfaConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MFAMode': obj.mfaMode,
    'Settings': toJson_AmplifyBackendSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthOAuthConfig
 */
export interface AmplifyBackendUpdateBackendAuthOAuthConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthOAuthConfig#DomainPrefix
   */
  readonly domainPrefix?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthOAuthConfig#OAuthGrantType
   */
  readonly oAuthGrantType?: string;

  /**
   * @schema AmplifyBackendUpdateBackendAuthOAuthConfig#OAuthScopes
   */
  readonly oAuthScopes?: string[];

  /**
   * @schema AmplifyBackendUpdateBackendAuthOAuthConfig#RedirectSignInURIs
   */
  readonly redirectSignInUrIs?: string[];

  /**
   * @schema AmplifyBackendUpdateBackendAuthOAuthConfig#RedirectSignOutURIs
   */
  readonly redirectSignOutUrIs?: string[];

  /**
   * @schema AmplifyBackendUpdateBackendAuthOAuthConfig#SocialProviderSettings
   */
  readonly socialProviderSettings?: AmplifyBackendSocialProviderSettings;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthOAuthConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthOAuthConfig(obj: AmplifyBackendUpdateBackendAuthOAuthConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainPrefix': obj.domainPrefix,
    'OAuthGrantType': obj.oAuthGrantType,
    'OAuthScopes': obj.oAuthScopes?.map(y => y),
    'RedirectSignInURIs': obj.redirectSignInUrIs?.map(y => y),
    'RedirectSignOutURIs': obj.redirectSignOutUrIs?.map(y => y),
    'SocialProviderSettings': toJson_AmplifyBackendSocialProviderSettings(obj.socialProviderSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendUpdateBackendAuthPasswordPolicyConfig
 */
export interface AmplifyBackendUpdateBackendAuthPasswordPolicyConfig {
  /**
   * @schema AmplifyBackendUpdateBackendAuthPasswordPolicyConfig#AdditionalConstraints
   */
  readonly additionalConstraints?: string[];

  /**
   * @schema AmplifyBackendUpdateBackendAuthPasswordPolicyConfig#MinimumLength
   */
  readonly minimumLength?: number;

}

/**
 * Converts an object of type 'AmplifyBackendUpdateBackendAuthPasswordPolicyConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendUpdateBackendAuthPasswordPolicyConfig(obj: AmplifyBackendUpdateBackendAuthPasswordPolicyConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdditionalConstraints': obj.additionalConstraints?.map(y => y),
    'MinimumLength': obj.minimumLength,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendEmailSettings
 */
export interface AmplifyBackendEmailSettings {
  /**
   * @schema AmplifyBackendEmailSettings#EmailMessage
   */
  readonly emailMessage?: string;

  /**
   * @schema AmplifyBackendEmailSettings#EmailSubject
   */
  readonly emailSubject?: string;

}

/**
 * Converts an object of type 'AmplifyBackendEmailSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendEmailSettings(obj: AmplifyBackendEmailSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailMessage': obj.emailMessage,
    'EmailSubject': obj.emailSubject,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendSmsSettings
 */
export interface AmplifyBackendSmsSettings {
  /**
   * @schema AmplifyBackendSmsSettings#SmsMessage
   */
  readonly smsMessage?: string;

}

/**
 * Converts an object of type 'AmplifyBackendSmsSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendSmsSettings(obj: AmplifyBackendSmsSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SmsMessage': obj.smsMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendSettings
 */
export interface AmplifyBackendSettings {
  /**
   * @schema AmplifyBackendSettings#MfaTypes
   */
  readonly mfaTypes?: string[];

  /**
   * @schema AmplifyBackendSettings#SmsMessage
   */
  readonly smsMessage?: string;

}

/**
 * Converts an object of type 'AmplifyBackendSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendSettings(obj: AmplifyBackendSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MfaTypes': obj.mfaTypes?.map(y => y),
    'SmsMessage': obj.smsMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendSocialProviderSettings
 */
export interface AmplifyBackendSocialProviderSettings {
  /**
   * @schema AmplifyBackendSocialProviderSettings#Facebook
   */
  readonly facebook?: AmplifyBackendBackendAuthSocialProviderConfig;

  /**
   * @schema AmplifyBackendSocialProviderSettings#Google
   */
  readonly google?: AmplifyBackendBackendAuthSocialProviderConfig;

  /**
   * @schema AmplifyBackendSocialProviderSettings#LoginWithAmazon
   */
  readonly loginWithAmazon?: AmplifyBackendBackendAuthSocialProviderConfig;

  /**
   * @schema AmplifyBackendSocialProviderSettings#SignInWithApple
   */
  readonly signInWithApple?: AmplifyBackendBackendAuthAppleProviderConfig;

}

/**
 * Converts an object of type 'AmplifyBackendSocialProviderSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendSocialProviderSettings(obj: AmplifyBackendSocialProviderSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Facebook': toJson_AmplifyBackendBackendAuthSocialProviderConfig(obj.facebook),
    'Google': toJson_AmplifyBackendBackendAuthSocialProviderConfig(obj.google),
    'LoginWithAmazon': toJson_AmplifyBackendBackendAuthSocialProviderConfig(obj.loginWithAmazon),
    'SignInWithApple': toJson_AmplifyBackendBackendAuthAppleProviderConfig(obj.signInWithApple),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendAuthSocialProviderConfig
 */
export interface AmplifyBackendBackendAuthSocialProviderConfig {
  /**
   * @schema AmplifyBackendBackendAuthSocialProviderConfig#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema AmplifyBackendBackendAuthSocialProviderConfig#ClientSecret
   */
  readonly clientSecret?: string;

}

/**
 * Converts an object of type 'AmplifyBackendBackendAuthSocialProviderConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendAuthSocialProviderConfig(obj: AmplifyBackendBackendAuthSocialProviderConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientId': obj.clientId,
    'ClientSecret': obj.clientSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AmplifyBackendBackendAuthAppleProviderConfig
 */
export interface AmplifyBackendBackendAuthAppleProviderConfig {
  /**
   * @schema AmplifyBackendBackendAuthAppleProviderConfig#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema AmplifyBackendBackendAuthAppleProviderConfig#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema AmplifyBackendBackendAuthAppleProviderConfig#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema AmplifyBackendBackendAuthAppleProviderConfig#TeamId
   */
  readonly teamId?: string;

}

/**
 * Converts an object of type 'AmplifyBackendBackendAuthAppleProviderConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AmplifyBackendBackendAuthAppleProviderConfig(obj: AmplifyBackendBackendAuthAppleProviderConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientId': obj.clientId,
    'KeyId': obj.keyId,
    'PrivateKey': obj.privateKey,
    'TeamId': obj.teamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
