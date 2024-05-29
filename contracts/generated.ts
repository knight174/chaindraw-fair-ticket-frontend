import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lottery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lotteryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_organizer', internalType: 'address', type: 'address' },
      { name: '_concertId', internalType: 'uint256', type: 'uint256' },
      { name: '_ticketType', internalType: 'uint256', type: 'uint256' },
      { name: '_typeName', internalType: 'string', type: 'string' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_url', internalType: 'string', type: 'string' },
      { name: '_ticketCount', internalType: 'uint256', type: 'uint256' },
      { name: '_ddl', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'LotteryEscrowError__DepositTimeOut' },
  { type: 'error', inputs: [], name: 'LotteryEscrowError__alreadyJoin' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'randomWords',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'payment',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ChainlinkVrf__RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'numWords',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'ChainlinkVrf__RequestSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'concertId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'ticketType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'organizer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'money',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LotteryEscrow__ClaimedFund',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lotteryAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LotteryEscrow__CompleteDraw',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'concertId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'ticketType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'money',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LotteryEscrow__Deposited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'concertId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'ticketType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'nonWinner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'money',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LotteryEscrow__NonWinner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'concertId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'ticketType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'money',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LotteryEscrow__Refunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'concertId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'ticketType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LotteryEscrow__Winner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'Factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allBuyer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'completeDraw',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'concertId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ddl',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'deposits',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isWinner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastRequestId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'linkToken',
    outputs: [
      {
        name: '',
        internalType: 'contract LinkTokenInterface',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'organizer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'participant', internalType: 'address', type: 'address' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'remainingTicketCount',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'requestIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 's_requests',
    outputs: [
      { name: 'paid', internalType: 'uint256', type: 'uint256' },
      { name: 'fulfilled', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startLottery',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ticketCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ticketType',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'url',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawLink',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useReadLottery = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"Factory"`
 */
export const useReadLotteryFactory = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'Factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"allBuyer"`
 */
export const useReadLotteryAllBuyer = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'allBuyer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLotteryBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"completeDraw"`
 */
export const useReadLotteryCompleteDraw = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'completeDraw',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"concertId"`
 */
export const useReadLotteryConcertId = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'concertId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"ddl"`
 */
export const useReadLotteryDdl = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'ddl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"deposits"`
 */
export const useReadLotteryDeposits = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'deposits',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadLotteryGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadLotteryIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"isWinner"`
 */
export const useReadLotteryIsWinner = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'isWinner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"lastRequestId"`
 */
export const useReadLotteryLastRequestId = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'lastRequestId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"linkToken"`
 */
export const useReadLotteryLinkToken = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'linkToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"name"`
 */
export const useReadLotteryName = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"organizer"`
 */
export const useReadLotteryOrganizer = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'organizer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLotteryOwner = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadLotteryOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"price"`
 */
export const useReadLotteryPrice = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'price',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"remainingTicketCount"`
 */
export const useReadLotteryRemainingTicketCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'remainingTicketCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"requestIds"`
 */
export const useReadLotteryRequestIds = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'requestIds',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"s_requests"`
 */
export const useReadLotterySRequests = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 's_requests',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLotterySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lotteryAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadLotterySymbol = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"ticketCount"`
 */
export const useReadLotteryTicketCount = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'ticketCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"ticketType"`
 */
export const useReadLotteryTicketType = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'ticketType',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadLotteryTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"url"`
 */
export const useReadLotteryUrl = /*#__PURE__*/ createUseReadContract({
  abi: lotteryAbi,
  functionName: 'url',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useWriteLottery = /*#__PURE__*/ createUseWriteContract({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteLotteryApprove = /*#__PURE__*/ createUseWriteContract({
  abi: lotteryAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteLotteryDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: lotteryAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useWriteLotteryRawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteLotteryRefund = /*#__PURE__*/ createUseWriteContract({
  abi: lotteryAbi,
  functionName: 'refund',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLotteryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteLotterySafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteLotterySetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"startLottery"`
 */
export const useWriteLotteryStartLottery = /*#__PURE__*/ createUseWriteContract(
  { abi: lotteryAbi, functionName: 'startLottery' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteLotteryTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: lotteryAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLotteryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lotteryAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"withdrawLink"`
 */
export const useWriteLotteryWithdrawLink = /*#__PURE__*/ createUseWriteContract(
  { abi: lotteryAbi, functionName: 'withdrawLink' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useSimulateLottery = /*#__PURE__*/ createUseSimulateContract({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateLotteryApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateLotteryDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 */
export const useSimulateLotteryRawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateLotteryRefund = /*#__PURE__*/ createUseSimulateContract(
  { abi: lotteryAbi, functionName: 'refund' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLotteryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateLotterySafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateLotterySetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"startLottery"`
 */
export const useSimulateLotteryStartLottery =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'startLottery',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateLotteryTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLotteryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lotteryAbi}__ and `functionName` set to `"withdrawLink"`
 */
export const useSimulateLotteryWithdrawLink =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lotteryAbi,
    functionName: 'withdrawLink',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__
 */
export const useWatchLotteryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: lotteryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchLotteryApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchLotteryApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchLotteryBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"ChainlinkVrf__RequestFulfilled"`
 */
export const useWatchLotteryChainlinkVrfRequestFulfilledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'ChainlinkVrf__RequestFulfilled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"ChainlinkVrf__RequestSent"`
 */
export const useWatchLotteryChainlinkVrfRequestSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'ChainlinkVrf__RequestSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"LotteryEscrow__ClaimedFund"`
 */
export const useWatchLotteryLotteryEscrowClaimedFundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'LotteryEscrow__ClaimedFund',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"LotteryEscrow__CompleteDraw"`
 */
export const useWatchLotteryLotteryEscrowCompleteDrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'LotteryEscrow__CompleteDraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"LotteryEscrow__Deposited"`
 */
export const useWatchLotteryLotteryEscrowDepositedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'LotteryEscrow__Deposited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"LotteryEscrow__NonWinner"`
 */
export const useWatchLotteryLotteryEscrowNonWinnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'LotteryEscrow__NonWinner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"LotteryEscrow__Refunded"`
 */
export const useWatchLotteryLotteryEscrowRefundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'LotteryEscrow__Refunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"LotteryEscrow__Winner"`
 */
export const useWatchLotteryLotteryEscrowWinnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'LotteryEscrow__Winner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const useWatchLotteryMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLotteryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lotteryAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLotteryTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lotteryAbi,
    eventName: 'Transfer',
  })