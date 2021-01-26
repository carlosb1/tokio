window.BENCHMARK_DATA = {
  "lastUpdate": 1611688410326,
  "repoUrl": "https://github.com/carlosb1/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314959564,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1019,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14559,
            "range": "± 3929",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1045,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14917,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 34",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324749506,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 924,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15161,
            "range": "± 4086",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 874,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14986,
            "range": "± 4366",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549190558,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1052,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16954,
            "range": "± 8337",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1096,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14894,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 611,
            "range": "± 25",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558676197,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1058,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15094,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1022,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14201,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 545,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559893134,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 981,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15833,
            "range": "± 8715",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1067,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16713,
            "range": "± 13609",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348676,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1005,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13752,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 927,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13180,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 541,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636002716,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 905,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15309,
            "range": "± 5774",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 954,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15280,
            "range": "± 6096",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 523,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725012703,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 913,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14214,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 922,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15159,
            "range": "± 5870",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 487,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605731980234,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 751,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12495,
            "range": "± 3795",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 821,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12921,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 471,
            "range": "± 120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852495335,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1026,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17561,
            "range": "± 5098",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1069,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16640,
            "range": "± 8681",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 554,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896461076,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 851,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13799,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14280,
            "range": "± 5421",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3549092a0cb760938c9cdab3013fa38c8d392db0",
          "message": "docs: fix tokio-stream features not being displayed (#3378)",
          "timestamp": "2021-01-05T11:43:09+01:00",
          "tree_id": "de0c6ff59c7c647272bf5736b57fb904f22e036a",
          "url": "https://github.com/carlosb1/tokio/commit/3549092a0cb760938c9cdab3013fa38c8d392db0"
        },
        "date": 1609873429995,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1002,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15323,
            "range": "± 3932",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1017,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15594,
            "range": "± 7877",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 593,
            "range": "± 575",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/carlosb1/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1610133619981,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1013,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15956,
            "range": "± 5158",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1044,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15355,
            "range": "± 4044",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 596,
            "range": "± 33",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "766a89bf94631da0d30d43e962f35ee623b9f1d8",
          "message": "chore: prepare tokio-stream 0.1.2 (#3414)",
          "timestamp": "2021-01-12T21:38:51+01:00",
          "tree_id": "567616b1b295c7e0f49dd48d4414f83d38452588",
          "url": "https://github.com/carlosb1/tokio/commit/766a89bf94631da0d30d43e962f35ee623b9f1d8"
        },
        "date": 1610557260519,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1009,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15510,
            "range": "± 4865",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1037,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16579,
            "range": "± 9520",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 36",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314974927,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199046,
            "range": "± 55572",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 760862,
            "range": "± 157394",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5490742,
            "range": "± 748448",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20486755,
            "range": "± 2300375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324750921,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 178128,
            "range": "± 14270",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 707946,
            "range": "± 48048",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5326109,
            "range": "± 635423",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19949182,
            "range": "± 3024767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549203912,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182327,
            "range": "± 35912",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 649727,
            "range": "± 102719",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4047012,
            "range": "± 839128",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18946145,
            "range": "± 2027569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558645947,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191217,
            "range": "± 14072",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 710720,
            "range": "± 43091",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5226983,
            "range": "± 533736",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19521931,
            "range": "± 2271038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559892943,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191688,
            "range": "± 39550",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 724625,
            "range": "± 52874",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5279089,
            "range": "± 569953",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21143658,
            "range": "± 1850531",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348602,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179160,
            "range": "± 73737",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 618494,
            "range": "± 150449",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4766918,
            "range": "± 1107083",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19012569,
            "range": "± 4448367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636009065,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 214451,
            "range": "± 25711",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 790044,
            "range": "± 167979",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5645160,
            "range": "± 704481",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22209149,
            "range": "± 3825346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725037410,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 208313,
            "range": "± 45110",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 736590,
            "range": "± 151516",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5234403,
            "range": "± 831789",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20304040,
            "range": "± 2144433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732017041,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195866,
            "range": "± 16539",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727582,
            "range": "± 199697",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5428466,
            "range": "± 908457",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20820491,
            "range": "± 4055596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852489821,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 189192,
            "range": "± 8967",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 702064,
            "range": "± 44051",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5500810,
            "range": "± 1053690",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20865377,
            "range": "± 2857375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896473214,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194070,
            "range": "± 27873",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 694259,
            "range": "± 87017",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5250419,
            "range": "± 1213331",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19153793,
            "range": "± 2780219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3549092a0cb760938c9cdab3013fa38c8d392db0",
          "message": "docs: fix tokio-stream features not being displayed (#3378)",
          "timestamp": "2021-01-05T11:43:09+01:00",
          "tree_id": "de0c6ff59c7c647272bf5736b57fb904f22e036a",
          "url": "https://github.com/carlosb1/tokio/commit/3549092a0cb760938c9cdab3013fa38c8d392db0"
        },
        "date": 1609873436396,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 200021,
            "range": "± 45337",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 731914,
            "range": "± 122819",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5148670,
            "range": "± 1022471",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20803870,
            "range": "± 2508235",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/carlosb1/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1610133639112,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 196454,
            "range": "± 62195",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 702901,
            "range": "± 112684",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5278643,
            "range": "± 1501086",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19236594,
            "range": "± 2733523",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "766a89bf94631da0d30d43e962f35ee623b9f1d8",
          "message": "chore: prepare tokio-stream 0.1.2 (#3414)",
          "timestamp": "2021-01-12T21:38:51+01:00",
          "tree_id": "567616b1b295c7e0f49dd48d4414f83d38452588",
          "url": "https://github.com/carlosb1/tokio/commit/766a89bf94631da0d30d43e962f35ee623b9f1d8"
        },
        "date": 1610557272399,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 184571,
            "range": "± 29904",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 732737,
            "range": "± 99739",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5008589,
            "range": "± 1210519",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20651924,
            "range": "± 3410401",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314979788,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13595,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 916,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 548,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13431,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 916,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324754941,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13492,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 950,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 611,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13849,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 956,
            "range": "± 196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549191489,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15074,
            "range": "± 3954",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1104,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 639,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15715,
            "range": "± 5843",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1077,
            "range": "± 260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558672781,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16250,
            "range": "± 6549",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1148,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 642,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16877,
            "range": "± 5879",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1120,
            "range": "± 177",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559887160,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14761,
            "range": "± 6659",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1111,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 572,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14899,
            "range": "± 6462",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1040,
            "range": "± 180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570353023,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17403,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1046,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 596,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17072,
            "range": "± 5572",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1016,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605635995329,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14052,
            "range": "± 2557",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1066,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 635,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14784,
            "range": "± 3824",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1064,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725013037,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16289,
            "range": "± 6362",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 641,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14883,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1141,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732024626,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15022,
            "range": "± 5746",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1023,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 610,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14804,
            "range": "± 4029",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1050,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504046,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15976,
            "range": "± 6358",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1140,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 657,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16059,
            "range": "± 4105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1126,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896460411,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 19438,
            "range": "± 3548",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 774,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 504,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18618,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 886,
            "range": "± 362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3549092a0cb760938c9cdab3013fa38c8d392db0",
          "message": "docs: fix tokio-stream features not being displayed (#3378)",
          "timestamp": "2021-01-05T11:43:09+01:00",
          "tree_id": "de0c6ff59c7c647272bf5736b57fb904f22e036a",
          "url": "https://github.com/carlosb1/tokio/commit/3549092a0cb760938c9cdab3013fa38c8d392db0"
        },
        "date": 1609873431876,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18419,
            "range": "± 7276",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1143,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18148,
            "range": "± 7099",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1124,
            "range": "± 229",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/carlosb1/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1610133636617,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14705,
            "range": "± 3931",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1055,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 657,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15446,
            "range": "± 6789",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1118,
            "range": "± 67",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "766a89bf94631da0d30d43e962f35ee623b9f1d8",
          "message": "chore: prepare tokio-stream 0.1.2 (#3414)",
          "timestamp": "2021-01-12T21:38:51+01:00",
          "tree_id": "567616b1b295c7e0f49dd48d4414f83d38452588",
          "url": "https://github.com/carlosb1/tokio/commit/766a89bf94631da0d30d43e962f35ee623b9f1d8"
        },
        "date": 1610557261198,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16497,
            "range": "± 6940",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1093,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 656,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16895,
            "range": "± 6110",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1100,
            "range": "± 286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35b1a4d0b3a411f52ffc97010b9b002e53bd0d84",
          "message": "chore: prepare Tokio 1.1.0 (#3462)",
          "timestamp": "2021-01-22T23:05:37+01:00",
          "tree_id": "54efedad7616780dc46f50b4a6248de978daa8dc",
          "url": "https://github.com/carlosb1/tokio/commit/35b1a4d0b3a411f52ffc97010b9b002e53bd0d84"
        },
        "date": 1611688409020,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15910,
            "range": "± 5484",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1102,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 654,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16821,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1072,
            "range": "± 82",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314997643,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6701051,
            "range": "± 1798407",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6357946,
            "range": "± 1969273",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6190077,
            "range": "± 1989686",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 588,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 645,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48623,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 901,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1057858,
            "range": "± 197528",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768305,
            "range": "± 105579",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324759979,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6516564,
            "range": "± 2673764",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6603280,
            "range": "± 1010301",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5967313,
            "range": "± 2223714",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 604,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 606,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45361,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 835,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1120543,
            "range": "± 16131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 800918,
            "range": "± 22116",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549207449,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6803300,
            "range": "± 2440677",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6651924,
            "range": "± 1480231",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6405364,
            "range": "± 2450565",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 668,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 667,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 667,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50192,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 799,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1118325,
            "range": "± 21375",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 816811,
            "range": "± 316994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558683599,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6754053,
            "range": "± 2766922",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6486377,
            "range": "± 1920826",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6544483,
            "range": "± 3004414",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 834,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 842,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 845,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 57023,
            "range": "± 7455",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1048,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1072969,
            "range": "± 131055",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 764003,
            "range": "± 148570",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559901295,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5738427,
            "range": "± 2801992",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5782978,
            "range": "± 1550441",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 4938344,
            "range": "± 2609337",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 646,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 616,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 656,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52459,
            "range": "± 9246",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 787,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 876850,
            "range": "± 128609",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 630049,
            "range": "± 83042",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570390864,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7194053,
            "range": "± 2331201",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6928458,
            "range": "± 1519084",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6464793,
            "range": "± 2430089",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 923,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 911,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 920,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66036,
            "range": "± 6878",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1092,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1172665,
            "range": "± 151747",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 792689,
            "range": "± 98126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636006243,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6386215,
            "range": "± 2561315",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6223133,
            "range": "± 1216930",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5641856,
            "range": "± 2812615",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 782,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 771,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 748,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56412,
            "range": "± 10956",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 968,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1047860,
            "range": "± 157168",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 699818,
            "range": "± 128883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725015672,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6265900,
            "range": "± 1903787",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5980619,
            "range": "± 1425562",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5608356,
            "range": "± 1837833",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 553,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 551,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 551,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 32381,
            "range": "± 3229",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 747,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 952719,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 690909,
            "range": "± 15989",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732057947,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6429590,
            "range": "± 1921395",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6087351,
            "range": "± 1216119",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5570765,
            "range": "± 1754220",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 494,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 489,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 518,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39959,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 720,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 973766,
            "range": "± 210658",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 681859,
            "range": "± 151210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504276,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6976499,
            "range": "± 2320668",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7088300,
            "range": "± 1690727",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6373230,
            "range": "± 2466055",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 805,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49997,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 871,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1147945,
            "range": "± 6018",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 836883,
            "range": "± 6205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896470436,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6396651,
            "range": "± 2089250",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6210787,
            "range": "± 1599888",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5777463,
            "range": "± 2201398",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 876,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 879,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 877,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 55799,
            "range": "± 2028",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1076,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1092314,
            "range": "± 31319",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 774222,
            "range": "± 43076",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3549092a0cb760938c9cdab3013fa38c8d392db0",
          "message": "docs: fix tokio-stream features not being displayed (#3378)",
          "timestamp": "2021-01-05T11:43:09+01:00",
          "tree_id": "de0c6ff59c7c647272bf5736b57fb904f22e036a",
          "url": "https://github.com/carlosb1/tokio/commit/3549092a0cb760938c9cdab3013fa38c8d392db0"
        },
        "date": 1609873448852,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6590450,
            "range": "± 2844472",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6765973,
            "range": "± 1523473",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6156891,
            "range": "± 2725242",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 602,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 575,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 601,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 82569,
            "range": "± 7018",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1326,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1051356,
            "range": "± 121358",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 815331,
            "range": "± 61032",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/carlosb1/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1610133643791,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6844237,
            "range": "± 3163323",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6428935,
            "range": "± 2965954",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6354721,
            "range": "± 3773527",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 937,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 924,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 922,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 134092,
            "range": "± 128939",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1762,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1095247,
            "range": "± 321870",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768452,
            "range": "± 108701",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "766a89bf94631da0d30d43e962f35ee623b9f1d8",
          "message": "chore: prepare tokio-stream 0.1.2 (#3414)",
          "timestamp": "2021-01-12T21:38:51+01:00",
          "tree_id": "567616b1b295c7e0f49dd48d4414f83d38452588",
          "url": "https://github.com/carlosb1/tokio/commit/766a89bf94631da0d30d43e962f35ee623b9f1d8"
        },
        "date": 1610557276736,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6675519,
            "range": "± 2822118",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6701661,
            "range": "± 1300504",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6506925,
            "range": "± 2859607",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 673,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 666,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 664,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 83219,
            "range": "± 2308",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1508,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1145149,
            "range": "± 44721",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 833388,
            "range": "± 89291",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}