"""empty message

Revision ID: 50637ddd59c2
Revises: e2a0b991589e
Create Date: 2022-05-28 11:03:46.685675

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '50637ddd59c2'
down_revision = 'e2a0b991589e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('user_sport_id_fkey', 'user', type_='foreignkey')
    op.drop_column('user', 'sport_id')
    op.add_column('user_sports', sa.Column('user_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'user_sports', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_sports', type_='foreignkey')
    op.drop_column('user_sports', 'user_id')
    op.add_column('user', sa.Column('sport_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('user_sport_id_fkey', 'user', 'sports', ['sport_id'], ['id'])
    # ### end Alembic commands ###
