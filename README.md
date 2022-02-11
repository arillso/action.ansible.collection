# Action: Ansible Collection

Build and publish an Ansible Collection to Ansible Galaxy.

## Inputs

### api_key

## api_key

**Required**: Ansible Galaxy API key.

This should be stored in a Secret on GitHub. See [Creating and Using Secrets Encrypted Variables](https://help.github.com/en/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables).

## collection_dir

**Default**: `./`

The directory in which the Ansible Collection is stored. This defaults to the project root.

Only change this if your Collection is not stored in your project root.

## galaxy_version

Semver-compatible string: `1`, `1.1`, `1.1.1`, `1.1.1-alpha`

Dynamically inject a semver-compatible version into your `galaxy.yml` file.

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
