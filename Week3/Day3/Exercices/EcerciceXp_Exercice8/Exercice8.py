from faker import Faker
from faker.providers import DynamicProvider

code_languages_provider = DynamicProvider(
    provider_name="code_languages",
    elements=["python", "php", "c#", "c++", "perl", "VB", "java", "javascript", "ruby", "assembly", "pascal"],
)

fake = Faker()
fake.add_provider(code_languages_provider)
users = []

def addUsersInList():
    for _ in range(10):
        a_dict = {"name": fake.name(), "adress": fake.address(), "langage_code": fake.code_languages()}
        users.append(a_dict)
        print(a_dict)
addUsersInList()