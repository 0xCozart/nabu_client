// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    NabuProfileAlpha: {
      id: 'kjzl6hvfrbw6c7m2o4v21vs0zc5b7y4lxrepf67z42ydmifpcnvxtby4fhu6mhl',
      accountRelation: { type: 'single' }
    },
    DAO: {
      id: 'kjzl6hvfrbw6c5e8lzp8pes8n3yrq5o3kai7el3yi7oqy44d85oksz90lczdfte',
      accountRelation: { type: 'list' }
    },
    MembersDaoProfile: {
      id: 'kjzl6hvfrbw6c75un6ip9ccmhbjh0ch38ds95ym675v66qjbg9phfzjeav03xpc',
      accountRelation: { type: 'list' }
    },
    Relations: {
      id: 'kjzl6hvfrbw6c5awvbcox32lixov8g07p8e0e7m9aoz4nprmny751kfmm353oc3',
      accountRelation: { type: 'list' }
    }
  },
  objects: {
    NabuProfileAlphaSocialNetworkInfo: {
      url: { type: 'string', required: false },
      network: { type: 'string', required: true },
      username: { type: 'string', required: true }
    },
    NabuProfileAlpha: {
      addressList: {
        type: 'list',
        required: false,
        item: { type: 'accountid', required: false }
      },
      displayName: { type: 'string', required: true },
      accountCreated: { type: 'datetime', required: true },
      socialNetworks: {
        type: 'list',
        required: false,
        item: {
          type: 'reference',
          refType: 'object',
          refName: 'NabuProfileAlphaSocialNetworkInfo',
          required: false
        }
      },
      userDID: { type: 'view', viewType: 'documentAccount' },
      daoList: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c5awvbcox32lixov8g07p8e0e7m9aoz4nprmny751kfmm353oc3',
          property: 'daoID'
        }
      },
      daoProfiles: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c5awvbcox32lixov8g07p8e0e7m9aoz4nprmny751kfmm353oc3',
          property: 'membersDaoProfileID'
        }
      }
    },
    DAO: {
      url: { type: 'string', required: false },
      name: { type: 'string', required: true },
      chain: { type: 'chainid', required: true },
      roles: {
        type: 'list',
        required: false,
        item: { type: 'string', required: false }
      },
      token: { type: 'accountid', required: true },
      createdAt: { type: 'datetime', required: true },
      membersDID: {
        type: 'list',
        required: false,
        item: { type: 'did', required: false }
      },
      description: { type: 'string', required: true },
      creator: { type: 'view', viewType: 'documentAccount' },
      members: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c5awvbcox32lixov8g07p8e0e7m9aoz4nprmny751kfmm353oc3',
          property: 'membersDaoProfileID'
        }
      }
    },
    MembersDaoProfile: {
      roles: {
        type: 'list',
        required: false,
        item: { type: 'string', required: false }
      },
      userDID: { type: 'did', required: true },
      dateJoined: { type: 'datetime', required: false },
      reputation: { type: 'integer', required: false },
      isActiveMemeber: { type: 'boolean', required: true },
      dao: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c5awvbcox32lixov8g07p8e0e7m9aoz4nprmny751kfmm353oc3',
          property: 'daoID'
        }
      }
    },
    Relations: {
      daoID: { type: 'streamid', required: true },
      nabuID: { type: 'streamid', required: true },
      membersDaoProfileID: { type: 'streamid', required: true },
      dao: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c5e8lzp8pes8n3yrq5o3kai7el3yi7oqy44d85oksz90lczdfte',
          property: 'daoID'
        }
      },
      nabu: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c7m2o4v21vs0zc5b7y4lxrepf67z42ydmifpcnvxtby4fhu6mhl',
          property: 'nabuID'
        }
      },
      membersDaoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c75un6ip9ccmhbjh0ch38ds95ym675v66qjbg9phfzjeav03xpc',
          property: 'membersDaoProfileID'
        }
      }
    }
  },
  enums: {},
  accountData: {
    nabuProfileAlpha: { type: 'node', name: 'NabuProfileAlpha' },
    daoList: { type: 'connection', name: 'DAO' },
    membersDaoProfileList: { type: 'connection', name: 'MembersDaoProfile' },
    relationsList: { type: 'connection', name: 'Relations' }
  }
};
