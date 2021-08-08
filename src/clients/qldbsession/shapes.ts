/**
 * @schema QldbSessionSendCommandRequest
 */
export interface QldbSessionSendCommandRequest {
  /**
   * @schema QldbSessionSendCommandRequest#SessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema QldbSessionSendCommandRequest#StartSession
   */
  readonly startSession?: QldbSessionStartSessionRequest;

  /**
   * @schema QldbSessionSendCommandRequest#StartTransaction
   */
  readonly startTransaction?: QldbSessionStartTransactionRequest;

  /**
   * @schema QldbSessionSendCommandRequest#EndSession
   */
  readonly endSession?: QldbSessionEndSessionRequest;

  /**
   * @schema QldbSessionSendCommandRequest#CommitTransaction
   */
  readonly commitTransaction?: QldbSessionCommitTransactionRequest;

  /**
   * @schema QldbSessionSendCommandRequest#AbortTransaction
   */
  readonly abortTransaction?: QldbSessionAbortTransactionRequest;

  /**
   * @schema QldbSessionSendCommandRequest#ExecuteStatement
   */
  readonly executeStatement?: QldbSessionExecuteStatementRequest;

  /**
   * @schema QldbSessionSendCommandRequest#FetchPage
   */
  readonly fetchPage?: QldbSessionFetchPageRequest;

}

/**
 * Converts an object of type 'QldbSessionSendCommandRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionSendCommandRequest(obj: QldbSessionSendCommandRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionToken': obj.sessionToken,
    'StartSession': toJson_QldbSessionStartSessionRequest(obj.startSession),
    'StartTransaction': toJson_QldbSessionStartTransactionRequest(obj.startTransaction),
    'EndSession': toJson_QldbSessionEndSessionRequest(obj.endSession),
    'CommitTransaction': toJson_QldbSessionCommitTransactionRequest(obj.commitTransaction),
    'AbortTransaction': toJson_QldbSessionAbortTransactionRequest(obj.abortTransaction),
    'ExecuteStatement': toJson_QldbSessionExecuteStatementRequest(obj.executeStatement),
    'FetchPage': toJson_QldbSessionFetchPageRequest(obj.fetchPage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionSendCommandResult
 */
export interface QldbSessionSendCommandResult {
  /**
   * @schema QldbSessionSendCommandResult#StartSession
   */
  readonly startSession?: QldbSessionStartSessionResult;

  /**
   * @schema QldbSessionSendCommandResult#StartTransaction
   */
  readonly startTransaction?: QldbSessionStartTransactionResult;

  /**
   * @schema QldbSessionSendCommandResult#EndSession
   */
  readonly endSession?: QldbSessionEndSessionResult;

  /**
   * @schema QldbSessionSendCommandResult#CommitTransaction
   */
  readonly commitTransaction?: QldbSessionCommitTransactionResult;

  /**
   * @schema QldbSessionSendCommandResult#AbortTransaction
   */
  readonly abortTransaction?: QldbSessionAbortTransactionResult;

  /**
   * @schema QldbSessionSendCommandResult#ExecuteStatement
   */
  readonly executeStatement?: QldbSessionExecuteStatementResult;

  /**
   * @schema QldbSessionSendCommandResult#FetchPage
   */
  readonly fetchPage?: QldbSessionFetchPageResult;

}

/**
 * Converts an object of type 'QldbSessionSendCommandResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionSendCommandResult(obj: QldbSessionSendCommandResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartSession': toJson_QldbSessionStartSessionResult(obj.startSession),
    'StartTransaction': toJson_QldbSessionStartTransactionResult(obj.startTransaction),
    'EndSession': toJson_QldbSessionEndSessionResult(obj.endSession),
    'CommitTransaction': toJson_QldbSessionCommitTransactionResult(obj.commitTransaction),
    'AbortTransaction': toJson_QldbSessionAbortTransactionResult(obj.abortTransaction),
    'ExecuteStatement': toJson_QldbSessionExecuteStatementResult(obj.executeStatement),
    'FetchPage': toJson_QldbSessionFetchPageResult(obj.fetchPage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionStartSessionRequest
 */
export interface QldbSessionStartSessionRequest {
  /**
   * @schema QldbSessionStartSessionRequest#LedgerName
   */
  readonly ledgerName?: string;

}

/**
 * Converts an object of type 'QldbSessionStartSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionStartSessionRequest(obj: QldbSessionStartSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LedgerName': obj.ledgerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionStartTransactionRequest
 */
export interface QldbSessionStartTransactionRequest {
}

/**
 * Converts an object of type 'QldbSessionStartTransactionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionStartTransactionRequest(obj: QldbSessionStartTransactionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionEndSessionRequest
 */
export interface QldbSessionEndSessionRequest {
}

/**
 * Converts an object of type 'QldbSessionEndSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionEndSessionRequest(obj: QldbSessionEndSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionCommitTransactionRequest
 */
export interface QldbSessionCommitTransactionRequest {
  /**
   * @schema QldbSessionCommitTransactionRequest#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema QldbSessionCommitTransactionRequest#CommitDigest
   */
  readonly commitDigest?: any;

}

/**
 * Converts an object of type 'QldbSessionCommitTransactionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionCommitTransactionRequest(obj: QldbSessionCommitTransactionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
    'CommitDigest': obj.commitDigest,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionAbortTransactionRequest
 */
export interface QldbSessionAbortTransactionRequest {
}

/**
 * Converts an object of type 'QldbSessionAbortTransactionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionAbortTransactionRequest(obj: QldbSessionAbortTransactionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionExecuteStatementRequest
 */
export interface QldbSessionExecuteStatementRequest {
  /**
   * @schema QldbSessionExecuteStatementRequest#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema QldbSessionExecuteStatementRequest#Statement
   */
  readonly statement?: string;

  /**
   * @schema QldbSessionExecuteStatementRequest#Parameters
   */
  readonly parameters?: QldbSessionValueHolder[];

}

/**
 * Converts an object of type 'QldbSessionExecuteStatementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionExecuteStatementRequest(obj: QldbSessionExecuteStatementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
    'Statement': obj.statement,
    'Parameters': obj.parameters?.map(y => toJson_QldbSessionValueHolder(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionFetchPageRequest
 */
export interface QldbSessionFetchPageRequest {
  /**
   * @schema QldbSessionFetchPageRequest#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema QldbSessionFetchPageRequest#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'QldbSessionFetchPageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionFetchPageRequest(obj: QldbSessionFetchPageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionStartSessionResult
 */
export interface QldbSessionStartSessionResult {
  /**
   * @schema QldbSessionStartSessionResult#SessionToken
   */
  readonly sessionToken?: string;

  /**
   * @schema QldbSessionStartSessionResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

}

/**
 * Converts an object of type 'QldbSessionStartSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionStartSessionResult(obj: QldbSessionStartSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionToken': obj.sessionToken,
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionStartTransactionResult
 */
export interface QldbSessionStartTransactionResult {
  /**
   * @schema QldbSessionStartTransactionResult#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema QldbSessionStartTransactionResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

}

/**
 * Converts an object of type 'QldbSessionStartTransactionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionStartTransactionResult(obj: QldbSessionStartTransactionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionEndSessionResult
 */
export interface QldbSessionEndSessionResult {
  /**
   * @schema QldbSessionEndSessionResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

}

/**
 * Converts an object of type 'QldbSessionEndSessionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionEndSessionResult(obj: QldbSessionEndSessionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionCommitTransactionResult
 */
export interface QldbSessionCommitTransactionResult {
  /**
   * @schema QldbSessionCommitTransactionResult#TransactionId
   */
  readonly transactionId?: string;

  /**
   * @schema QldbSessionCommitTransactionResult#CommitDigest
   */
  readonly commitDigest?: any;

  /**
   * @schema QldbSessionCommitTransactionResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

  /**
   * @schema QldbSessionCommitTransactionResult#ConsumedIOs
   */
  readonly consumedIOs?: QldbSessionIoUsage;

}

/**
 * Converts an object of type 'QldbSessionCommitTransactionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionCommitTransactionResult(obj: QldbSessionCommitTransactionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TransactionId': obj.transactionId,
    'CommitDigest': obj.commitDigest,
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
    'ConsumedIOs': toJson_QldbSessionIoUsage(obj.consumedIOs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionAbortTransactionResult
 */
export interface QldbSessionAbortTransactionResult {
  /**
   * @schema QldbSessionAbortTransactionResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

}

/**
 * Converts an object of type 'QldbSessionAbortTransactionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionAbortTransactionResult(obj: QldbSessionAbortTransactionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionExecuteStatementResult
 */
export interface QldbSessionExecuteStatementResult {
  /**
   * @schema QldbSessionExecuteStatementResult#FirstPage
   */
  readonly firstPage?: QldbSessionPage;

  /**
   * @schema QldbSessionExecuteStatementResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

  /**
   * @schema QldbSessionExecuteStatementResult#ConsumedIOs
   */
  readonly consumedIOs?: QldbSessionIoUsage;

}

/**
 * Converts an object of type 'QldbSessionExecuteStatementResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionExecuteStatementResult(obj: QldbSessionExecuteStatementResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirstPage': toJson_QldbSessionPage(obj.firstPage),
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
    'ConsumedIOs': toJson_QldbSessionIoUsage(obj.consumedIOs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionFetchPageResult
 */
export interface QldbSessionFetchPageResult {
  /**
   * @schema QldbSessionFetchPageResult#Page
   */
  readonly page?: QldbSessionPage;

  /**
   * @schema QldbSessionFetchPageResult#TimingInformation
   */
  readonly timingInformation?: QldbSessionTimingInformation;

  /**
   * @schema QldbSessionFetchPageResult#ConsumedIOs
   */
  readonly consumedIOs?: QldbSessionIoUsage;

}

/**
 * Converts an object of type 'QldbSessionFetchPageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionFetchPageResult(obj: QldbSessionFetchPageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Page': toJson_QldbSessionPage(obj.page),
    'TimingInformation': toJson_QldbSessionTimingInformation(obj.timingInformation),
    'ConsumedIOs': toJson_QldbSessionIoUsage(obj.consumedIOs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionValueHolder
 */
export interface QldbSessionValueHolder {
  /**
   * @schema QldbSessionValueHolder#IonBinary
   */
  readonly ionBinary?: any;

  /**
   * @schema QldbSessionValueHolder#IonText
   */
  readonly ionText?: string;

}

/**
 * Converts an object of type 'QldbSessionValueHolder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionValueHolder(obj: QldbSessionValueHolder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IonBinary': obj.ionBinary,
    'IonText': obj.ionText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionTimingInformation
 */
export interface QldbSessionTimingInformation {
  /**
   * @schema QldbSessionTimingInformation#ProcessingTimeMilliseconds
   */
  readonly processingTimeMilliseconds?: number;

}

/**
 * Converts an object of type 'QldbSessionTimingInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionTimingInformation(obj: QldbSessionTimingInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProcessingTimeMilliseconds': obj.processingTimeMilliseconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionIoUsage
 */
export interface QldbSessionIoUsage {
  /**
   * @schema QldbSessionIoUsage#ReadIOs
   */
  readonly readIOs?: number;

  /**
   * @schema QldbSessionIoUsage#WriteIOs
   */
  readonly writeIOs?: number;

}

/**
 * Converts an object of type 'QldbSessionIoUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionIoUsage(obj: QldbSessionIoUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadIOs': obj.readIOs,
    'WriteIOs': obj.writeIOs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QldbSessionPage
 */
export interface QldbSessionPage {
  /**
   * @schema QldbSessionPage#Values
   */
  readonly values?: QldbSessionValueHolder[];

  /**
   * @schema QldbSessionPage#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * Converts an object of type 'QldbSessionPage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QldbSessionPage(obj: QldbSessionPage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Values': obj.values?.map(y => toJson_QldbSessionValueHolder(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
