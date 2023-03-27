# Example

```javascript
import Dhcp from 'microsoft-dhcp-mgmt'

const dhcp = new Dhcp()

const main = async () => {
  // dhcp의 모든 임대 영역을 가져옵니다..
  await dhcp.scopeAll()

  // 특정 영역의 IP 임대 현황을 가져옵니다.
  await dhcp.scopeSpecific({ ScopeId: '192.168.140.0' })

  // 특정 IP의 임대 정보를 제거합니다.
  await dhcp.removeLeaseAddress({ IPAddress: '192.168.140.80' })

  // 예약(고정) IP를 추가합니다.
  await dhcp.addReservationAddress({
    ScopeId: '192.168.140.0',
    IPAddress: '192.168.140.80',
    ClientId: 'Mac Address',
    Description: 'Ocean의 Macbook',
  })

  // 예약(고정) IP를 삭제합니다.
  await dhcp.removeReservationAddress({
    ScopeId: '192.168.140.0',
    ClientId: 'Mac Address',
  })

  // 예약(고정) IP의 설명(Description)을 수정합니다.
  await dhcp.updateReservDescription({
    IPAddress: '192.168.140.80',
    Description: 'Ocean의 Macbook',
  })
}

main()
```
