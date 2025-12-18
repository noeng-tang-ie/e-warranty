import { AbilityBuilder, createMongoAbility } from '@casl/ability'

export function defineAbilityFor(role: string) {
  const { can, cannot, build } = new AbilityBuilder(createMongoAbility)

  if (role === 'admin') {
    can('manage', 'all')
  } else {
    can('read', 'Dashboard')
    cannot('manage', 'Users')
  }

  return build()
}
