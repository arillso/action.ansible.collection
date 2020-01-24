# Action: Ansible Collection

Build and publish an Ansible Collection to Ansible Galaxy.

## Inputs

### api_key

**Required** Ansible Galaxy API key.

This should be stored in a Secret on GitHub. See [Creating and Using Secrets Encrypted Variables](https://help.github.com/en/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables).

### galaxy_config_file

**Default**: `galaxy.yml`

A collection must have a galaxy.yml file that contains the necessary information to build a collection artifact. Defaults to `galaxy.yml` in the project root.

## Example Usage

```yaml
- name: Build and Deploy Collection
  uses: arillso/action.ansible.collection@master
  with:
    api_key: '3fe6ff42edm793ddei5'
```

## Inspired

- [artis3n](https://github.com/artis3n/ansible_galaxy_collection)

## License

This project is under the MIT License. See the [LICENSE](licence) file for the full license text.

## Copyright

(c) 2020, Arillso
