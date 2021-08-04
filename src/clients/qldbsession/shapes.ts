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
 * @schema QldbSessionStartSessionRequest
 */
export interface QldbSessionStartSessionRequest {
  /**
   * @schema QldbSessionStartSessionRequest#LedgerName
   */
  readonly ledgerName: string;

}

/**
 * @schema QldbSessionStartTransactionRequest
 */
export interface QldbSessionStartTransactionRequest {
}

/**
 * @schema QldbSessionEndSessionRequest
 */
export interface QldbSessionEndSessionRequest {
}

/**
 * @schema QldbSessionCommitTransactionRequest
 */
export interface QldbSessionCommitTransactionRequest {
  /**
   * @schema QldbSessionCommitTransactionRequest#TransactionId
   */
  readonly transactionId: string;

  /**
   * @schema QldbSessionCommitTransactionRequest#CommitDigest
   */
  readonly commitDigest: any;

}

/**
 * @schema QldbSessionAbortTransactionRequest
 */
export interface QldbSessionAbortTransactionRequest {
}

/**
 * @schema QldbSessionExecuteStatementRequest
 */
export interface QldbSessionExecuteStatementRequest {
  /**
   * @schema QldbSessionExecuteStatementRequest#TransactionId
   */
  readonly transactionId: string;

  /**
   * @schema QldbSessionExecuteStatementRequest#Statement
   */
  readonly statement: string;

  /**
   * @schema QldbSessionExecuteStatementRequest#Parameters
   */
  readonly parameters?: QldbSessionValueHolder[];

}

/**
 * @schema QldbSessionFetchPageRequest
 */
export interface QldbSessionFetchPageRequest {
  /**
   * @schema QldbSessionFetchPageRequest#TransactionId
   */
  readonly transactionId: string;

  /**
   * @schema QldbSessionFetchPageRequest#NextPageToken
   */
  readonly nextPageToken: string;

}

/**
 * @schema QldbSessionStartSessionResult
 */
export interface QldbSessionStartSessionResult {
  /**
   * @schema QldbSessionStartSessionResult#SessionToken
   */
  readonly sessionToken?: string;

}

/**
 * @schema QldbSessionStartTransactionResult
 */
export interface QldbSessionStartTransactionResult {
  /**
   * @schema QldbSessionStartTransactionResult#TransactionId
   */
  readonly transactionId?: string;

}

/**
 * @schema QldbSessionEndSessionResult
 */
export interface QldbSessionEndSessionResult {
}

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

}

/**
 * @schema QldbSessionAbortTransactionResult
 */
export interface QldbSessionAbortTransactionResult {
}

/**
 * @schema QldbSessionExecuteStatementResult
 */
export interface QldbSessionExecuteStatementResult {
  /**
   * @schema QldbSessionExecuteStatementResult#FirstPage
   */
  readonly firstPage?: QldbSessionPage;

}

/**
 * @schema QldbSessionFetchPageResult
 */
export interface QldbSessionFetchPageResult {
  /**
   * @schema QldbSessionFetchPageResult#Page
   */
  readonly page?: QldbSessionPage;

}

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
